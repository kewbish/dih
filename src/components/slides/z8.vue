<template>
  <slide slideSubject="8: A whole new style" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `We're about to get started with a whole new language - CSS. CSS stands for Cascading Style Sheets, and is the language that web browsers use to figure out how to color, shape, and format your content. It's very powerful, and most sites utilize lots of selectors and properties.
      \nTo get started, add a \`main.css\` file. As with the \`index.html\`, click the 'File add' icon on the sidebar of VSCode, and add the file.
      \nTo link our \`index.html\` with our \`main.css\` file, add the following link inside your \`<head>\` element:
      <code>  
    <link rel="stylesheet" href="main.css">
      </code>
      \nThis will ensure that any styling changes you add to your site is reflected when you view your site with [Ctrl-Shift-V]. Let's start off simple: by styling our \`<h1>\` tags. In CSS, styling all elements of a tag type (here, all \`<h1>\`s), is done by adding:
      <code class="language-css"> 
    h1{
      //something here
    }
      </code>
      \nTimes New Roman is a boring font - find a new one from [Google Fonts](https://fonts.google.com) that you like.
      \nChoose one, select style, and copy the embed tag into your \`<head>\`, just like you added the link to the \`main.css\` file. Now, we'll add it to the CSS.
      <code class="language-css"> 
    h1{
      font-family:fontname;
      font-size:18px;
      color:mediumblue;
    }
      </code>
      \nMake sure you change the fontname to the actual name of the font you've just imported. For example, if you've added a 'Montserrat' font, change the \`font-family\` to \`'Montserrat'\`. Make sure to add quotes, especially if your font name is multiple words.
      \nNow, you'll have something like: 
      \n![Figure 1: An example of our shiny new blue headers!](https://i.imgur.com/qB2idJq.png)
      \n*Figure 1: An example of our shiny new blue headers!*
      \n\`font-family\`, \`font-size\`, and \`color\` are all examples of CSS properties that describe what an element looks like. A great reference can be found here - [W3schools](https://www.w3schools.com/css/default.asp)
      \nThese colours and parameters can all be changed to whatever you wish. Experiment and have fun!`,
    };
  },
};
</script>
