var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes	= require('../constants/actionTypes');
var EventEmitter =require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change'

var AuthorStore = assign({}, EventEmitter.prototype,{

	addChangeLister:function(callback){
		this.on('CHANGE_EVENT',callback)
	}

	removeChangeLister:function(callback){
		this.removeLister('CHANGE_EVENT',callback)
	}

	emitChange:function() {
		this.emit('CHANGE_EVENT');
	}

});


Dispatcher.register(function(action){
	switch(action.actionType){
		
	}
})
module.exports=AuthorStore;