//Define Helpers
Handlebars.registerHelper('format_name', function(options) {
    var newHTML = "<i>("+ options.fn(this) + ")</i>";
    if (this.name.toLowerCase() != this.real_name.toLowerCase()) {
        return newHTML;
    } else {
        return;
    }
});

Handlebars.registerHelper('link_hero', function(options) {
    var newHTML = "<a href='#" + this.name + "'>"+ options.fn(this) + "</a>";
    return newHTML;
});

//1. Get Template Content
var template = document.getElementById("movieIntro").innerHTML;

//2. Render Template
var renderer = Handlebars.compile(template);
var result = renderer(movie);

//3. Put rendered HTML back into document
document.getElementById("movieContainer").innerHTML = result;


//1. Get Template Content
var template = document.getElementById("heroList").innerHTML;

//2. Render Template
var renderer = Handlebars.compile(template);
var result = renderer(movie);

//3. Put rendered HTML back into document
document.getElementById("heroContainer").innerHTML = result;
