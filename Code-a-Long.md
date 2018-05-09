## Setup Structure

- New folder
- Index.html
- Copy and paste movie.js / data
- Copy and paste style.css
- New js folder
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

- Now we have handlebars functionality

  ##  Write Template

  Script tag is just a tag can give id and type tells browser not to run code this is special

  Lets make basic template 

  some class name to style it 

  We just want this to be general movie template

  ```html
  <script type="text/x-handlebars-template" id="itemTemplate"> 
  	<div class="templateWrapper">
  		<div>{{name}}</div>
          <div>{{year}}</div>
          <div>{{details}}</div>
      </div>
  </script>
  ```

Now we have a template first step, lets link the main,js file we will be using

```js
<script defer src="js/main.js"></script>
```

This will interact with the document and thus must wait for the page to load, this defer key word says not to run until the end of the page

## Handlebars in javascript

Remember we are seperating the data and the presentation, so what is the data and movie we want to display

Its in the movie.js file

So in the movie.js, I added has information on some of the superheroes in the movie. There was so many that this is a selection. As you can see we have lots of infrormation 

There are better ways to use a JSON, but this is the most straightforward. Lets focus on the name and Real Name attributes. 

I copy the details from Imdb

### So How does Handlebars put these two together

We need to do 3 things

1. Get Template Content
2. Render Template
3. Put HTML back in document

### Get Template Content

define a variable and we are using the id we set to identify it in the DOM or document

Switch back and copy id 

console.log

```js
var template = document.getElementById("movieIntro").innerHTML;
console.log(template);
```

Delete console.log

### Render Template

Make Renderer function variable

Handlebars we installed, we included it above the main included so this class/object works here

```js
var renderer = Handlebars.compile(template);
var result = renderer(movie);
console.log(result);
```

Delete console.log

### Put rendered HTML in document

Where are we putting it?

Go back to html and add 

```html
<div id="movieContainer"></div>
```

Put our result there

```Js
document.getElementById("movieContainer").innerHTML = result;
```

Great so thats the basics of templating, but we could have just put this information in the html. Lets try something a little more complex

## Display Hero Names

### Setup

```ht
<script type="text/javascript" src="js/heroes.js"></script>
```

In main.js, as you can see we now have access to heroes

```js
console.log(heroes);
```

delete console.log

### For Each

Start by adding a wrapper div

Now, this time we have an array of JSON we are working with, handlebars has some syntax to easily support this

Use each and the name of the variable

Normal HTML comments wont work since your in a script tag/handlebars so  use {{! Done for each heror }}

The variable we want are name and real_name

```html
        <script type="text/x-handlebars-template" id="heroList">
            <div class="heroWrapper">
                <h2>Starring:</h2>
                {{#each heroes}}
                <div class="heroWrapper">
                     {{! Done for each hero }}
                    <div>{{name}} ({{real_name}})</div>
                </div>
                {{/each}}
            </div>
        </script>
```

### For Each JS

Nothing

### Helpers

Notice this syntax for each, each space then the variable 

This does mean that variable names can't have a space in them

Each is a helper in handlebars, and we can define our own 

So have the name side by side is a little weird, lets make the real name italic and put parenthesis around it

Now we could just add it in the html, [do it]. But, Ill do it to try to showcase a basic form of helpers

```html
                    <div>{{name}} {{#format_name}}{{real_name}{{/format_name}}</div>
```

SO we didn't define the helper yet, so lets do that

```js
Handlebars.registerHelper('format_name', function(options) {
    console.log(options);
    return options.fn(this);
});
```

Now what is this? Referring to?

Lets find out: console.log(this);

So its the object being used in the context, the individual hero

Options.fn(this) ? console.log, its the original data that was supposed to be there

Its weird to have groot and groot twice, so lets use our helper to do some more logic

```js
Handlebars.registerHelper('format_name', function(options) {
    var newHTML = "<i>("+ options.fn(this) + ")</i>";
    if(this.name.toLowerCase() != this.real_name.toLowerCase()) {
        return newHTML;
    } else{
        return;
    }
});
```



## CSS

link the css sheet

```html
<link rel="stylesheet" type="text/css" href="style.css"/>
```

