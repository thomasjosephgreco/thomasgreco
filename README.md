#Angular Single Page Application with Node.js and MongoDB
<hr>
##Angular UI-Router
This repository contains a highly scalable Angular application that utilizes different named views. Below, I have included all of the code displayed in the `home` state. With the help of UI-Router, it is easy to define different sections of an application according to their parent, or absolute state. Not only does this look better sematically, but it makes adding, or removing elements from a page an extremely menial task. You can see more info about absolute views in the [UI-Router docs]('https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views').

*note: due to problems regarding the paths of my script, and template files, I currently have a single app.js in place, however you will notice a much more modular approach in the js file*


```
<div ui-view="Header"></div>
<div class="wrap">
    <div ui-view="Main-Content"></div>
</div>
<div ui-view="Footer"></div>
```


##Susy Custom Grid
In addition to coming configured with Angular, the following SPA has been created using the Susy grid framework. I have kept the debug option on, so that anyone can easily get started in creating a custom grid made up of however many columns. In this specific case, I utilized a 12 column grid.
<hr>
#Updates

<hr>
##Week of April 15th
###MongoDB using Mongoose for data models
* Switched form to use MongoDB on the server side instead of FireBase.
* Adding an addition folder to seperate my forms schema, routes, which I then called into several files in my applications backend.

<hr>
#Week of April 20th
* Integrated the [angular-messages](https://github.com/angular/bower-angular-messages)library to the handle form validation on the client-side. Angular messages exposes the ngMessages directive, and is a new feature in the release of Angular 1.3.
* Reset the form to stop from displaying error messages on submission by using $setPristine. 




