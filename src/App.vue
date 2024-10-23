<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/contact" class="nav-item">Contact</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background-color: #42b983;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.nav-item {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

.nav-item:hover {
  color: #ffdd57;
}
</style>
