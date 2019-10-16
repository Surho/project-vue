<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <router-link to="/" class="main-logo" href="#">
          <img src="./assets/logo.png" alt="" />
          <p><span>vue.js</span> study project</p>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link active-class="active" class="nav-link" to="/" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link active-class="active" class="nav-link" to="/addUser" exact
                >Add User</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script></script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  margin-bottom: 50px;
}

.main-logo {
  display: flex;
  align-items: center;
  span {
    color: #41b883;
  }
  p {
    margin-bottom: 0;
    margin-left: 10px;
    color: #fff;
  }
  img {
    display: block;
    width: 50px;
  }
}

.nav-link.active {
  color: #41b883 !important;
}
</style>
