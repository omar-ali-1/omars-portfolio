/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 $("#main").append(["Omar Ali"])
 var awesomeThoughts = "I am Omar and I am awesome";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("awesome", "fun");
 $("#main").append([funThoughts])

 var name = HTMLheaderName.replace("%data%", "Omar Ali");
 var role = HTMLheaderRole.replace("%data%", "Web Developer");
 var skills = ["Python", "Java", "Computational Physics", "HTML", "CSS", "JavaScript"];
 var email = HTMLemail.replace("%data%", "omar.salim.ali1@gmail.com");
 var img = HTMLbioPic.replace("%data%", "images/me.jpg");
 var welcome = HTMLwelcomeMsg.replace("%data%", "Hello! Welcome to my bio page.");
 var education = {};
 var title = HTMLworkTitle.replace("%data%", "Research Assistant");
 var employer = HTMLworkEmployer.replace("%data%", "Fisk University");
 var dates = HTMLworkDates.replace("%data%", "Summer 2014 - Present");
 var location = HTMLworkLocation.replace("%data%", "Nashville");
 education["name"] = HTMLschoolName.replace("%data%", "Fisk University");
 education["degree"] = HTMLschoolDegree.replace("%data%", "B.S. Physics");
 education["date"] = HTMLschoolDates.replace("%data%", "December 2016");
 */

 var name = HTMLheaderName.replace("%data%", "Omar Ali");
 var role = HTMLheaderRole.replace("%data%", "Programming | Web Developement");
 var img = HTMLbioPic.replace("%data%", "images/me.jpg");
 var welcome = HTMLwelcomeMsg.replace("%data%", "Welcome to my bio page!");
 
 var bio = {
 	"name": "Omar Ali",
 	"role": "Web Developer",
 	"contacts": {
 		"email": "omar.salim.ali1@gmail.com",
 		"github": "github.com/omar-ali-1",
 		"mobile": "(615)638-7550",
 		"location": "1000 17th Ave N, Nashville, TN"
 	},
 	"biopic": "images/me.jpg",
 	"welcomeMessage": "Welcome to my bio page!",
 	"skills": [
 		"Python",
 		"PySide App Developement",
 		"Java",
 		"HTML",
 		"CSS",
 		"Computational Physics"
 	]
 };

 /*
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class=
 
 	phone = HTMLmobile.replace("%data%", bio.contacts.mobile);
 	email = HTMLemail.replace("%data%", bio.contacts.email);
 	github = HTMLgithub.replace("%data%", bio.contacts.github);
 	location = HTMLlocation.replace("%data%", bio.contacts.location);

 	$("#footerContacts").append(phone, email, github, location);
 */

phone = HTMLmobile.replace("%data%", bio.contacts.mobile);
email = HTMLemail.replace("%data%", bio.contacts.email);
github = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(phone, email, github);
 var work = {
 	"jobs": [{
 		"employer": "Fisk University",
 		"title": "Research Assistant",
 		"location": "1000 17th Ave N, Nashville, TN",
 		"dates": "Summer 2014 - Present",
 		"description": "Modeled, manufactured, and analyzed nanostructures for use in mass sensing devices."

 	}, 
 	{"employer": "Fisk University",
 		"title": "Physics/Math Tutor",
 		"location": "1000 17th Ave N, Nashville, TN",
 		"dates": "2013 - 2014",
 		"description": "Tutored students in Physics and Math, helping with homework problems and test preparation."

 	}
 	]
 }

 var projects = {
	"projects": [
		{"title": "SourceConnect",
		"dates": "2016",
		"description": "A tool to save and tag sources for future access via an easy search.",
		"images": [
			"images/source-connect.png"
			]
		}, 
		{"title": "Shrodinger Equation Solution",
		"dates": "2015",
		"description": "A numerical solution of the Shrodinger Equation using Finite Differences for the Harmonic Oscillator Potential.",
		"images": [
			"images/schrodinger1.png",
			"images/schrodinger2.png"
			]
		}]

}

 var education = {
 	"schools": [
 		{
 			"name": "Fisk University",
 			"location": "1000 17th Ave N, Nashville, TN, United States",
 			"degree dates": "2013-2016",
 			"url": "https://www.fisk.edu/",
 			"major": "Physics",
 			"degree": "B.S."
 		}
 	],
 	"onlineCourses": [
 		{
 			"title": "Intro to Algorithms",
 			"school": "MIT Open Courseware",
 			"dates": "08/01/16 - 11/15/16",
 			"url": "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/"
 		},
 		{
 			"title": "Web Developement",
 			"school": "Udacity.com",
 			"dates": "10/04/16 - 12/15/16",
 			"url": "https://www.udacity.com/course/web-development--cs253"
 		},
 		{
 			"title": "JavaScript Basics",
 			"school": "Udacity.com",
 			"dates": "12/01/16 - 12/30/16",
 			"url": "https://www.udacity.com/course/javascript-basics--ud804"
 		}
 	]
 }
/*
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/
function displayEd() {
	for (s in education.schools) {
		$("#education").append(HTMLschoolStart);
		var school = education.schools[s];
		var name = HTMLschoolName.replace("%data%", school.name);
		var location = HTMLschoolLocation.replace("%data%", school.location); // this is causing bug where page doesnt appear
		var dates = HTMLschoolDates.replace("%data%", school["degree dates"]);
		var major = HTMLschoolMajor.replace("%data%", school.major);
		var degree = HTMLschoolDegree.replace("%data%", school.degree);
		$(".education-entry").append(name+degree+dates+location+major);
	}
	$(".education-entry").append(HTMLonlineClasses);
	for (o in education.onlineCourses) {
		var course = education.onlineCourses[o];
		var title = HTMLonlineTitle.replace("%data%", course.title);
		var school = HTMLonlineSchool.replace("%data%", course.school);
		var dates = HTMLonlineDates.replace("%data%", course.dates);
		var url = HTMLonlineURL.replace("%data%", course.url);
		$(".education-entry").append(title+school+dates+url);
	}

	

}
displayEd();

function displayWork() {
	for (j = 0; j < work.jobs.length; j++) {
		$("#workExperience").append(HTMLworkStart);
		var emp = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
		var tit = HTMLworkTitle.replace("%data%", work.jobs[j].title);
		var loc = HTMLworkLocation.replace("%data%", work.jobs[j].location);
		var dates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
		var description = HTMLworkDescription.replace("%data%", work.jobs[j].description);
		$(".work-entry:last").append(emp.concat(tit, loc, dates, description));
	}
}

function inName() {
	var nameArr = bio.name.split(" ");
	var first = nameArr[0];
	var last = nameArr[1];
	if (last === last.toUpperCase()) {
		last = last.toLowerCase();
	}
	else {
		last = last.toUpperCase();
	}
	var newName = first + " " + last;
	return newName;
}



/*
$(document).click(function(loc) {
  console.log(loc.pageX, loc.pageY);
});
*/

/*
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
*/
projects.display = function() {
	for (p = 0; p < projects.projects.length; p ++) {
		$("#projects").append(HTMLprojectStart);
		var elems = [];
		elems.push(HTMLprojectTitle.replace("%data%", projects.projects[p].title));
		elems.push(HTMLprojectDates.replace("%data%", projects.projects[p].dates));
		elems.push(HTMLprojectDescription.replace("%data%", projects.projects[p].description));
		for (i = 0; i < projects.projects[p].images.length; i ++) {
			elems.push(HTMLprojectImage.replace("%data%", projects.projects[p].images[i]));
		}
		for (i = 0; i < elems.length; i ++) {
			$(".project-entry:last").append(elems[i]);
			console.log(elems[i]);
		}
	}
}






if (bio["skills"].length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}


 $("#header").prepend(name, role, img, welcome);

 displayWork();

 // google map:
$("#mapDiv").append(googleMap);

projects.display();

//$("#main").append(internationalizeButton);



/*
 $("#header").prepend(HTMLskillsStart)
for (var i = 0; i < bio.skills.length - 1; i++) {
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}
*/

 //$("#workExperience").append(HTMLworkStart)
 //$("#workExperience").append(work.position, work.employer, work.years, work.city);

 