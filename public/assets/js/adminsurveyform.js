//This file is all the logic to take in the info entered by the admin to create a new order
var snum = 0;
const today = new Date();
var date = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDay();

$.get("/api/number", function(data){
	snum = data[0].snum;
});

var forms = $("form");
console.log(typeof forms);
//the onclick for the submit button
$("#submitButton").on("click", e =>{
	var long = 0;
	if($("longLegal").is(":checked"))
		long = 1;

	e.preventDefault();
	var data = {
		survey: {
			buyer: $("#buyers").val(),
			address: $("#surveyAddress").val() + $("#surveyAddress2").val(),
			city: $("#surveyCity").val(), 
			state: $("#surveyState option:selected").val(),
			zipcode: $("#surveyzip").val(),
			date_ordered: date,
			date_needed: $("#date-needed").val(),
			comment: $("#comment").val(),
			contact_for_access: $("#contactName").val(),
			contact_number: $("#contactNumber").val()
		},
		company: {
			name: $("#companyName").val(),
			address: $("#address").val() + " " + $("#address2").val(),
			city: $("#city").val(),
			state: $("#state option:selected").val(),
			zip: $("#zip").val(),
			phone: $("#phone").val(),
			attention: $("#firstName").val() + " " + $("#lastName").val(),
			email: $("#email").val()
		},
		legal: {
			ldid: snum + 1,
			snum: snum + 1,
			lot: $("#lot").val(),
			block: $("#block").val(),
			subdivision: $("#subdivision").val(),
			plat: $("#plat").val(),
			page: $("#page").val(),
			county: $("#county").val(),
			long_legal: long
		},

		elevation:{
			elev_id: snum + 1,
			snum: snum + 1,
			flood_zone: $("#flood-zone").val(),
			baseflood: $("#base-flood").val(),
			community: $("#community").val(),
			panel: $("#panel").val(),
			firm_date: $("#firm-date").val()
		}
	};

	$.post("/api/create", data);
	console.log(data);
});

function validateForm(){
	//lets get the whole form

}
