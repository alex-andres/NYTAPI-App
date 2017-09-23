console.log("Hello world!");
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
  		'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
  		'q': "Snow",
  		
});
		var begin_date;
		var end_date = 2000;

		if (begin_date > 1850 && begin_date < 2017) {
			begin_date.toString;
			begin_date += "0101";

		{
			$.param[2] = {"begin_date" : begin_date};
		}

		url += $.param[2];

		}

			if (end_date > begin_date && end_date < 2017) {
				end_date.toString;
				end_date += "1231";

		{
			$.param[3] = {"end_date" : end_date};
		}

		url += $.param[3];

		}

		else if (end_date > 1851 && end_date < 2017) {
				end_date.toString;
				end_date += "1231";

		{
			$.param[2] = {"end_date" : end_date};
		}

		url += $.param[2];

		}

			
		var queryResults = 15;

var articleObject = "";

if (queryResults > 10) {

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

for (var i = 0; i < 10; i++) {
  	console.log(result.response.docs[i].headline.main);
  	console.log(result.response.docs[i].web_url)
  	console.log(result.response.docs[i].snippet)
  }
}).fail(function(err) {
  throw err;
});

$.param[3] = {"page" : 11};
		

		url += $.param[3];

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

for (var i = 0; i < queryResults-10; i++) {
  	console.log(result.response.docs[i].headline.main);
  	console.log(result.response.docs[i].web_url)
  	console.log(result.response.docs[i].snippet)
  }
}).fail(function(err) {
  throw err;
});

}

else {
	$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

for (var i = 0; i < 10; i++) {
  	console.log(result.response.docs[i].headline.main);
  	console.log(result.response.docs[i].web_url)
  	console.log(result.response.docs[i].snippet)
  }
}).fail(function(err) {
  throw err;
});
}
