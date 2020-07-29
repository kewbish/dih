<template>
  <slide slideSubject="18: A couple style examples" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Alright, almost done now. Let's go through a couple recipes that you might want to use in styling your inputs and textareas!
      
      <code>
    input{
        font-family: 'Cool Font', sans-serif;
        color: red;
    }
      </code>
      \nThis recipe goes through two of the most commonly used properties when dealing with form inputs. Normally, we've already changed all our \`<p>\`s to be a different font, but that won't change inputs. So here, we re-add the rule. Remember, the \`'Cool Font'\` needs to be something you've imported. See previous slides for more information!
      \nAs well, if you'd like to change the input text color, you can do so here. Now, your form might look something like:
      \n![*Figure 1: A form with added styling!*](https://i.imgur.com/T0uFYnj.png)
      \n*Figure 1: A form with added styling!*
      \nIf you'd like to apply these styles to both your input and textarea, you can change the first line of the rule like so:
      
      <code>
    // from 'input{' to
    input, textarea{
        // styles
    }
      </code>
      \nThis tells the browser to select both inputs and textareas to apply these styles to.
      \nIf you'd like to apply some styling to just the button, you can use an ID! (In production, there are special CSS selectors available, but those are out of the scope of this tutorial). For example:
      
      <code>
    #submit-button{
        background-color: green;
        border: 1px white solid;
        padding: 5px 10px;
        cursor: pointer;
    }
      </code>
      \nWe know what the \`background-color\` does - changes the background color. We've also already gone over the border - here, it adds a 1 pixel solid white border. As well, we use the \`padding\` property to add a 5px space on the top and bottom, and 10px on the left and right. (Note: this is how we reference padding directions. If there's only one number after the padding, it gets applied to every side, but here, it goes to the vertical sides then the horizontal sides). Here, we also introduce a new property - the \`cursor\` property. This will change the cursor from the normal triangle pointer to the mouse hand - indicating it's a clickable button.`,
    };
  },
};
</script>