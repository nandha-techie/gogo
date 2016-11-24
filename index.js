var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var port=process.env.PORT||1030;
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./routes/general')(app);

app.listen(port,function() {
	console.log('server running on port:',port);
});
