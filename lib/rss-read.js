var FeedParser = require('feedparser')
var request = require('request');

var read = function(url, callback){

	var rss = {
		meta: [],
		items:[]
	}

	request(url)
		.pipe(new FeedParser())
		.on('error', function(err) {
			callback(err);
		})
		.on('meta', function (meta) {
			rss.meta.push(meta);
		})
		.on('readable', function (data) {
			var stream = this, item;
			while (item = stream.read()) {
			  rss.items.push(item);
			}
			console.log("READABLE", rss.meta.title);
			callback(null, rss)
		});
}

var sort = function(a, b){
	if(a.data>b.data){
		return 1;
	}
	else{
		return 0;
	}
}

module.exports = function(callback){

	var feeds = ["http://yabfog.com/blog/feed", "http://willrobotsdream.com/rss/", "http://developmentseed.org/blog.rss"];
	var items = [];
	var waiting = feeds.length;

	for(var i=0; i<feeds.length; i++){
		console.log(waiting, feeds[i]);
		read(feeds[i], function(err, rss){
			console.log(waiting, rss.items[0].meta.title);
			if(!err){
				for(var j=0; j<rss.items.length; j++){
					var item = {
						title:rss.items[j].title,
						//description:rss.items[j].description || "",
						url: rss.items[j].link,
						//date: rss.items[j].pubDate,
						//blog: rss.items[j].meta.title,
						//about: rss.items[j].meta.description
					}

					items.push(item);
				}
				waiting--;
			}
			else{
				//fix your rss feed
				console.log(err);
				waiting--;
			}

			if(waiting==0){
				console.log(items.length);
				callback(null, items.sort(sort));
			}

		});
	}
}

module.exports(function(err, results){
	console.log("ERR", err);
	console.log("RESULTS", results);
});