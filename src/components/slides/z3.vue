<template>
  <slide slideSubject="3: Learning about <p>, <h1>, and <a>" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Within your \`<body></body>\` tags, try adding some other tags. Try toggling the HTML preview (a keybind is available: [Ctrl-Shift-V]), and refer to it as we go through each tag.
      \nFirst, we'll look at the \`<p>\`. Add it within the body, and add something inside so it looks something like:
      \n
      <p>Hello there!</p>
      \nThe \`</p>\` slash is required - it denotes the ending of a tag.
      \nTry doing the same with \`<h1>\` tags! Remember this tag - it's important. You can just copy-paste the \`<p>\` tags, but replace the 'p' with 'h1'.
      \nIn your preview, what do these do? [Spoiler: \`<p>\` creates paragraphs, and \`<h1>\` creates headers.]
      \nLet's also go through the concept nesting: with the \`<a>\` tag.
      \n
      <a href="https://reddit.com"><p>This link goes to Reddit</p></a>
      \nSee how the \`<a>\` tag goes *around* the \`<p>\` tag? This is called nesting, and the \`<a>\` is now the parent of the \`<p>\` tag, the child. We'll go through this in greater detail once we start structuring our site.  
      \nThe below is what we're going to call a *playground*, or an interactive in-slide sandbox to test small concepts out without having to work with the larger Editor. Familiarize yourself with the interface, and try it out!
      <playground
        title="Tags and nesting!"
        subtitle="Nesting tags is a concept that's a little tricky. Try playing around with it in the playground to the right - can you add a new &lt;p&gt; tag with a nested link?"
        htmlProp="<h1>This is a h1, but inside, <a href='https://diveintoht.ml'>a link</a></h1>"
        cssProp="/* Nothing much to see here - ignore this for now.*/"
      />
      \nThis is a timer - just a suggestion and not a rigid schedule to be followed. These will include a topic to explore, and a suggested amount of time, but of course feel free to take shorter or longer.
      <timer
        title="Experiment with tags!"
        subtitle="Try playing around with the &lt;a&gt; link tags, and get familiar with how to add &lt;p&gt; and &lt;h1&gt; tags, as well as how to close them."
        :durationInSecs="1200"
      />`,
    };
  },
};
</script>
