<template>
  <slide slideSubject="13: Formatting the grid" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Alright, let's go back to CSS for a bit. Add the following code to your main.css file.
      \n
      <code>
    .grid-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
    }
      </code>
      \nThis style changes the display property of the parent (container) \`<div>\`, which is usually \`block\`, to \`grid\`. This is a relatively new CSS property, with its history only going back to around 2011. Then, we add the template columns, setting each one equal to one third each - (what the 1fr does: it's literally just 1 fraction of the total width.) If you want more or less columns, just add or remove \`1fr\`s in the \`grid-template-columns\`. Now, if you view your site, you'll see that your \`<div>\`'s children are displayed like so:
      \n![Figure 1: An example grid.](https://i.imgur.com/ICfGPf1.png)
      \n*Figure 1: An example grid.*
      \nAs well, the \`column-gap\` adds a little gap between each of the columns, so each column has some room to breathe. If you're planning on having more than one row, you can add a \`row-gap\` property, and set that to around 10px (measurement in pixels, remember) as well. Here's a playground to try things out temporarily.
      <playground
        title="Testing grid layouts"
        subtitle="Try out some of the grid tweaks here, then paste them and add them to the main Editor!"
        htmlProp="<div class='grid-container'>\n\t<div>\n\t\t<h1>An item title!</h1>\n\t\t<p>An item subtitle and content. Fill this in!</p>\n\t</div>\n\t<div>\n\t\t<h1>An item title!</h1>\n\t\t<p>An item subtitle and content. Fill this in!</p>\n\t</div>\n\t<div>\n\t\t<h1>An item title!</h1>\n\t\t<p>An item subtitle and content. Fill this in!</p>\n\t</div>\n</div>"
        cssProp=".grid-container {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tcolumn-gap: 10px;\n}"
      />`,
    };
  },
};
</script>
