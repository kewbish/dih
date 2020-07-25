<template>
  <section class="section">
    <div class="container">
      <slide slideSubject="3: Learning about <p>, <h1>, and <a>" :slideContent="slide"></slide>
      <timer
        title="Experiment with these tags"
        subtitle="Try playing around with the <a> link tags, and get familiar with how to add <p> and <h1> tags, as well as how to close them."
        :durationInSecs="300"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: `Within your <body></body> tags, try adding some other tags. Try pressing [Ctrl-Shift-V] to open the HTML preview, and refer to it as we go through each tag.
      \nFirst, we'll look at the <p>. Add it within the body, and add something inside so it looks something like:
      \n
      <p>Hello there!</p>
      \nThe \`</p>\` slash is required - it denotes the ending of a tag.
      \nTry doing the same with \`<h1>\` tags! Remember this tag - it's important. You can just copy-paste the \`<p>\` tags, but replace the 'p' with 'h1'.
      \nIn your preview, what do these do? [Spoiler: \`<p>\` creates paragraphs, and \`<h1>\` creates headers.]
      \nLet's also go through the concept nesting: with the \`<a>\` tag.
      \n
      <a href="https://reddit.com"><p>This link goes to Reddit</p></a>
      \nSee how the \`<a>\` tag goes *around* the \`<p>\` tag? This is called nesting, and the \`<a>\` is now the parent of the \`<p>\` tag, the child. We'll go through this in greater detail once we start structuring our site.`,
    };
  },
};
</script>