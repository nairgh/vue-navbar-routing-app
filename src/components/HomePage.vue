<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to My Blog</h1>
        <p>Sharing thoughts, ideas, and experiences</p>
        <router-link to="/about" class="hero-button">Learn More About Me</router-link>
      </div>
    </section>

    <!-- Featured Section -->
    <section class="featured-posts">
      <h2>Featured Posts</h2>
      <div class="featured-container">
        <div class="featured-item">
          <img src="https://via.placeholder.com/300" alt="Blog Image 1">
          <h3><router-link to="/post/1">How to Build a Vue.js App</router-link></h3>
          <p>A detailed guide on building a Vue.js app from scratch.</p>
        </div>
        <div class="featured-item">
          <img src="https://via.placeholder.com/300" alt="Blog Image 2">
          <h3><router-link to="/post/2">Understanding Vue Router</router-link></h3>
          <p>Master Vue Router for creating dynamic routes and smooth navigation.</p>
        </div>
      </div>
    </section>

    <!-- Blog Cards Section -->
    <section class="blog-cards">
      <h2>Latest Blog Posts</h2>
      <div class="card-container">
        <div class="card" v-for="post in posts" :key="post.id">
          <img :src="post.image" :alt="post.title" />
          <h3><router-link :to="post.link">{{ post.title }}</router-link></h3>
          <p>{{ post.excerpt }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Mastering Vue 3: Advanced Techniques",
          excerpt: "Explore advanced Vue.js techniques to enhance your development skills.",
          link: "/post/1",
          image: "https://via.placeholder.com/250",
        },
        {
          id: 2,
          title: "How to Manage State in Vue",
          excerpt: "An in-depth look at state management strategies using Vuex and other tools.",
          link: "/post/2",
          image: "https://via.placeholder.com/250",
        },
        {
          id: 3,
          title: "Creating Reusable Components in Vue.js",
          excerpt: "Learn how to build and reuse Vue.js components effectively.",
          link: "/post/3",
          image: "https://via.placeholder.com/250",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Home Page Background */
.home-page {
  /* background-image: url('https://via.placeholder.com/1600x900'); */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: rgb(237, 238, 234);
}

/* Hero Section */
.hero {
  background-color: rgba(0, 0, 0, 0.6); /* Adds a transparent dark overlay */
  padding: 100px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin: 0;
}

.hero p {
  font-size: 1.2rem;
  margin: 10px 0;
}

.hero-button {
  padding: 10px 20px;
  background-color: #ffdd57;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
}

.hero-button:hover {
  background-color: #ffb400;
}

/* Featured Section */
.featured-posts {
  padding: 40px 20px;
  text-align: center;
  color: #ffb400;
}

.featured-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.featured-item {
  width: 300px;
  margin: 10px;
  text-align: center;
}

.featured-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.featured-item h3 {
  margin: 10px 0;
}

/* Blog Cards Section */
.blog-cards {
  padding: 40px 20px;
  color:chartreuse;
}

.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  width: 250px;
  margin: 10px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8); /* Transparent background for readability */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.card h3 {
  margin: 10px 0;
}

.card p {
  font-size: 0.9rem;
  color: #555;
}

.card a {
  text-decoration: none;
  color: #42b983;
}

.card a:hover {
  color: #ffdd57;
}
</style>
