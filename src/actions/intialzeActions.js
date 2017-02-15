var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes	= require('../constants/actionTypes');
var AuthorApi 	= require('../api/AuthorApi');

var InitializeAction ={
	initApp: function(){
		Dispatcher.dispatch({
			actionType:ActionTypes.INITALIZE,
			initialData:{
				authors.AuthorApi.getAllAuthots()
			}
		})
	}

}

module.exports  = InitializeAction