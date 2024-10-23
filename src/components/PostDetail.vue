<template>
  <div class="post-detail">
    <h1>{{ post.title }}</h1>
    <img :src="post.image" :alt="post.title" />
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "Sample Blog Post",
        image: "https://via.placeholder.com/600",
        content: "This is a detailed blog post content."
      }
    };
  }
};
</script>

<style scoped>
.post-detail {
  padding: 40px 20px;
  text-align: center;
}

.post-detail img {
  max-width: 100%;
  border-radius: 8px;
}

.post-detail h1 {
  margin: 20px 0;
}

.post-detail p {
  font-size: 1.1rem;
  line-height: 1.8;
}
</style>
