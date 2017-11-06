'use strict';

var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);
var params = {
  q: '',
  count: 10,
  result_type: 'mixed'
}


module.exports = (app) => {

  app.route('/search_tweets/:keyword/:limit/:type').get(function(req, res){

    params = {
      q: req.params.keyword,
      count: req.params.limit,
      result_type: req.params.type
    }


    T.get('search/tweets', params)
    .catch((err) => {
      console.log('caught error', err.stack)
    })
    .then((result) => {

      res.json(result.data);

    })
  })
};
