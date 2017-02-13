var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes	= require('../constants/actionTypes')

var AuthorActions ={
	createAuthor: function(author){
		var newAuthor = AuthorApi.saveAuthor(author)
		Dispatcher.dispatch({
				actionType:ActionTypes.Create_Author,	
				author: newAuthor
		})
	}

};

module.exports = AuthorActions;