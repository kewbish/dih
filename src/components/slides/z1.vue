<template>
  <slide slideSubject="1: Creating your files" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Every website starts with an index.html file. This is what web browsers look for to start rendering your website from a site's files when it loads up.
      \nCreate a folder on your computer, and open this folder with VSCode by clicking this button:
      \n![Figure 1: Open the folder you just created.](https://i.imgur.com/QseX16F.png)
      \n*Figure 1: Open the folder you just created.*
      \nNow, it's time to create an index.html file.
      \n![Figure 2: Create a new file, and call it index.html.](https://code.visualstudio.com/assets/docs/nodejs/nodejs/toolbar-new-file.png)
      \n*Figure 2: Create a new file, and call it index.html.*
      \nYou'll need to do the same with a main.css file. Create a main.css file, just like you created your index.html file.`,
    };
  },
};
</script>
