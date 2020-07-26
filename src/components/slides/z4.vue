<template>
  <slide slideSubject="4: Structural elements: <div> and <section>" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `\`<div>\` and \`<section>\` won't have any visible effect on the structure, and don't print anything like \`<h1>\` and \`<p>\`. However, they're still required as basic knowledge for website structuring.
      \nSection tags allow us to differentiate different, well, sections in your website. It can contain any other tags, like \`<div>\`, \`<h1>\`, and \`<p>\`.
      \nSpeaking of which: what does the div tag do? It's a container, and like section, can contain any other HTML tags, including another div. Visibly, these don't seem to do anything, but we'll be using them very frequently to structure our web resume.
      \nUnfortunately, we'll have to undo all your hard work - but that's alright, you've learned so much! Delete everything in your \`index.html\`, and add \`html:5\`'s output again. For reference, check slide 2!
      \nInside your \`<body>\`, add a couple of \`<section>\`s.
      \n
      <code>
    <section class="header"></section>
    <section class="about-me"></section>
    <section class="education"></section>
    <section class="project-skills"></section>
      </code>
      \nThis will add several empty sections to your site. Remember, you can preview your site with [Ctrl-Shift-V]!`,
    };
  },
};
</script>