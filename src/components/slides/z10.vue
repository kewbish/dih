<template>
  <slide slideSubject="10: Centering both ways" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Commonly, we also see elements centered on webpages. Let's learn how to do that, applying our new knowledge with element and class selectors. (Remember, the \`h1{}\` and the \`.custom-div{}\`?)
      \nTo center content horizontally, like:
      \`|   [el]   |\`
      \nWe can use the following CSS - again, taking advantage of the margin properties of each element.
      <code>
    .class{
        margin: auto;
        text-align: center;
    }
      </code>
      \nThe auto margin sets the margin automatically on each side of the element with the class \`class\`, top, right, left, and bottom. This doesn't end up affecting your top or bottom (we'll get there soon).
      \nThe text-align property aligns the text within the div. If you don't want your text centered in your centered div, you don't need to add this. Try applying this to one of your classes or elements!
      \nNow, let's go over vertical centering. Usually, this ends up being a little more tricky than horizontal centering.
      <code class="language-css">
    .class{
        margin: 0 auto;
    }
      </code>
      \nThis sets the margin of the top and bottom to zero, and therefore sets the element right in the middle of its parent. That's usually the de-facto solution, but alternatively, you can choose to use:
      <code>
    .class{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
      </code>
      \nThis is another solution - it sets the position (usually static where elements render in order) to relative to its parent element. It positions 50% away from the top, and then 50% of the element's height back up, to properly center. Note: if you try to center an image, you usually need to put it inside a div, and apply these centering styles to the div instead. This is due to the fact that images don't render as blocks properly, and have some weird margin styles.
      \nIf you'd like to center some elements on your site, take the next couple minutes to apply some styles!
      <timer title="Centering" subtitle="Take the next while to center some of your elements with what you've just learned." :durationInSecs="150" />`,
    };
  },
};
</script>