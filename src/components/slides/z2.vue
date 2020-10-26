<template>
  <slide slideSubject="2: Some basic tags" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `The current HTML version is HTML5 (something that won't change for a long time, if ever, so you don't need to worry about this bit), and to denote that, we'll need to add a <!DOCTYPE HTML> tag.
      \nA premade template should already be available in the editor for you. If not: copy-paste the code below.
      \n
      <code>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body></body>
    </html>
      </code>
      \nThe \`<head>\` elements are 'meta' elements, and we don't have to worry about anything right now except the \`<title></title>\`. That's what you'll see in the address bar, so choose something like your name.
      \n![Figure 3: The HTML + CSS is where your title would go.](https://i.imgur.com/cB42RYe.png)
      \n*Figure 3: The HTML + CSS is where your title would go.*`,
    };
  },
};
</script>
