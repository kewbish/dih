<template>
  <slide slideSubject="20: GitHub setup" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `To host our site and get a free domain, we'll be using a free-to-use service called GitHub and its website hosting service, GitHub Pages. Go to [GitHub.com](https://github.com), and sign up for an account. A free user account will work fine!
      \nNext, we'll make our first repo, which is where we'll upload our code. Click the + button next to your profile picture in the top right, and fill in the next page.
      \nMake sure your repository name is \`[your-username].github.io\`. For example, my username is kewbish, so I'd fill \`kewbish.github.io\` in for the repo name. The rest of the information doesn't matter - just make sure it's a public repository.`,
    };
  },
};
</script>