var user = function (fn,ln,pwd,email){
	//{fn:'Xianjian', ln:'Bao', password:'123456', email:'baoxianjian@gmail.com', 
	this.fn = fn;
	this.ln = ln;
	this.password=pwd;
	this.email = email;
}

var post = function(title,pic,type,status,key_time,location,desc,pubat)
{
	this.uuid;
	this.title = title;
	this.picture = pic;
	this.status = status;
	this.key_time = key_time;
	this.location = location;
	this.desc = desc;
	this.pubat = pubat;
}

var comment = function( u_id, comment, pubat)
{
	this.uuid;
	this.u_id = u_id;
	this.comment = comment;
	this.pubat = pubat;
}



/*

{fn:'Xianjian', ln:'Bao', password:'123456', email:'baoxianjian@gmail.com', 
	posts:[
		{
			uuid:'xxxx',title:'xxx', type:0, status:0 , key_time:123456789, location:'Student Lounge of MUM', desc:'red pen', pubat:123456789, 
			comments:[{uuid:'xxxx',u_id:'xxxxxxxxxx',comment:'xxx', pubat:122345667}]
		}
	]
}
*/


module.exports.user = user;
module.exports.post = post;
module.exports.comment = comment;
