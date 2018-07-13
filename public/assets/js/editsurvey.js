//get the survey number
const snum = window.location.pathname.split("/");
//snum[2] is the survey number
//add it to the top of page
$("#surveyNumber").text("Survey No. " + snum[2]);