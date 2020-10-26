<template>
  <slide slideSubject="5: Filling up .about-me" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Let's fill up our .about-me (The . denotes a class, so this would be the section with the class of about-me) with content. Inside the \`<section>\` tags, type:
      \n[Tip]: Type this code out by hand - it helps you learn much better. Copy-paste doesn't teach your brain to HTMLify :)
      \n
      <code>
    <div class="about-me-image">
        <img src="https://imgur.com/helloWorld">
    </div>
    <h1>Hey - I'm [yourname]</h1>
    <div class="custom-div"></div>
    <p>This is where you can briefly touch on your life, thoughts, and manifestos.</p>
      </code>
      \nHere, a new tag is introduced: the \`<img>\` tag. This is one of the few tags in HTML that doesn't require an ending \`</img>\` tag. We need a src property (which is the bit with the equal sign) - replace this with an imgur link, after you upload your profile headshot, of course. Alternatively, you can use file-paths, like: \`src="img.jpg"\`, for a .jpg in the same folder with a name of img.
      \nLet's see how your site is looking so far!.
      \n![Figure 1. Your site so far. Not much, eh?](https://i.imgur.com/bPBFH7F.png)
      \n*Figure 1. Your site so far. Not much, eh?*`,
    };
  },
};
</script>
