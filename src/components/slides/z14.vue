<template>
  <slide slideSubject="14: Introductions to IDs" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Speaking of changing background colors of containers, what if we wanted to change the color of just *one* element? And what if we wanted to keep everything else the same?
      \nThis is where we can use something called an \`id\`. Usually, these are used for CSS where we only want to change the look of an element or group of elements that only appears once. The reason that they're only used for things that appear only once? IDs can be used only once. (Technically, most web browsers are so tolerant that they'll add the styles as well, but this is definitely *bad practise*.)
      \nImagine two people named Alice Chapman and Bob Chapman. A class selector is like 'selecting' both Alice and Bob by their last name, Chapman. IDs would be like selecting just Alice, or just Bob. The way we use IDs is like:
      <code>
    #id{
      // some code   
    }
      </code>
      \nNote the \`#\` instead of the \`.\`. This is how we differentiate between classes, which use the \`.\`, and our new IDs.
      \nAnother reason we might want to use IDs: they overrule other selectors. That way, you can use IDs to overrule a class, for example.
      \nHowever, if there are two elements that have similar styles, IDs might not be the best choice - you'll have to repeat the same CSS code twice. It's not the most efficient, but it works. Generally, use IDs only when something's used once.
      \nAs well, you can't have multiple IDs on an element. Usually, only the first ID listed is applied. If you want to have multiple pseudo-IDs, try using classes instead!
      \nFor example, to change the color of one of the grid items, change your HTML to:
      <code>
    <div id="purple-grid-item">
        <h1>An item title!</h1>
        <p>An item subtitle and content. Fill this in!</p>
    </div>
      </code>
      \nAnd add this to your CSS:
      \n
      <code>
    #purple-grid-item{
        background-color: purple;
    }
      </code>
      \nNow, your center element should be purple!
      \n![Figure 1: Look, the center div is purple!](https://i.imgur.com/dTQKdjk.png)
      \n*Figure 1: Look, the center div is purple!*
      \nOf course, now the text inside is a little illegible. However, you can use the rest of your CSS properties to change how specific IDs look! (For example, you can put another ID on the \`<h1>\`s and \`<p>\`s and color those differently.)`,
    };
  },
};
</script>