var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/jack');
var Schema=mongoose.Schema;

var userSchema=Schema({
	username:String,
	password:String,
	lessons: [{
		name: String,
		partID: [
				{
				pID: String,
				image: String	
				}
	 	]
	}]
	
});

var user=mongoose.model('Export',userSchema);
module.exports={
	General:user,
	
};