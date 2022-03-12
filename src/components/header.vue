<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/"
        ><img
          class="d-none d-md-block"
          src="../assets/Logo-desktop.svg"
          alt="Logo" />
        <img class="d-md-none" src="../assets/Logo-mobile.svg" alt="Logo"
      /></a>
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
            <a class="nav-link" href="/searching?theme=ScenicSpot">探索景點</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/searching?theme=Activity">節慶活動</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/searching?theme=Restaurant">品嚐美食</a>
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
<style scoped lang="scss"></style>
