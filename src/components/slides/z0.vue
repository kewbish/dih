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
      \nAn online editor for this course is available [here](https://diveintoht.ml/#/editor). It runs off the same editor as VSCode, so feel free to use that as an alternative. However, the editor is download- and configuration-free, so it's a much easier starting point for new developers.
      \nOnce you've checked out the editor, press the [>] button - it's time to go!`,
    };
  },
  computed: {
    firstName() {
      if (firebase.auth().currentUser) {
        if (firebase.auth().currentUser.displayName) {
            return firebase.auth().currentUser.displayName.split(" ")[0];
        } else {
            return "there";
        }
      }
      return "there";
    },
  },
};
</script>
