var Models = require('../models/export'),
	XMLWriter = require('xml-writer'),
	async = require('async'),
	fs		=	require("fs"),
	path = require('path'), 
	forEach	=	require('forEachAsync').forEachAsync,
	js2xmlparser	=	require("js2xmlparser"),
	Zip		=	require('node-7z');
  
module.exports=function(app) {
	app.post('/insert', function(req, res){
		var data = req.body, less=[];
		console.log(data);
		less.push({name: data.name, partID:[{pID: data.partid, image: data.image}] });
		Models.General.create({username: data.username, password: data.password, lessons: less}, function(err){
			if(err) return res.json(err);
			else return res.json({message: "success"});
		});	
	}); 
	app.post('/export', function(req, res){
		var xmlData = [],zip = path.join(__dirname, '../public/zip/'), myTask = new Zip(),
		exportfolder = path.join(__dirname, '../public/export/');
		Models.General.find({}, function(err, user){

			if(err || user == null) return res.json(err);
			else {
				console.log(user);
				forEach(user, function(nextUser, details, index, array){
					var data= {'@':{
								id: details._id,
								username: details.username,
								password: details.password,

					}};
					xmlData.push(data);
					nextUser();
				}).then(function(){
					var file1 = JSON.parse(JSON.stringify(xmlData)),
					xml = js2xmlparser.parse("library", { file: file1, });
					async.waterfall([
					function(cb){ fs.writeFile(exportfolder + '/library.xml', xml, cb); },
					function(cb){ myTask.add(zip , exportfolder + '/*').then(function(){ cb(); }).catch(function(err){ cb(err); }); },
					], function(err){
						if(err) return res.json(err);
						else{ return res.json({message: 'success'}); }
					});
				});
			}
		});
	});
};