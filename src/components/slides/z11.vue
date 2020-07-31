<template>
  <slide slideSubject="11: Going over some easy properties" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Alright, speed round. These are some easy-to-understand CSS properties that are commonly used, but don't need a lot of explanation.
      <code>
    .class{
        background-color: #123456;
    }
      </code>
      \nThis sets the background color of your element to a hex code. You can find a hex code for any color from Google - just look up a hex color picker. You can apply this to any element, specifically - use it on divs to add background squares of colour!
      \nTo add a background image instead:
      <code>
    .class{
        background: url('url/to/jpeg');
    }
      </code>
      <code>
    .class{
        text-shadow: 2px 2px #123456;
    }
      </code>
      \nThis sets a text shadow to a text element, 2px left-right, and 2px top-down away. These values can be negative, too. Again, there's the hex code - set it to your desired text shadow color. Remember, Google is your friend.
      <code class="language-css">
    .class:hover{
        color: #123456;
    }
      </code>
      \nThis is a little different. The :hover selector goes after an element or class selector. Here, the style would be applied when the element with class \`class\` was hovered over. Here, we're just setting an arbitrary color, but other properties can be applied, like text-shadow, for example.
      <timer title="Try out some of these new properties!" subtitle="If you're happy with how your site looks now, you can skip this." :durationInSecs=240 />`,
    };
  },
};
</script>