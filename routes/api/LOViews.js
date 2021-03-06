var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');
  
  var LOViews = [];
	var start = new Date(req.params.year, 0, 1);
	var end = new Date(req.params.year, 11, 31);
	
	//change this before deploying, use createdAt instead
	keystone.list('LOView').model.find().where('dateViewed').gte(start).lt(end).exec(function (err, results) {
		if (err || !results.length) {
			return next(err);
		}
		LOViews = results;
		var LOViewsJSON = JSON.stringify(LOViews);
		res.send(LOViewsJSON);
		//next();
	});
};

