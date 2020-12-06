<template>
  <slide slideSubject="17: Adding our form markup" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `The basics of getting a form started are pretty easy.
      \n
      <code>
    <form action="https://formspree.io/FORM_ID" method="POST">
        <p>Name:</p>
        <input type="text" name="name">
        <p>Email:</p>
        <input type="email" name="email">
        <p>Message:</p>
        <textarea name="message"></textarea><br><br>
        <input type="submit" value="Send">
    </form>
      </code>
      \nRemember to replace the 'action' part with your Formspree link!
      \nIf you reload, this will give you a couple inputs, like so:
      \n![Figure 1: The markup for our form.](https://i.imgur.com/CC3Kn8M.png)
      \n*Figure 1: The markup for our form.*
      \nWe're introducing a lot of new elements here, so let's go through the HTML one line at a time.
      \n- First, we start with \`<form action="https://formspree.io/FORM_ID" method="POST">\`. This creates a new \`<form>\` element, which will serve as a container for our inputs. This 'action' tells the web browser *where* to pass our information to, and 'method' tells the browser that it should fire off a POST request - what we learned about last slide. To where? The Formspree link, of course. 
      \n- Here, we have a paragraph tag - something we've seen before. We can use this to label our input, which is the next thing we'll look at.
      \n- This \`<input>\` element is the input box that you see and put your information into. We give it an attribute called 'text', showing that our input is a text input. There are lots of other types of inputs, [see a larger list here](https://www.w3schools.com/html/html_form_input_types.asp). This will give us a single-line text input. We give it a 'name' too - this gives us a reference point for our data later. When submitting a form, only the inputs with a name gets submitted, so make sure your inputs have the 'name' attribute.
      \n- Another text input - just like above!
      \n- Onto the 'Message:' line. We'll skip over the paragraph element - you know what that does (adds a label to the input). But here, we have a new element: \`<textarea>\`. Unlike the \`<input>\` text element, this is a multiline input. Right after it, there are two \`<br>\` tags. These are linebreaks, not unlike pressing [Enter] on your keyboard. This lets us have a bit of spacing before our submit button.
      \n- And finally, our last input. This one has a type of 'submit', which lets the web browser know that it should render it as a button and submit the form to the server. In our case, it'll submit to the URL that we defined in the 'action' attribute of our starting form element. (Again, remember to change this to your actual Formspree link!) The 'value' attribute we set here is the text that gets displayed inside the button, as you can see in the image.
      \n- Lastly, we close our form up!
      \nTry to implement this HTML into your website as well! We'll get into styling next.`,
    };
  },
};
</script>
