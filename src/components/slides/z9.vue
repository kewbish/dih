<template>
  <slide slideSubject="9: Dividers and box model" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `CSS structures most elements in HTML with a box model, like so. You can see how there's content, then its padding and border, and finally a margin.
      \n![Figure 1: The CSS box model. Every element has its content, padding, margin, and border.](https://i.imgur.com/3A5ZcE1.png)
      \n*Figure 1: The CSS box model. Every element has its content, padding, margin, and border.*
      \nHere, we'll be taking advantage of the border to add a nice divider element. Let's add a  \`.custom-div\` class, which we'll use in CSS to add a solid divider.
      <code>
    .custom-div{
        border-bottom:1px solid darkgray;
    }
      </code>
      \nThe \`.\` before the \`custom-div\` style tells CSS that we're referencing a class. [There are also id's, but we won't be going over those in this intro site.] The border-bottom is another property that adds a 1 pixel tall, solid, dark gray border to the .custom-div element. Now, your site might look something like:
      \n![Figure 2: Maybe your site looks like this! Note the long border going across.](https://i.imgur.com/s9eFek8.png)
      \n*Figure 2: Maybe your site looks like this! Note the long border going across.*
      <playground
        title="Challenge: borders"
        subtitle="There are lots more borders to try. See if you can find out how to make a dotted border that goes all the way round, and in a different colour. Hint: look to border attributes in CSS (on w3schools) for help!"
        htmlProp="<div class='custom-div'>\n\t<h1>A h1, surround me!</h1>\n</div>"
        cssProp=".custom-div {\n border-bottom: 1px solid darkgray; \n}"
      />`,
    };
  },
};
</script>
