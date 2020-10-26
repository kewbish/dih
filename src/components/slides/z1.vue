<template>
  <slide slideSubject="1: Creating your files" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Every website starts with an index.html file. This is what web browsers look for to start rendering your website from a site's files when it loads up.
      \nIf you're using the diveintoht.ml editor, this is automatically created for you in the HTML tab. The same goes for a main.css, which is available to edit under the CSS tab.
      \nIf you're using another editor, create a folder, and inside it, index.html and main.css files.`,
    };
  },
};
</script>
