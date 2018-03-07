$(document).ready(function (){
	$('#grabCars').on('click', function(){
		$.ajax({
		  url: "/grabTom",
		  type: "GET",
		}).then(function(stuffFromDb) {
		  	console.log('we got this stuff back from the backend!!!', stuffFromDb);
		  	for (var i = 0; i < stuffFromDb.length; i ++) {
		  		var div = $('<div>');
		  		div.text(stuffFromDb[i])
		  		$('#carsContainer').append(div);
		  	}
		});
	});
});