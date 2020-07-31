<template>
  <slide slideSubject="19: Finishing our design" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `We're almost done, so it's time to finalize your design for now. Implement any and all of the properties and selectors we've learned about.
      \nSome interesting resources you might also want to check out include [CSS.cool](http://css.cool/#/), [W3schools](https://www.w3schools.com/css/default.asp), and [CSS Cookbook](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook).
      \nOnce you're done, remember to take a stretch break before we get finished with deployment.
      <timer title="Take the next 5 minutes to finalize everything!" subtitle="Make sure your site includes all the information you want on it, and if this isn't enough time - keep working!" :durationInSecs=300 />`,
    };
  },
};
</script>