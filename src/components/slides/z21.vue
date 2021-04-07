<template>
  <slide slideSubject="21: Going live" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `We're almost done with our site - let's upload our files and get it live. Under the preview in the diveintoht.ml editor, click 'export files'. Find the Upload files button in your repository, and upload all the files. If you're using another editor, still ensure you get your \`index.html\` and \`main.css\` uploaded.
      \nFill in whatever you'd like for the commit message: Usually, it should be something like \`Initial commit\`. Then, click the commit button.
      \nWe're almost there. Finally, we need to enable GitHub Pages. Navigate to the Settings tab, and find the GitHub Pages section. Under source, select the master branch.
      \nWait a couple minutes for your site to go live, and your site will be officially online and accessible at \`[your-name].github.io\`.
      \nOnce it uploads, you can send this link to your friends and family. In the meantime, showcase your files to whoever's around!
      \nCongratulations - you've just created a website! That's a great accomplishment, and it's the first step in becoming a full-fledged web developer! Think about the past hour or two: we've gone over HTML structure, sections, grids, and elements; CSS grids, selectors, properties, and media queries; HTTP requests and forms; and GitHub version control and site deployment. That's a ton of learning!`,
    };
  },
};
</script>
