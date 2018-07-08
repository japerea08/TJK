//get the table body
const table = $("tbody");

//get an array of all the surveys in the database (array of objects)
$.get("/api/orders", function(data){
	data.forEach(function(element){
		console.log(element);
		//new row
		var row = $("<tr></tr");
		//table item
		const surveyNumber = $("<td></td>").text(element.snum).attr("value", "snum");
		const buyer = $("<td></td>").text(element.buyer).attr("value", "buyer");
		const address = $("<td></td>").text(element.address).attr("value", "address");
		address.attr("id", "address");
		const city = $("<td></td>").text(element.city).attr("value", "city");
		const state = $("<td></td>").text(element.state).attr("value", "state");
		const zipcode = $("<td></td>").text(element.zipcode).attr("value","zipcode");
		const ordered = $("<td></td>").text(element.date_ordered).attr("value","date_ordered");
		ordered.attr("class", "date");
		const needed = $("<td></td>").text(element.date_needed).attr("value", "date_needed");
		needed.attr("class", "date");
		const surveyed =  $("<td></td>").text(element.date_field).attr("value", "date_field");
		surveyed.attr("class", "date");
		const drafted = $("<td></td>").text(element.date_drafted).attr("value", "date_drafted");
		drafted.attr("class", "date");
		const cost = $("<td></td>").text(element.cost).attr("value","cost");

		if(element.canceled)
			var canceled = $("<td></td>").text("Canceled").attr("value","canceled");
		else
			var canceled = $("<td></td>").text("Ordered").attr("value","canceled");

		row.append(surveyNumber).append(buyer).append(address).append(city).append(state).append(zipcode).append(ordered).append(needed).append(surveyed).append(drafted).append(cost).append(canceled);
		table.append(row);
	});

});