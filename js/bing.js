$('#word').on('keyup', function() {
	if(!$('#word').val()) {
		$('.suggest').css('display', 'none');
		return;
	}
	$('.suggest').css('display', 'block');
	//alert($('#word').val());
	var URL = 'http://zzcypc.sinaapp.com/bing.php?q=' + $('#word').val();
	$.get(URL, function(data) {
		var results = data.AS.Results[0].Suggests;
		var htmltext = '';
		for(var i = 0; i < results.length; i++) {
			htmltext += "<li><a href=\"" + results[i].Url + "\"><strong>" + results[i].Txt + "</strong></a></li>";
		}
		//		results.each(function(){
		//			htmltext+="<li><a href=\""+results[i].Url+"\">"+results[i].Txt+"</a></li>";
		//		});
		$('.suggest').first().html(htmltext);
	});
});