//This file is all the logic to take in the info entered by the admin to create a new order

//logic to get the next survey number available
const snum  = 189999

//the onclick for the submit button
$("#submitButton").on("click", e =>{
	e.preventDefault();
	//survey object to store all the information entered by the admin
	var company = {
		company_name: $("#companyName").val(),
		address: $("#address").val() + $("#address2").val(),
		firstName: $("#firstName").val(),
		lastName: $("#lastName").val(),
		email: $("#email").val(),
		state: $("#state option:selected").text(),
		zipcode: $("#zip").val()
	};

	var survey = {
		snum : snum,
		buyer:,

		address: $("#surveyAddress").val() + $("#surveyAddress2").val(), 
		state: $("#surveyState option:selected").text(),
		zipcode: $("#surveyzip").val()
	};

	var legal = {
		plat_book: $("#plat").val(),
		page: $("#page").val(),,
		lot: $("#lot").val(),
		block: $("#block").val(),
		long_legal: $("longLegal").is(":checked"),
		subdivision: $("#subdivision").val(),
	};

	var elevation = {
		flood_zone: $("#flood-zone").val(),
		base_flood: $("#base-flood").val(),
		community_number: $("#community").val(),
		panel: $("#panel").val(),
		date_of_index: $("#firm-date").val(),
		SurveySnum: snum
	};
});
