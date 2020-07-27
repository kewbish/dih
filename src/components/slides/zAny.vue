<template>
  <slide slideSubject="Oops - that page doesn't exist." :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `Let's go back. Try entering the slide number you were at before. To go back to the beginning, type \`0\` in the text-input below.`,
    };
  },
};
</script>