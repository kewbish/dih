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
        <slide v-if="count == 0" :slideSubject="'0: Hello ' + firstName + '!'" :slideContent="[{line: 'Time to get started on your web development journey! First, let\'s download some software.'},{line: 'You\'ll need some software to get started. We\'ll use:'},{list:[{item: 'VSCode', link: 'https://code.visualstudio.com/download'}, {item: 'VSCode HTML Preview', link: 'https://marketplace.visualstudio.com/items?itemName=tht13.html-preview-vscode'}, {item: 'Any web browser, like Chrome'}]},{line: 'Once you\'ve downloaded everything, press the [>] button - it\'s time to go!'}]"></slide>
        <slide v-else-if="count == 1" slideSubject="1: Creating your files" :slideContent="[{line: 'Every website starts with an index.html file. This is what all web browsers look for to start rendering your creation within a site\'s files when it loads up.'},{line: 'Create a folder on your computer, and open this folder with VSCode by clicking this button:'}, {img: ['https://i.stack.imgur.com/AlsoM.png', 'Figure 1: Open the folder you just created.']}, {line: 'Now, it\'s time to create an index.html file.'},{img: ['https://code.visualstudio.com/assets/docs/nodejs/nodejs/toolbar-new-file.png', 'Figure 2: Create a new file, and call it index.html.']},{line:'You\'ll need to do the same with a main.css file. Create a main.css file, just like you created your index.html file.'}]"></slide>
        <slide v-else-if="count == 2" slideSubject="2: Some basic tags" :slideContent="[{line:'The current HTML version is HTML5, and to denote that, we\'ll need to add a <!DOCTYPE HTML> tag.'},{line:'Luckily, VSCode comes with something called Emmet abbreviations to streamline starting up a blank file. Type \'html:5\', and select the Emmet Abbreviation that pops up with [Enter].'},{line:'VSCode should spit a nice template out for us. If not: copy-paste the code below.'},{code:'<!DOCTYPE html>\n<html lang=&quot;en&quot;>\n<head>\n\t<meta charset=&quot;UTF-8&quot;>\n\t<meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;>\n\t<title>Document</title>\n</head>\n<body>\n</body>\n</html>'}, {line: 'The <head> elements are meta elements, and we don\'t have to worry about anything right now except the <title></title>. That\'s what you\'ll see in the address bar, so choose something like your name.'}, {img: ['https://i.imgur.com/cB42RYe.png', 'Figure 3: The HTML + CSS is where your title would go.']}]"></slide>
        <slide v-else-if="count == 3" slideSubject="3: Learning about <p>, <h1>, and <a>" :slideContent="[{line: 'Within your <body></body> tags, try adding some other tags.'},{line:'Try pressing [Ctrl-Shift-V] to open the HTML preview, and refer to it as we go through each tag.'},{line: 'First, we\'ll look at the <p>. Add it within the body, and add something inside so it looks something like:'},{code: '<p>Hello there!</p>'},{line: 'The </p> slash is required - it denotes the ending of a tag.'},{line: 'Try doing the same with <h1> tags! Remember the </h1> tag!'},{line: 'In your preview, what do these do? [Spoiler: <p> creates paragraphs, and <h1> headers.]'},{line: 'Let\'s also go through the concept nesting: with the <a> tag.'},{code: '<a href=&quot;https://reddit.com&quot;><p>This link goes to Reddit</p></a>'},{line: 'See how the <a> tag goes *around* the <p> tag? This is called nesting, and the <a> is now the parent of the <a> tag, the child. We\'ll go through this in greater detail once we start structuring our site.'},{timer:['Experiment with these tags', 'Try playing around with the <a> link tags, and get familiar with how to add <p> and <h1> tags, as well as how to close them.', 180]}]"></slide>
        <slide v-else-if="count == 4" slideSubject="4: Structural elements: <div> and <section>" :slideContent="[{line:'<div> and <section> won\'t have any visible effect on the structure, and don\'t print anything like <h1> and <p>. However, they\'re still required as basic knowledge.'}]"></slide>
        <slide v-else slideSubject="Oops - that slide doesn't exist." :slideContent="[{line: 'Let\'s go back. Try entering the slide number you were at before. To go back to the beginning, type \'0\' in the text-input below.'}]"></slide>
      </div>
    </div>
    <input type="text" class="input fixed-input" v-model="count" />
    <button @click="countDown" class="button fixed-back">&lt;</button>
    <button @click="countUp" class="button fixed-right">&gt;</button>
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