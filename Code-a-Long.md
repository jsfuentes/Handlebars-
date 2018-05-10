## Setup Structure

- New folder
- Index.html
- New js file
- Create base HTML

```html
<html>
    <head>
        <title> Infinity Wars </title>
    </head>
    <body>
        <div>
          Greetings, one and all!
        </div>
    </body>
</html>
```

- Explain and show off Brackets
- Since your browser is the complier you can use any text editor even Notepad, but you need to refresh the page

## Installion

- Google handlebars, clikc download to get to page

- And download 

- Take file and place in js folder

- Add script to HTML

- Now we have handlebars functionality(Handlebars in Console)

  ##  Write Template

  Script tag is just a tag can give id and type tells browser not to run code this is special

  Lets make basic template 

  some class name to style it 

  We just want this to be general student template

  ```html
  <script type="text/x-handlebars-template" id="personTemplate"> 
  	<div class="templateWrapper">
  		<div>{{name}}</div>
          <div>{{year}}</div>
          <div>{{major}}</div>
      </div>
  </script>
  ```

Now we have a template first step, lets link the main,js file we will be using

```js
<script defer src="js/main.js"></script>
```

This will interact with the document and thus must wait for the page to load, this defer key word says not to run until the end of the page

## Handlebars in javascript

Remember we are seperating the data and the presentation, so what is the data and person we want to display

```js
var person = {
    name: "Jorge Fuentes",
    major: "Computer Science",
    year: "3rd",
    hungry: "True",
}
```

I copy the details from Imdb

### So how does Handlebars put these two together

We need to do 3 things

1. Get Template Content
2. Render Template
3. Put HTML back in document

### Get Template Content

define a variable and we are using the id we set to identify it in the DOM or document

Switch back and copy id 

console.log

```js
var template = document.getElementById("personTemplate").innerHTML;
console.log(template);
```

Delete console.log

### Render Template

Make Renderer function variable

Handlebars we installed, we included it above the main included so this class/object works here

```js
var renderer = Handlebars.compile(template);
var result = renderer(person);
console.log(result);
```

Delete console.log

### Put rendered HTML in document

Where are we putting it?

Go back to html and add 

```html
<div id="personContainer"></div>
```

Put our result there

```Js
document.getElementById("personContainer").innerHTML = result;
```

Great so thats the basics of templating, but we could have just put this information in the html. Lets try something a little more complex

### If

Can put any true conditional here, if you want more complicated logic then just wait, ILL teach you to do it with helpers

```html
<script type="text/x-handlebars-template" id="personTemplate"> 
	<div class="templateWrapper">
		<div>{{name}}</div>
        <div>{{year}}</div>
        <div>{{major}}</div>
        {{#if hungry}}
        	<div> Eat at Panda Express </div>
        {{/if}}
    </div>
</script>
```



## Display Persons

http://api.ucladevx.com/

Go to hours in dining halls

```js
var hours = [copy paste here]
```

### For Each

Start by adding a wrapper div

Now, this time we have an array of JSON we are working with, handlebars has some syntax to easily support this

Use each and the name of the variable

Normal HTML comments wont work since your in a script tag/handlebars so  use {{! Done for each heror }}

The variable we want are name and real_name

```html
{{#each hours}}           
	{{! Done for each hall }}
	<h3> {{hall_name}} </h3>
	<div> Breakfast Hours: {{breakfast}} </div>
{{/each}}
```

### For Each JS

```js
var template = document.getElementById("personTemplate").innerHTML;
console.log(template);
var renderer = Handlebars.compile(template);
var result = renderer(person);
document.getElementById("personContainer").innerHTML = result;
```



### Helpers

Notice this syntax for each, each space then the variable 

This does mean that variable names can't have a space in them

Each is a helper in handlebars, and we can define our own 

Lets say we wanted to bold all hall names

Now we could just add it in the html. But, Ill do it to try to showcase a basic form of helpers

```html
<div>{{name}} {{#bold}} {{hall_name}} {{/bold}}</div>
```

SO we didn't define the helper yet, so lets do that

```js
Handlebars.registerHelper('bold', function(options) {
    console.log(options.fn(this));
    return options.fn(this);
});
```

Now what is this? Referring to?

Lets find out: console.log(this);

So its the object being used in the context, the individual hero

Options.fn(this) ? console.log, its the original data that was supposed to be there

```js
Handlebars.registerHelper('bold', function(options) {
    return "<b>" + options.fn(this) + "</b>";
});
```

So lets say I wanted to only bold, so lets use our helper to do some more logic

```js
Handlebars.registerHelper('format_name', function(options) {
    var newHTML = "<b>"+ options.fn(this) + "</b>";
    if(this.hall_name == "Covel") {
        return newHTML;
    } else{
        return options.fn(this);
    }
});
```