<template>
  <nav class="d-flex align-items-center justify-content-around justify-content-md-start container py-0dot5 py-md-1 bg-white">
    <router-link class="me-md-auto" to="/"
      ><img
        class="d-none d-md-inline-block"
        src="../assets/Logo-desktop.svg"
        alt="Logo" />
      <img class="d-md-none" src="../assets/Logo-mobile.svg" alt="Logo"
    /></router-link>
    <router-link class="me-md-3" to="/searching?theme=ScenicSpot" push
      >探索<br class="d-md-none">景點</router-link
    >
    <router-link class="me-md-3" to="/searching?theme=Activity" push
      >節慶<br class="d-md-none">活動</router-link
    >
    <router-link class="" to="/searching?theme=Restaurant" push
      >品嚐<br class="d-md-none">美食</router-link
    >
  </nav>
</template>
<script>
export default {
  name: "navbar",
};
</script>