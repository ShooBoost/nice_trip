<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><img
          class="d-none d-md-block"
          src="../assets/Logo-desktop.svg"
          alt="Logo" />
        <img class="d-md-none" src="../assets/Logo-mobile.svg" alt="Logo"
      /></router-link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto text-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/searching?theme=ScenicSpot" push>探索景點</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/searching?theme=Activity" push>節慶活動</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/searching?theme=Restaurant" push>品嚐美食</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "header",
  props: {},
};
</script>
