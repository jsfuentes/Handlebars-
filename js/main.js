var movie = {
    name: "Infinity Wars",
    year: 2018,
    details: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
}

console.log(heroes)
//1. Get Template Content
var template = document.getElementById("movieIntro").innerHTML;

//2. Render Template
var renderer = Handlebars.compile(template);
var result = renderer(movie);

//3. Put rendered HTML back into document
document.getElementById("movieContainer").innerHTML = result;
