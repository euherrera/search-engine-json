$('#searchButton').click(function() {
  var searchField = $('#search').val();
  
if (searchField != '') {
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
	var output = '<ul class= "searchresults">';
	$.each(data, function(key, val) {
		if ((val.name.search(myExp) != -1) ||
		(val.bio.search(myExp) != -1)) {
		output += '<li class="artists">';
		output += '<a href="' + val.link + '">' + '<h2>' + val.name + '</h2>' + '</a>';
		output += '<img src="images/' + val.shortname + '.jpg" alt="' + val.name +'" />';
		output += '<p>' + val.bio + '</p>';
		output += '</li>';
	}

	});

	output += '</ul>';
	$('#update').html(output);

	}); // get json	
	
}else {
	$('#update').html('please enter your search');
	
}


});



