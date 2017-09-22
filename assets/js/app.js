console.log("Hello world!");
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
  		'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
  		'q': "Snow Leopards",
  		
});
		var begin_date;
		var end_date = 2000;

		if (begin_date > 0) {
			begin_date.toString;
			begin_date += "0101";

		{
			$.param[2] = {"begin_date" : begin_date};
		}

		url += $.param[2];

		}

			if (end_date > 0) {
				end_date.toString;
				end_date += "1231";

		{
			$.param[3] = {"begin_date" : begin_date};
		}

		url += $.param[3];

		}

		else if (end_date > 0) {
				end_date.toString;
				end_date += "1231";

		{
			$.param[2] = {"begin_date" : begin_date};
		}

		url += $.param[2];

		}

			
		var queryResults = 5;

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

  for (var i = 0; i < queryResults; i++) {
  	console.log(result.response.docs[i].headline.main);
  	console.log(result.response.docs[i].web_url)
  	console.log(result.response.docs[i].snippet)
  }
}).fail(function(err) {
  throw err;
});