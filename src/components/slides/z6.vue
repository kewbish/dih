<template>
  <section class="section">
    <div class="container">
      <slide slideSubject="6: Filling up the rest of our sections" :slideContent="slide"></slide>
      <timer
        title="Editing time!"
        subtitle="Change anything and everything about the site, right now. Add headings, paragraphs, text, images, whatever you like."
        :durationInSecs="1200"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: `For the next 15-20 minutes, work on filling in content around your website. Try editing your education details, writing about your work, or changing anything else you wish. (Don't worry about the projects bit quite yet - we'll learn how to build a grid with that soon!)
      \nRemember the \`<p>\` tags, and keep those in mind - they're the best way to add more information. Also, remember to add \`<div>\` tags to separate chunks of content, and if you feel the need, add another section for fun! The link \`<a>\` tag can also be used to link to things like your resume, LinkedIn, or social media profiles.
      \nDon't feel limited by the section classes we have implemented here, you can add sections with classes with whatever you wish!`,
    };
  },
};
</script>