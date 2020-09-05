<template>
  <slide slideSubject="15: Media Queries and responsiveness" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `You might have tried to go to some websites on mobile, and seen that they were completely and utterly broken. However, other sites that were designed with mobile devices in mind - like Youtube, for example, look a little different, but still look, well, like Youtube.
      \nFor our resume, the thing that's most likely to break or look weird is our grid. On mobile, the text will be squished into short, tall lines. Instead, let's set some things called media queries, which check for the width of the screen and adapt our CSS accordingly. As a separate part of your CSS, add:
      <code>
    @media (min-width: 768px) and (max-width: 1024px){
        .grid-container{
        grid-template-columns: 1fr 1fr;
        }
    }
      </code>
      \nThis checks for tablets, which usually have a screen width of between 768 to 1024px. Then, we set our grid template to only have 2 columns to make reading easier on tablet.
      <code>
    @media (min-width: 481px) and (max-width: 767px){
    .grid-container{
        grid-template-columns: 1fr;
        }
    }
      </code>
      \nThis checks for phone screens in portrait. Here, we only want one column, or else the text might be a little cluttered and hard to read.
      \nTry previewing your site now, and resizing the side window. Alternatively, open the HTML file from File Explorer in Chrome, and resize that window. If all went well, the amount of columns will shift!
      \nWith your new grid, try styling the background colors of some of the containers by adding classes and properties, or change the font color! If you need a refresher, visit the past slides.`,
    };
  },
};
</script>