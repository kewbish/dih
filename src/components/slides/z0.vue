<template>
  <slide :slideSubject="'0: Hello ' + firstName + '!'" :slideContent="slide"></slide>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      slide: `This course will guide you through the beginnings of HTML by building a simple resume website! You'll learn the markup language used to build everything on the web, CSS - the language making each site look pretty and unique, and deployment - or how every webpage is put on the web itself.  
      \nThis course was created by Emilie Ma - also known as Kewbish. If you'd like to learn more about me, visit [my site](https://kewbi.sh).  
      \nTime to get started on your web development journey! First, let's download some software. We'll use [VSCode](https://code.visualstudio.com/download), [VSCode HTML Preview](https://marketplace.visualstudio.com/items?itemName=tht13.html-preview-vscode), and any web browser, like Chrome. You can find installation instructions [for VSCode here](https://code.visualstudio.com/docs/setup/setup-overview), and [for the extension here](https://code.visualstudio.com/docs/editor/extension-gallery).
      \nOnce you've downloaded everything, press the [>] button - it's time to go!`,
    };
  },
  computed: {
    firstName() {
      if (firebase.auth().currentUser) {
        return firebase.auth().currentUser.displayName.split(" ")[0];
      }
      return "there";
    },
  },
};
</script>
