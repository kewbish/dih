<template>
  <section class="section">
    <div class="container">
      <div class="message is-info is-bold is-medium" v-if="!auth">
        <div class="message-header">
          <h1 class="title has-text-white">Sign in, and let's get started!</h1>
        </div>
        <div class="message-body">
          <p class="subtitle">This is required to prevent abuse.</p>
          <a class="button" style="margin-bottom:10px" @click="login">Log In - Gmail</a>
        </div>
      </div>
      <div v-if="auth">
        <slide v-if="count == 0" :slideSubject="'0: Hello ' + firstName + '!'" :slideContent="[{line: 'Time to get started on your web development journey! First, let\'s download some software.'},{line: 'You\'ll need some software to get started. We\'ll use:'},{list:[{item: 'VSCode', link: 'https://code.visualstudio.com/download'}, {item: 'VSCode HTML Preview', link: 'https://marketplace.visualstudio.com/items?itemName=tht13.html-preview-vscode'}, {item: 'Any web browser, like Chrome'}]},{line: 'Once you\'ve downloaded everything, press the [>] button - it\'s time to go!'}]"/>
        <slide v-else-if="count == 1" slideSubject="1: Creating your files" :slideContent="[{line: 'Every website starts with an index.html file. This is what all web browsers look for to start rendering your creation within a site\'s files when it loads up.'},{line: 'Create a folder on your computer, and open this folder with VSCode by clicking this button:'}, {img: ['https://i.stack.imgur.com/AlsoM.png', 'Figure 1: Open the folder you just created.']}, {line: 'Now, it\'s time to create an index.html file.'},{img: ['https://code.visualstudio.com/assets/docs/nodejs/nodejs/toolbar-new-file.png', 'Figure 2: Create a new file, and call it index.html.']},{line:'You\'ll need to do the same with a main.css file. Create a main.css file, just like you created your index.html file.'}]"/>
        <slide v-else-if="count == 2" slideSubject="2: Some basic tags" :slideContent="[{line:'The current HTML version is HTML5, and to denote that, we\'ll need to add a <!DOCTYPE HTML> tag.'},{line:'Luckily, VSCode comes with something called Emmet abbreviations to streamline starting up a blank file. Type \'html:5\', and select the Emmet Abbreviation that pops up with [Enter].'},{line:'VSCode should spit a nice template out for us. If not: copy-paste the code below.'},{code:'<!DOCTYPE html>\n<html lang=&quot;en&quot;>\n<head>\n\t<meta charset=&quot;UTF-8&quot;>\n\t<meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;>\n\t<title>Document</title>\n</head>\n<body>\n</body>\n</html>'}, {line: 'The <head> elements are meta elements, and we don\'t have to worry about anything right now except the <title></title>. That\'s what you\'ll see in the address bar, so choose something like your name.'}, {img: ['https://i.imgur.com/cB42RYe.png', 'Figure 3: The HTML + CSS is where your title would go.']}]"/>
        <slide v-else-if="count == 3" slideSubject="3: Learning about <p>, <h1>, and <a>" :slideContent="[{line: 'Within your <body></body> tags, try adding some other tags.'},{line:'Try pressing [Ctrl-Shift-V] to open the HTML preview, and refer to it as we go through each tag.'},{line: 'First, we\'ll look at the <p>. Add it within the body, and add something inside so it looks something like:'},{code: '<p>Hello there!</p>'},{line: 'The </p> slash is required - it denotes the ending of a tag.'},{line: 'Try doing the same with <h1> tags! Remember the </h1> tag!'},{line: 'In your preview, what do these do? [Spoiler: <p> creates paragraphs, and <h1> headers.]'},{line: 'Let\'s also go through the concept nesting: with the <a> tag.'},{code: '<a href=&quot;https://reddit.com&quot;><p>This link goes to Reddit</p></a>'},{line: 'See how the <a> tag goes *around* the <p> tag? This is called nesting, and the <a> is now the parent of the <a> tag, the child. We\'ll go through this in greater detail once we start structuring our site.'},{timer:['Experiment with these tags', 'Try playing around with the <a> link tags, and get familiar with how to add <p> and <h1> tags, as well as how to close them.', 180]}]"/>
        <slide v-else-if="count == 4" slideSubject="4: Structural elements: <div> and <section>" :slideContent="[{line:'<div> and <section> won\'t have any visible effect on the structure, and don\'t print anything like <h1> and <p>. However, they\'re still required as basic knowledge.'},{line: 'Section tags allow us to differentiate different, well, sections in your website. It can contain any other tags, like <div>, <h1>, and <p>.'},{line: 'Speaking of which: what does the div tag do? It\'s a container, and like section, can contain any other HTML tags, including another div.'},{line: 'Visibly, these don\'t seem to do anything, but we\'ll be using them very frequently to structure our web resume.'},{line: 'Unfortunately, we\'ll have to undo all your hard work - but that\'s alright, you\'ve learned so much!'},{line: 'Inside your <body>, add a couple of <sections>.'}, {code: '<section class=&quot;header&quot;></section>\n<section class=&quot;about-me&quot;></section>\n<section class=&quot;education&quot;></section>\n<section class=&quot;project-skills&quot;></section>\n<section class=&quot;footer&quot;></section>\n'},{line:'This will add several empty sections to your site. Remember, you can preview your site with [Ctrl-Shift-V]!'}]"/>
        <slide v-else-if="count == 5" slideSubject="5: Filling up .about-me" :slideContent="[{line: 'Let\'s fill up our .about-me with content. Inside the <section> tags, type:'}, {line: '[Tip]: Type this code out by hand - it helps you learn much better. Copy-paste doesn\'t teach your brain to HTMLify :)'}, {code: '<div class=&quot;about-me-image&quot;>\n\t<img src=&quot;https://imgur.com/helloWorld&quot;>\n</div>\n<h1>Hey - I\'m [yourname]</h1>\n<div class=&quot;custom-div&quot;></div>\n<p>This is where you can briefly touch on your life, thoughts, and manifestos.</p>'}, {line: 'Here, a new tag is introduced: the <img> tag. This is one of the few tags in HTML that doesn\'t require an ending / tag. We need a src property - replace this with an imgur link, after you upload your profile headshot, of course.'}, {line: 'Let\'s see how your site is looking so far! [Ctrl-S] to save, and [Ctrl-Shift-V] to view.'}, {img: ['https://i.imgur.com/bPBFH7F.png', 'Figure 1. Your site so far. Not much, eh?']}]"/>
        <slide v-else-if="count == 6" slideSubject="6: Filling up the rest of our sections" :slideContent="[{line: 'For the next 15-20 minutes, work on filling in content around your website. Try editing your education details, writing about your work, or changing anything else you wish. (Don\'t worry about the projects bit quite yet - we\'ll learn how to build a grid with that soon!)'},{line: 'Don\'t feel limited by the section classes we have implemented here, you can add sections with classes with whatever you wish!'}, {timer:['Editing time!', 'Change anything and everything about the site, right now. Add headings, paragraphs, text, images, whatever you like.', 1200]}]"/>
        <slide v-else-if="count == 7" slideSubject="7: Checkin + break!" :slideContent="[{line: 'Time for our first checkin!'}, {line: 'In the past section, we\'ve learned to:'}, {list: [{item: 'Using a code editor - easy shortcuts like [Ctrl-S] and [Ctrl-Shift-V]'},{item: 'Basic HTML tags - <p>, <div>, <a>, <img>, <h1>, <section> (and maybe you\'ve come across others too!)'}, {items:'Structuring a site, and applying classes'}]}, {line: 'In the next section, we\'ll be learning how to style our site, as well as what those class quotes really do.'}, {line: 'By now, your site might look something like:'},{img:['https://i.imgur.com/hQ6i5jj.png', 'Figure 1: Just an example - we\'ll style it up soon!']},{line: 'Oh - it\'s been a while already, remember to stand up, stretch, and take your eyes off the screen before we get started on CSS!'}]"></slide>
        <slide v-else-if="count == 8" slideSubject="8: A whole new style" :slideContent="[{line: 'We\'re about to get started with a whole new language - CSS. CSS stands for Cascading Style Sheets, and is the language that web browsers use to figure out how to color, shape, and format your content.'},{line: 'To get started, add a main.css file. As with the index.html, click the File add icon on the sidebar of VSCode, and add the file.'},{line: 'To link our index.html with our main.css file, add the following link inside your <head> element:'},{code: '<link rel=&quot;stylesheet&quot; href=&quot;main.css&quot;>'},{line: 'This will ensure that any styling changes you add to your site is reflected when you view your site with [Ctrl-Shift-V].'},{line: 'Let\'s start off simple: by styling our <h1> tags. In CSS, styling all elements of a tag type (here, all <h1>s), is done by adding:'},{code:'h1{\n\t//something_here\n}'},{line: 'Times New Roman is a boring font - find a new one from:'},{list:[{item: 'Google Fonts', link:'https://fonts.google.com/'}]},{line: 'Choose one, select style, and copy the embed tag into your <head>, just like you added the link to the main.css file. Now, we\'ll add it to the HTML.'},{code:'h1{\n\tfont-family:fontname;\n\tfont-size:18px;\n\tcolor:mediumblue;\n}'},{line: 'Make sure you change the fontname to the actual name of the font you\'ve just imported. Now, you\'ll have something like:'},{img:['https://i.imgur.com/qB2idJq.png', 'Figure 1: An example of our shiny new blue headers!']},{line: 'font-family, font-size, and color are all examples of CSS properties that describe what an element looks like. A great reference can be found here:'},{list:[{item: 'W3schools', link:'https://www.w3schools.com/css/default.asp'}]},{line: 'These colours and parameters can all be changed to whatever you wish. Experiment and have fun!'}]"/>
        <slide v-else-if="count == 9" slideSubject="9: Dividers and box model" :slideContent="[{line: 'CSS structures most elements in HTML with a box model.'},{img:['https://miro.medium.com/max/1400/1*gq1B7v2_gDEi3jkAwAvZNQ.png', 'Figure 1: The CSS box model. Every element has its content, padding, margin, and border.']},{line:'Here, we\'ll be taking advantage of the border to add a nice divider element.'},{line:'Already implemented in the code is a .custom-div class, which we\'ll use in CSS to add a solid divider.'},{code: '.custom-div{\n\tborder-bottom:1px solid darkgray;\n}'},{line: 'The . before the custom-div style tells CSS that we\'re referencing a class. [There are also id\'s, but we won\'t be going over those in this intro site.] The border-bottom is another property that adds a 1 pixel tall, solid, dark gray border to the .custom-div element. Now, your site might look something like:'},{img:['https://i.imgur.com/s9eFek8.png', 'Figure 2: Maybe your site looks like this! Note the long border going across.']}]"/>
        <slide v-else slideSubject="Oops - that slide doesn't exist." :slideContent="[{line: 'Let\'s go back. Try entering the slide number you were at before. To go back to the beginning, type \'0\' in the text-input below.'}]"></slide>
      </div>
    </div>
    <input v-if="auth" type="text" class="input fixed-input" v-model="count" />
    <button v-if="auth" @click="countDown" class="button fixed-back is-small">&lt;</button>
    <button v-if="auth" @click="countUp" class="button fixed-right is-small">&gt;</button>
    <a href="https://covid19responsefund.org/" class="button fixed-right-bottom is-info">Donate to COVID 🦠</a>
  </section>
</template>

<script>
import Firebase from "../firebase.js";
export default {
  name: "Learn",
  data() {
    return {
      user: {
        logged: false,
        data: {}
      },
      count: 0
    };
  },
  computed: {
    auth() {
      return this.user.logged;
    },
    firstName() {
      if (this.user.data.displayName) {
        return this.user.data.displayName.split(" ")[0];
      }
      return null;
    }
  },
  methods: {
    login() {
      Firebase.login();
    },
    countUp() {
      this.count++;
    },
    countDown() {
      if (this.count > 0) {
        this.count--;
      }
    }
  },
  mounted: function() {
    Firebase.auth.onAuthStateChanged(user => {
      if (user) {
        this.user.logged = true;
        this.user.data = user;
      } else {
        this.user.logged = false;
        this.user.data = {};
      }
    });
  }
};
</script>