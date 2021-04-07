<template>
  <slide slideSubject="1: Creating files and exploring editors" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Every website starts with an index.html file. This is what web browsers look for to start rendering your website from a site's files when it loads up.
      \nIf you're using the diveintoht.ml editor, this is automatically created for you in the HTML tab. The same goes for a main.css, which is available to edit under the CSS tab.
      \nIf you're using another editor, create a folder, and inside it, index.html and main.css files.
      \nWhile we're here, let's also explore two other functions in the editor. The 'toggle preview' button does just that - toggle a preview. You won't see anything now, but you will soon. You can easily trigger it with [Ctrl-Shift-V]. You can also export your files for deployment at the end. You won't see anything interesting there at the moment, but this'll be useful for later.`,
    };
  },
};
</script>
