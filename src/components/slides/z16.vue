<template>
  <slide slideSubject="16: HTTP Requests" :slideContent="slide"></slide>
</template>

<script>
export default {
  data() {
    return {
      slide: `We've gone over HTML, CSS, and even grids! One last thing we'll learn - HTTP requests. While these may seem super scary, this is the technology behind most web apps, like YouTube and Reddit. Here, we'll be using it to build a contact form with an external service called [Formspree](https://formspree.io/). (Not sponsored in any way, just find it a great service and convenient for getting something up and running quickly!)
      \nNow, what *are* HTTP requests? And what even is HTTP? HTTP stands for *Hypertext Transfer Protocol*, and is a method of transferring information between the client and the server. What we've been creating over the past bit is considered purely *client*-side, and doesn't have to interact with a server, really.
      \nAs you might expect, HTTP requests are a way for the client to request information, but from where, you ask? Well, usually, it requests information from the server. However, setting up a server and a way to get some information back to the client is out of the scope of this tutorial. If you're interested, check out [this tutorial on REST APIs](https://www.restapitutorial.com/).
      \nHow clients and server communicate is through the use of HTTP methods. We'll be focusing on one: the POST request. As the name explains, it POSTs some information to the server. Think of it like sending an email - your email client, like GMail, sends a POST request to the big servers and tells those to transfer your message to the recipient. (grossly simplified explanation)
      \n![Figure 1: How POST works.](https://i.imgur.com/3vMJxkX.png)
      \n*Figure 1: How POST works.*
      \nSo, in lieu of setting up our own services, we're going to use [Formspree](https://formspree.io). It's a free way to build contact forms quickly and easily. Take this time to create your own account, and create a form to point back at your email. Click the \`[+ New Form]\` button, then fill in your details.`,
    };
  },
};
</script>