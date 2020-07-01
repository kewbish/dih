<template>
  <section class="section">
    <div class="container">
      <div class="message is-info is-bold is-medium" v-if="!auth">
        <div class="message-header">
          <h1 class="title has-text-white">Sign in, and let's get started!</h1>
        </div>
        <div class="message-body">
          <p class="subtitle">
            We do not collect any information other than your display name.
            <br />This site works best on desktop. It
            <em>may</em> work on mobile, but it's difficult to view the code snippets.
          </p>
          <a class="button" style="margin-bottom:10px" @click="login">Log In - Gmail</a>
        </div>
      </div>
      <div v-if="auth">
        <transition name="fade">
          <slide
            key="0"
            v-if="count == 0"
            :slideSubject="'0: Hello ' + firstName + '!'"
            :slideContent="[{md: slide0}]"
          />
          <slide
            key="1"
            v-else-if="count == 1"
            slideSubject="1: Creating your files"
            :slideContent="[{md: slide1}]"
          />
          <slide
            key="2"
            v-else-if="count == 2"
            slideSubject="2: Some basic tags"
            :slideContent="[{md: slide2}]"
          />
          <slide
            key="3"
            v-else-if="count == 3"
            slideSubject="3: Learning about <p>, <h1>, and <a>"
            :slideContent="[{md: slide3}, {timer:['Experiment with these tags', 'Try playing around with the <a> link tags, and get familiar with how to add <p> and <h1> tags, as well as how to close them.', 180]}]"
          />
          <slide
            key="4"
            v-else-if="count == 4"
            slideSubject="4: Structural elements: <div> and <section>"
            :slideContent="[{md: slide4}]"
          />
          <slide
            key="5"
            v-else-if="count == 5"
            slideSubject="5: Filling up .about-me"
            :slideContent="[{md: slide5}]"
          />
          <slide
            key="6"
            v-else-if="count == 6"
            slideSubject="6: Filling up the rest of our sections"
            :slideContent="[{md: slide6}, {timer:['Editing time!', 'Change anything and everything about the site, right now. Add headings, paragraphs, text, images, whatever you like.', 1200]}]"
          />
          <slide
            key="7"
            v-else-if="count == 7"
            slideSubject="7: Checkin + break!"
            :slideContent="[{md: slide7}]"
          ></slide>
          <slide
            key="8"
            v-else-if="count == 8"
            slideSubject="8: A whole new style"
            :slideContent="[{md: slide8}]"
          />
          <slide
            key="9"
            v-else-if="count == 9"
            slideSubject="9: Dividers and box model"
            :slideContent="[{md: slide9}]"
          />
          <slide
            key="10"
            v-else-if="count == 10"
            slideSubject="10: Centering both ways"
            :slideContent="[{md: slide10}, {timer: ['Centering', 'Take the next while to center some of your elements with what you\'ve just learned.', 150]}]"
          />
          <slide
            key="11"
            v-else-if="count == 11"
            slideSubject="11: Going over some easy properties"
            :slideContent="[{md: slide11}, {timer:['Try out some of these new properties!', 'If you\'re happy with how your site looks now, you can skip this.', 240]}]"
          />
          <slide
            key="12"
            v-else-if="count == 12"
            slideSubject="12: Learning CSS Grid"
            :slideContent="[{md: slide12},{timer: ['Feel free to edit everything!', 'Take the next couple minutes to talk about your projects, core competencies, internships, work experience, skills, interests - whatever! Edit the contents of each of the children of the .grid-container div.', 180]}]"
          />
          <slide
            key="13"
            v-else-if="count == 13"
            slideSubject="13: Formatting the grid"
            :slideContent="[{md: slide13}]"
          />
          <slide
            key="14"
            v-else-if="count == 14"
            slideSubject="14: Introductions to IDs"
            :slideContent="[{md: slide14}]"
          />
          <slide
            key="15"
            v-else-if="count == 15"
            slideSubject="15: Media Queries and Responsiveness"
            :slideContent="[{md: slide15}]"
          />
          <slide
            key="16"
            v-else-if="count == 16"
            slideSubject="16: Finishing our design"
            :slideContent="[{md: slide16}, {timer:['Take the next 5 minutes to finalize everything!', 'Make sure your site includes all the information you want on it, and if this isn\'t enough time - keep working!', 300]}]"
          />
          <slide
            key="17"
            v-else-if="count == 17"
            slideSubject="17: GitHub setup"
            :slideContent="[{md: slide17}]"
          />
          <slide
            key="18"
            v-else-if="count == 18"
            slideSubject="18: Going live"
            :slideContent="[{md: slide18}]"
          />
          <slide
            key="19"
            v-else-if="count == 19"
            slideSubject="19: </lesson>"
            :slideContent="[{md: slide19}]"
          />
          <slide
            key="21"
            v-else-if="count ==21"
            slideSubject="x: HTTP Requests"
            :slideContent="[{md: slideForm0}]"
          />
          <slide
            key="20"
            v-else
            slideSubject="Oops - that slide doesn't exist."
            :slideContent="[{md: slideAny}]"
          ></slide>
        </transition>
      </div>
    </div>
    <input v-if="auth" type="text" class="input fixed-input" v-model="count" />
    <button
      v-if="auth && count > 0"
      @click="countDown"
      class="button is-info fixed-back is-small"
    >&lt;</button>
    <button
      v-if="auth && count < 19"
      @click="countUp"
      class="button is-info fixed-right is-small"
    >&gt;</button>
    <div class="fixed-right-bottom">
      <a
        href="https://canadalearningcode.secure.nonprofitsoapbox.com/clc-donate"
        class="button is-danger"
      >Support CLC 🍁</a>
    </div>
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
      count: 0,
      slide0: `This course is meant to guide you through the beginnings of HTML by building a simple resume!  
      Initially, it was meant to be a meetup run in Vancouver by some Canada Learning Code teen ambassadors (of which I [Kewbish] am one!), but due to COVID-19, it was cancelled.  
      \nIf you wish to support Canada Learning Code, whose mission is to bring the power of technology to all, including historically underrepresented groups in tech, please visit the following link: [Canada Learning Code](https://canadalearningcode.secure.nonprofitsoapbox.com/clc-donate)  
      \nThis course was created by Emilie Ma - also known as Kewbish. If you'd like to learn more about me, visit [my site](https://kewbish.github.io).  
      \nTime to get started on your web development journey! First, let's download some software. We'll use [VSCode](https://code.visualstudio.com/download), [VSCode HTML Preview](https://marketplace.visualstudio.com/items?itemName=tht13.html-preview-vscode), and any web browser, like Chrome.  
      \nOnce you've downloaded everything, press the [>] button - it's time to go!'`,
      slide1: `Every website starts with an index.html file. This is what all web browsers look for to start rendering your creation within a site's files when it loads up.
      \nCreate a folder on your computer, and open this folder with VSCode by clicking this button:
      \n![Figure 1: Open the folder you just created.](https://i.imgur.com/QseX16F.png)
      \n*Figure 1: Open the folder you just created.*
      \nNow, it's time to create an index.html file.
      \n![Figure 2: Create a new file, and call it index.html.](https://code.visualstudio.com/assets/docs/nodejs/nodejs/toolbar-new-file.png)
      \n*Figure 2: Create a new file, and call it index.html.*
      \nYou'll need to do the same with a main.css file. Create a main.css file, just like you created your index.html file.`,
      slide2: `The current HTML version is HTML5, and to denote that, we'll need to add a <!DOCTYPE HTML> tag.
      \nLuckily, VSCode comes with something called Emmet abbreviations to streamline starting up a blank file. Type \`html:5\`, and select the Emmet Abbreviation that pops up with [Enter]
      \nVSCode should spit a nice template out for us. If not: copy-paste the code below.
      <pre><code>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body></body>
    </html>
      </code></pre>
      \nThe <head> elements are meta elements, and we don't have to worry about anything right now except the <title></title>. That's what you'll see in the address bar, so choose something like your name.
      \n![Figure 3: The HTML + CSS is where your title would go.](https://i.imgur.com/cB42RYe.png)
      \n*Figure 3: The HTML + CSS is where your title would go.*`,
      slide3: `Within your <body></body> tags, try adding some other tags. Try pressing [Ctrl-Shift-V] to open the HTML preview, and refer to it as we go through each tag.
      \nFirst, we'll look at the <p>. Add it within the body, and add something inside so it looks something like:
      \n
      <p>Hello there!</p>
      \nThe \`</p>\` slash is required - it denotes the ending of a tag.
      \nTry doing the same with \`<h1>\` tags! Remember this tag - it's important. You can just copy-paste the \`<p>\` tags, but replace the 'p' with 'h1'.
      \nIn your preview, what do these do? [Spoiler: \`<p>\` creates paragraphs, and \`<h1>\` creates headers.]
      \nLet's also go through the concept nesting: with the \`<a>\` tag.
      \n
      <a href="https://reddit.com"><p>This link goes to Reddit</p></a>
      \nSee how the \`<a>\` tag goes *around* the \`<p>\` tag? This is called nesting, and the \`<a>\` is now the parent of the \`<p>\` tag, the child. We'll go through this in greater detail once we start structuring our site.
      </p><timer title="Experiment with these tags" subtitle="Try playing around with the 'a' link tags, and get familiar with how to add <p> and <h1> tags, as well as how to close them." durationInSecs="180"/>`,
      slide4: `\`<div>\` and \`<section>\` won't have any visible effect on the structure, and don't print anything like \`<h1>\` and \`<p>\`. However, they're still required as basic knowledge for website structuring.
      \nSection tags allow us to differentiate different, well, sections in your website. It can contain any other tags, like \`<div>\`, \`<h1>\`, and \`<p>\`.
      \nSpeaking of which: what does the div tag do? It's a container, and like section, can contain any other HTML tags, including another div. Visibly, these don't seem to do anything, but we'll be using them very frequently to structure our web resume.
      \nUnfortunately, we'll have to undo all your hard work - but that's alright, you've learned so much! Delete everything in your \`index.html\`, and add \`html:5\`'s output again. For reference, check slide 2!
      \nInside your \`<body>\`, add a couple of \`<section>\`s.
      <pre><code>
    <section class="header"></section>
    <section class="about-me"></section>
    <section class="education"></section>
    <section class="project-skills"></section>
      </code></pre>
      \nThis will add several empty sections to your site. Remember, you can preview your site with [Ctrl-Shift-V]!`,
      slide5: `Let's fill up our .about-me (The . denotes a class, so this would be the section with the class of about-me) with content. Inside the \`<section>\` tags, type:
      \n[Tip]: Type this code out by hand - it helps you learn much better. Copy-paste doesn't teach your brain to HTMLify :)
      <pre><code>
    <div class="about-me-image">
        <img src="https://imgur.com/helloWorld">
    </div>
    <h1>Hey - I'm [yourname]</h1>
    <div class="custom-div"></div>
    <p>This is where you can briefly touch on your life, thoughts, and manifestos.</p>
      </code></pre>
      \nHere, a new tag is introduced: the \`<img>\` tag. This is one of the few tags in HTML that doesn't require an ending \`</img>\` tag. We need a src property (which is the bit with the equal sign) - replace this with an imgur link, after you upload your profile headshot, of course. Alternatively, you can use file-paths, like: \`src="img.jpg"\`, for a ,jpg in the same folder with a name of img.
      \nLet's see how your site is looking so far! [Ctrl-S] to save, and [Ctrl-Shift-V] to view, remember.
      \n![Figure 1. Your site so far. Not much, eh?](https://i.imgur.com/bPBFH7F.png)
      \n*Figure 1. Your site so far. Not much, eh?*`,
      slide6: `For the next 15-20 minutes, work on filling in content around your website. Try editing your education details, writing about your work, or changing anything else you wish. (Don't worry about the projects bit quite yet - we'll learn how to build a grid with that soon!)
      \nRemember the \`<p>\` tags, and keep those in mind - they're the best way to add more information. Also, remember to add \`<div>\` tags to separate chunks of content, and if you feel the need, add another section for fun! The link \`<a>\` tag can also be used to link to things like your resume, LinkedIn, or social media profiles.
      \nDon't feel limited by the section classes we have implemented here, you can add sections with classes with whatever you wish!`,
      slide7: `Time for our first checkin!
      \nIn the past section, we've learned to:
      - Using a code editor - easy shortcuts like [Ctrl-S] and [Ctrl-Shift-V]
      - Basic HTML tags - \`<p>\`, \`<div>\`, \`<a>\`, \`<img>\`, \`<h1>\`, \`<section>\` (and maybe you've come across others too!)
      - Structuring a site, and applying classes
      \nIn the next section, we'll be learning how to style our site, as well as what those class quotes really do.
      \nBy now, your site might look something like:
      \n![Figure 1: Just an example - we'll style it up soon!](https://i.imgur.com/hQ6i5jj.png)
      \n*Figure 1: Just an example - we'll style it up soon!*
      \nOh - it's been a while already, remember to stand up, stretch, and take your eyes off the screen before we get started on CSS [Cascading Style Sheets]!`,
      slide8: `We're about to get started with a whole new language - CSS. CSS stands for Cascading Style Sheets, and is the language that web browsers use to figure out how to color, shape, and format your content.
      \nTo get started, add a \`main.css\` file. As with the \`index.html\`, click the 'File add' icon on the sidebar of VSCode, and add the file.
      \nTo link our \`index.html\` with our \`main.css\` file, add the following link inside your \`<head>\` element:
      <pre><code>  
    <link rel="stylesheet" href="main.css">
      </code></pre>
      \nThis will ensure that any styling changes you add to your site is reflected when you view your site with [Ctrl-Shift-V]. Let's start off simple: by styling our \`<h1>\` tags. In CSS, styling all elements of a tag type (here, all \`<h1>\`s), is done by adding:
      <pre><code class="language-css"> 
    h1{
      //something here
    }
      </code></pre>
      \nTimes New Roman is a boring font - find a new one from [Google Fonts](https://fonts.google.com) that you like.
      \nChoose one, select style, and copy the embed tag into your \`<head>\`, just like you added the link to the \`main.css\` file. Now, we'll add it to the CSS.
      <pre><code class="language-css"> 
    h1{
      font-family:fontname;
      font-size:18px;
      color:mediumblue;
    }
      </code></pre>
      \nMake sure you change the fontname to the actual name of the font you've just imported. For example, if you've added a 'Montserrat' font, change the \`font-family\` to \`'Montserrat'\`. Make sure to add quotes, especially if your font name is multiple words.
      \nNow, you'll have something like: 
      \n![Figure 1: An example of our shiny new blue headers!](https://i.imgur.com/qB2idJq.png)
      \n*Figure 1: An example of our shiny new blue headers!*
      \n\`font-family\`, \`font-size\`, and \`color\` are all examples of CSS properties that describe what an element looks like. A great reference can be found here - [W3schools](https://www.w3schools.com/css/default.asp)
      \nThese colours and parameters can all be changed to whatever you wish. Experiment and have fun!`,
      slide9: `CSS structures most elements in HTML with a box model.
      \n![Figure 1: The CSS box model. Every element has its content, padding, margin, and border.](https://i.imgur.com/3A5ZcE1.png)
      \n*Figure 1: The CSS box model. Every element has its content, padding, margin, and border.*
      \nHere, we'll be taking advantage of the border to add a nice divider element. Let's add a  \`.custom-div\` class, which we'll use in CSS to add a solid divider.
      <pre><code>
    .custom-div{
        border-bottom:1px solid darkgray;
    }
      </code></pre>
      \nThe \`.\` before the \`custom-div\` style tells CSS that we're referencing a class. [There are also id's, but we won't be going over those in this intro site.] The border-bottom is another property that adds a 1 pixel tall, solid, dark gray border to the .custom-div element. Now, your site might look something like:
      \n![Figure 2: Maybe your site looks like this! Note the long border going across.](https://i.imgur.com/pSvBuao.png)
      \n*Figure 2: Maybe your site looks like this! Note the long border going across.*`,
      slide10: `Commonly, we also see elements centered on webpages. Let's learn how to do that, applying our new knowledge with element and class selectors. (Remember, the \`h1{}\` and the \`.custom-div{}\`?)
      \nTo center content horizontally, like:
      \`|   [el]   |\`
      \nWe can use the following CSS - again, taking advantage of the margin properties of each element.
      <pre><code>
    .class{
        margin: auto;
        text-align: center;
    }
      </code></pre>
      \nThe auto margin sets the margin automatically on each side of the element with the class \`class\`, top, right, left, and bottom. This doesn't end up affecting your top or bottom (we'll get there soon).
      \nThe text-align property aligns the text within the div. If you don't want your text centered in your centered div, you don't need to add this. Try applying this to one of your classes or elements!
      \nNow, let's go over vertical centering. Usually, this ends up being a little more tricky than horizontal centering.
      <pre><code class="language-css">
    .class{
        margin: 0 auto;
    }
      </code></pre>
      \nThis sets the margin of the top and bottom to zero, and therefore sets the element right in the middle of its parent. That's usually the de-facto solution, but alternatively, you can choose to use:
      <pre><code>
    .class{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
      </code></pre>
      \nThis is another solution - it sets the position (usually static where elements render in order) to relative to its parent element. It positions 50% away from the top, and then 50% of the element's height back up, to properly center. Note: if you try to center an image, you usually need to put it inside a div, and apply these centering styles to the div instead. This is due to the fact that images don't render as blocks properly, and have some weird margin styles.
      \nIf you'd like to center some elements on your site, take the next couple minutes to apply some styles!`,
      slide11: `Alright, speed round. These are some easy-to-understand CSS properties that are commonly used, but don't need a lot of explanation.
      <pre><code>
    .class{
        background-color: #123456;
    }
      </code></pre>
      \nThis sets the background color of your element to a hex code. You can find a hex code for any color from Google - just look up a hex color picker. You can apply this to any element, specifically - use it on divs to add background squares of colour!
      \nTo add a background image instead:
      <pre><code>
    .class{
        background: url('url/to/jpeg');
    }
      </code></pre>
      <pre><code>
    .class{
        text-shadow: 2px 2px #123456;
    }
      </code></pre>
      \nThis sets a text shadow to a text element, 2px left-right, and 2px top-down away. These values can be negative, too. Again, there's the hex code - set it to your desired text shadow color. Remember, Google is your friend.
      <pre><code class="language-css">
    .class:hover{
        color: #123456;
    }
      </code></pre>
      \nThis is a little different. The :hover selector goes after an element or class selector. Here, the style would be applied when the element with class \`class\` was hovered over. Here, we're just setting an arbitrary color, but other properties can be applied, like text-shadow, for example.`,
      slide12: `If you've ever seen some grid layouts like:
      \n![Figure 1: A cool grid layout example!](https://speckyboy.com/wp-content/uploads/2017/09/css-grid-layouts-03.jpg)
      \n*Figure 1: A cool grid layout example!*
      \n![Figure 2: Another example, something closer to what we'll be building for our projects section.](https://designinginterfaces.com/wp-content/images/grid-of-equals-cnn.png)
      \n*Figure 2: Another example, something closer to what we'll be building for our projects section.*
      \nBefore we do any cool CSS styling, we need to structure our grid. Add this in one of your sections in your \`main.html\`:
      <pre><code>
    <div class="grid-container">
    <div>
        <h1>An item title!</h1>
        <p>An item subtitle and content. Fill this in!</p>
    </div>
    <div>
        <h1>An item title!</h1>
        <p>An item subtitle and content. Fill this in!</p>
    </div>
    <div>
        <h1>An item title!</h1>
        <p>An item subtitle and content. Fill this in!</p>
    </div>
    </div>
      </code></pre>
      \nRemember, the larger \`<div>\` has the class \`grid-container\`, and we just filled it with three smaller \`<div>\`s which will have all our content!`,
      slide13: `Alright, let's go back to CSS for a bit. Add the following code to your main.css file.
      <pre><code>
    .grid-container{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
    }
      </code></pre>
      \nThis style changes the display property of the parent (container) \`<div>\`, which is usually \`block\`, to \`grid\`. This is a relatively new CSS property, with its history only going back to around 2011. Then, we add the template columns, setting each one equal to one third each - (what the 1fr does: it's literally just 1 fraction of the total width.) If you want more or less columns, just add or remove \`1fr\`s in the \`grid-template-columns\`. Now, if you view your site with [Ctrl-Shift-V], you'll see that your \`<div>\`'s children are displayed like so:
      \n![Figure 1: An example grid.](https://i.imgur.com/ICfGPf1.png)
      \n*Figure 1: An example grid.*
      \nAs well, the \`column-gap\` adds a little gap between each of the columns, so each column has some room to breathe. If you're planning on having more than one row, you can add a \`row-gap\` property, and set that to around 10px (measurement in pixels, remember) as well.
      \nTry styling the background colors of some of the containers by adding classes and properties, or change the font color! If you need a refresher, visit the past slides.`,
      slide14: `Speaking of changing background colors of containers, what if we wanted to change the color of just *one* element? And what if we wanted to keep everything else the same?
      \nThis is where we can use something called an \`id\`. Usually, these are used for CSS where we only want to change the look of an element or group of elements that only appears once. The reason that they're only used for things that appear only once? IDs can be used only once. (Technically, most web browsers are so tolerant that they'll add the styles as well, but this is definitely *bad practise*.)
      \nImagine two people named Alice Chapman and Bob Chapman. A class selector is like 'selecting' both Alice and Bob by their last name, Chapman. IDs would be like selecting just Alice, or just Bob. The way we use IDs is like:
      <pre><code>
    #id{
      // some code   
    }
      </code></pre>
      \nNote the \`#\` instead of the \`.\`. This is how we differentiate between classes, which use the \`.\`, and our new IDs.
      \nAnother reason we might want to use IDs: they overrule other selectors. That way, you can use IDs to overrule a class, for example.
      \nHowever, if there are two elements that have similar styles, IDs might not be the best choice - you'll have to repeat the same CSS code twice. It's not the most efficient, but it works. Generally, use IDs only when something's used once.
      \nAs well, you can't have multiple IDs on an element. Usually, only the first ID listed is applied. If you want to have multiple pseudo-IDs, try using classes instead!
      \nFor example, to change the color of one of the grid items, change your HTML to:
      <pre><code>
    <div id="purple-grid-item">
        <h1>An item title!</h1>
        <p>An item subtitle and content. Fill this in!</p>
    </div>
      </code></pre>
      \nAnd add this to your CSS:
      \n
      <pre><code>
    #purple-grid-item{
        background-color: purple;
    }
      </code></pre>
      \nNow, your center element should be purple!
      \n![Figure 1: Look, the center div is purple!](https://i.imgur.com/dTQKdjk.png)
      \n*Figure 1: Look, the center div is purple!*
      \nOf course, now the text inside is a little illegible. However, you can use the rest of your CSS properties to change how specific IDs look! (For example, you can put another ID on the \`<h1>\`s and \`<p>\`s and color those differently.)`,
      slide15: `You might have tried to go to some websites on mobile, and seen that they were completely and utterly broken. However, other sites that were designed with mobile devices in mind - like Youtube, for example, look a little different, but still look, well, like Youtube.
      \nFor our resume, the thing that's most likely to break or look weird is our grid. On mobile, the text will be squished into short, tall lines. Instead, let's set some things called media queries, which check for the width of the screen and adapt our CSS accordingly. As a separate part of your CSS, add:
      <pre><code>
    @media (min-width: 768px) and (max-width: 1024px){
        .grid-container{
        grid-template-columns: 1fr 1fr;
        }
    }
      </code></pre>
      \nThis checks for tablets, which usually have a screen width of between 768 to 1024px. Then, we set our grid template to only have 2 columns to make reading easier on tablet.
      <pre><code>
    @media (min-width: 481px) and (max-width: 767px){
    .grid-container{
        grid-template-columns: 1fr;
        }
    }
      </code></pre>
      \nThis checks for phone screens in portrait. Here, we only want one column, or else the text might be a little cluttered and hard to read.
      \nTry previewing your site now, and resizing the side window. Alternatively, open the HTML file from File Explorer in Chrome, and resize that window. If all went well, the amount of columns will shift!`,
      slide16: `We're almost done, so it's time to finalize your design for now. Implement any and all of the properties and selectors we've learned about.
      \nSome interesting resources you might also want to check out include [CSS.cool](http://css.cool/#/), [W3schools](https://www.w3schools.com/css/default.asp), and [CSS Cookbook](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook)
      \nOnce you're done, remember to take a stretch break before we get finished with deployment.`,
      slide17: `To host our site and get a free domain, we'll be using a free-to-use service called GitHub and its website hosting service, GitHub Pages. Go to [GitHub.com](https://github.com), and sign up for an account. A free user account will work fine!
      \nNext, we'll make our first repo, which is where we'll upload our code. Click the + button next to your profile picture in the top right, and fill in the next page.
      \nMake sure your repository name is \`[your-username].github.io\`. For example, my username is kewbish, so I'd fill \`kewbish.github.io\` in for the repo name. The rest of the information doesn't matter - just make sure it's a public repository.`,
      slide18: `First, let's upload our files. Find the Upload files button in your repository, and upload all the files in your development folder. Make sure you get your \`index.html\` and \`main.css\`, along with whatever else you've added, such as images.
      \nFill in whatever you'd like for the commit message: Usually, it should be something like \`Initial commit\`. Then, click the commit button.
      \nWe're almost there. Finally, we need to enable GitHub Pages. Navigate to the Settings tab, and find the GitHub Pages section. Under source, select the master branch.
      \nWait a couple minutes for your site to go live, and your site will be officially online and accessible at \`[your-name].github.io\`.
      \nOnce it uploads, you can send this link to your friends and family. In the meantime, showcase your files to whoever's around!
      \nCongratulations - you've just created a website! That's a great accomplishment, and it's the first step in becoming a full-fledged web developer! Think about the past hour or two: we've gone over HTML structure, sections, grids, and elements; CSS grids, selectors, properties, and media queries; and GitHub version control and site deployment. That's a ton of learning!`,
      slide19: `That's about it for this course, but it doesn't have to be your end of your coding journey. We haven't gone over everything in HTML and CSS. Some future exploring points:
      \n- CSS animations
      \n- HTML buttons
      \n- HTML forms and POSTing requests
      \n- CSS Flexbox
      \nIf you'd like to investigate these technologies further, check out the following resources: [Khan Academy](https://www.khanacademy.org/computing/computer-programming/html-css), [GitHub Labs](https://lab.github.com/githubtraining/introduction-to-html), and [Traversy Media](https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU).
      \nThat just about does it for this lesson. Again, if you'd like to support Canada Learning Code by making a donation, click the red button in the bottom right.
      \nAs well, I've created a GitHub repo at the link below. That's the place to ask any questions and post links to your finished sites in the issues. [The repo.](https://github.com/kewbish/diveintohtml)
      \nIf you have any questions, feel free to get in touch via the form on my website. Alternatively, find me on the Interwebs: [my site](https://kewbish.github.io), [my GitHub](https://github.com/kewbish), and [my Dev.to](https://dev.to/kewbish).
      \nThanks for learning! If you found this useful, please share this site with your friends, and help guide them in building a web presence as well.
      \n- [Share on Reddit](http://www.reddit.com/submit?url=https://diveintoht.ml&title=Dive%20Into%20HTML%20-%20A%20great%20site%20to%20learn%20HTML!)
      \n- [Share on Twitter](https://twitter.com/intent/tweet?text=diveintoht.ml%20-%20a%20great%20site%20to%20learn%20HTML!)
      \n- [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https://diveintoht.ml)
      \n- [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://diveintoht.ml)
      \nHope you continue to develop, build, and create with the web!`,
      slideForm0: `We've gone over HTML, CSS, and even grids! One last thing we'll learn - HTTP requests. While these may seem super scary, this is the technology behind most web apps, like YouTube and Reddit. Here, we'll be using it to build a contact form with an external service called [Formspree](https://formspree.io/). (Not sponsored in any way, just find it a great service and convenient for getting something up and running quickly!)
      \nNow, what *are* HTTP requests? And what even is HTTP? HTTP stands for *Hypertext Transfer Protocol*, and is a method of transferring information between the client and the server. What we've been creating over the past bit is considered purely *client*-side, and doesn't have to interact with a server, really.
      \nAs you might expect, HTTP requests are a way for the client to request information, but from where, you ask? Well, usually, it requests information from the server. However, setting up a server and a way to get some information back to the client is out of the scope of this tutorial. If you're interested, check out [this tutorial on REST APIs](https://www.restapitutorial.com/).
      \nHow clients and server communicate is through the use of HTTP methods. We'll be focusing on one: the POST request. As the name explains, it POSTs some information to the server. Think of it like sending an email - your email client, like GMail, sends a POST request to the big servers and tells those to transfer your message to the recipient. (grossly simplified explanation)
      \n![Figure 1: How POST works](https://i.imgur.com/3vMJxkX.png)
      \n*Figure 1: How POST works*
      \nSo, in lieu of setting up our own services, we're going to use [Formspree](https://formspree.io). It's a free way to build contact forms quickly and easily. Take this time to create your own account, and create a form to point back at your email. Click the \`[+ New Form]\` button, then fill in your details.`,
      slideForm1: `The basics of getting a form started are pretty easy.
      <pre><code>
    <form action="https://formspree.io/FORM_ID" method="POST">
        <label>
            Your Name:
            <input type="text" name="name">
        </label>
        <label>
            Your Email:
            <input type="email" name="email">
        </label>
        <label>
            Message:
            <textarea name="message"></textarea>
        </label>
        <input type="submit" value="Send">
    </form>
      </code></pre>
      \nIf you reload, this will give you a couple inputs, like so:`,
      slideAny: `Let's go back. Try entering the slide number you were at before. To go back to the beginning, type \`0\` in the text-input below.`
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
      if (this.count < 19) {
        this.count++;
        window.scrollTo(0, 0);
      }
    },
    countDown() {
      if (this.count > 0) {
        this.count--;
        window.scrollTo(0, 0);
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