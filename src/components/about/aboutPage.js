var React = require('react');
var About = React.createClass({
	statics:{
		willTransitionTo:function(transition, params,query,callback){
			if(!confirm('are you sure you want read')){
				transition.abort();
			}else{
				callback();
			}
		},
		willTransitionFrom: function(transition,component){
			if(!confirm('are you want to leave')){
				transition.abort();
			}

		}
	},
	render:function(){
		return(
				<div>
					<h1>About</h1>
					<p>
					  this application use followwing tech:
					  <ul>
					  	<li>React</li>
					  	<li>React Router</li>
					  	<li> Flux </li>
					  	<li> Node </li>
					  	<li> Gulp </li>
					  </ul>
					</p>
				</div>
			);
	}
});

module.exports= About;