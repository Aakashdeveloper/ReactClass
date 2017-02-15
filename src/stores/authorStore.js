var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes	= require('../constants/actionTypes');
var EventEmitter =require('events').EventEmitter;
var _ = require('lodash');
var assign = require('object-assign');
var CHANGE_EVENT = 'change'

var _authors = [];

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
	getAllAuthors:function(){
		return _authors;
	}

	getAuthorsById: function(){
		return _.find(_authors,{id:id})
	}

});


Dispatcher.register(function(action){
	switch(action.actionType){
		case ActionTypes.INITIALIZE;
			_authors = action.initialData.authors;
			AuthorStore.emitChanges;
		case ActionTypes.CREATE_AUTHOR;
			_authors.push(action.author);
			AuthorStore.emitChanges;
		
	}
})
module.exports=AuthorStore;