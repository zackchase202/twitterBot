var Twitter = require('twitter');
var fs = require("fs");

var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
var tweets = obj.tweets;

var client = new Twitter({
  consumer_key: 'EbJUcqH95IzqHvZSoVN39GlHx',
  consumer_secret: 'CigF8BepCmWuEwfWNqIn97oYlVi0SusKfKsRuTdRQ3B8BgpOZ3',
  access_token_key: '35559894-WuOJMDdDmq3jqYxftpzitvolphmMSxwgMDf0bi96a',
  access_token_secret: 'sIZIUAVTMI92rpXJhs1HfGczb2nUxpGEfeOzNUGFbrvdU'
});

for(var i = 0; i < tweets.length; i++){
	var tweet = tweets[i];
	if(!tweet.used){
		tweet.used = true;
		fs.writeFile('data.json', JSON.stringify(obj));
		client.post('statuses/update', {status: tweet.body},  function(error, tweet, response){
		  if(error) throw error;
		});
		break;
	}
}