<template>
  <section class="section">
    <div class="container">
      <slide slideSubject="2: Some basic tags" :slideContent="slide"></slide>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: `The current HTML version is HTML5, and to denote that, we'll need to add a <!DOCTYPE HTML> tag.
      \nLuckily, VSCode comes with something called Emmet abbreviations to streamline starting up a blank file. Type \`html:5\`, and select the Emmet Abbreviation that pops up with [Enter].
      \nVSCode should spit a nice template out for us. If not: copy-paste the code below.
      <pre><code>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body></body>
    </html>
      </code></pre>
      \nThe \`<head>\` elements are 'meta' elements, and we don't have to worry about anything right now except the \`<title></title>\`. That's what you'll see in the address bar, so choose something like your name.
      \n![Figure 3: The HTML + CSS is where your title would go.](https://i.imgur.com/cB42RYe.png)
      \n*Figure 3: The HTML + CSS is where your title would go.*`
    };
  }
};
</script>