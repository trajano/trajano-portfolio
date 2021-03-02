<template>
  <div v-if="posts.length > 0">
    <h5 class="white-text">Recent blog posts</h5>
    <p v-for="post in posts" :key="post.id">
      <a
        class="white-text waves-effect btn-flat"
        :href="post.link"
        v-html="post.title.rendered"
      ></a>
    </p>
  </div>
  <div v-else>
    <h5 class="white-text">Bio</h5>
    <p class="grey-text text-lighten-4">
      Archie has been working professionally {{ yearsWorked }} years. He enjoys
      programming and playing Heroes of the Storm. About the only "normal" thing
      he likes doing is eating food.
    </p>
  </div>
</template>
<script>
export default {
  name: "BioOrBlog",
  data() {
    const currentYear = new Date().getFullYear();
    const yearsWorked = currentYear - 1996;
    return {
      currentYear,
      yearsWorked,
      posts: []
    };
  },
  async mounted() {
    if (global.__PRERENDER_INJECTED) {
      return;
    }
    const postsRequest = await fetch(
      "https://trajano.net/wp-json/wp/v2/posts?per_page=3"
    );
    this.posts = await postsRequest.json();
  }
};
</script>
