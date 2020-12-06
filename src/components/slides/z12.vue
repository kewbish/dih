<template>
  <slide slideSubject="12: Learning CSS Grid" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `If you've ever seen some grid layouts like:
      \n![Figure 1: A cool grid layout example!](https://speckyboy.com/wp-content/uploads/2017/09/css-grid-layouts-03.jpg)
      \n*Figure 1: A cool grid layout example!*
      \n![Figure 2: Another example, something closer to what we'll be building for our projects section.](https://designinginterfaces.com/wp-content/images/grid-of-equals-cnn.png)
      \n*Figure 2: Another example, something closer to what we'll be building for our projects section.*
      \nBefore we do any cool CSS styling, we need to structure our grid. Add this in one of your sections in your \`main.html\`:
      \n
      <code>
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
      </code>
      \nRemember, the larger \`<div>\` has the class \`grid-container\`, and we just filled it with three smaller \`<div>\`s which will have all our content!
      <timer title="Feel free to edit everything!" subtitle="Take the next couple minutes to talk about your projects, core competencies, internships, work experience, skills, interests - whatever! Edit the contents of each of the children of the .grid-container div." :durationInSecs="180" />`,
    };
  },
};
</script>
