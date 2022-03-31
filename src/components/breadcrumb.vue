<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link class="link-primary" to="/">首頁</router-link>
      </li>
      <li class="breadcrumb-item" v-if="theme">
        <router-link class="link-primary" :to="`/searching?theme=${apiType}`">{{
          theme
        }}</router-link>
      </li>
      <li class="breadcrumb-item" v-if="Object.keys(city).length !== 0">
        <router-link
          class="link-primary"
          :to="`/searching?theme=${apiType}&city=${city.City}`"
          >{{ city.CityName }}</router-link
        >
      </li>
      <li class="breadcrumb-item" v-if="category">
        <router-link
          class="link-primary"
          :to="`/searching?theme=${apiType}&category=${category}`"
          >{{ category }}</router-link
        >
      </li>
      <li
        class="breadcrumb-item link-primary active"
        aria-current="page"
        v-if="name"
      >
        {{ name }}
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      theme: "",
    };
  },
  watch: {
    apiType() {
      this.getChineseNameOfCurrentTheme();
    },
  },
  methods: {
    getChineseNameOfCurrentTheme() {
      switch (this.apiType) {
        case "ScenicSpot":
          this.theme = "探索景點";
          break;
        case "Activity":
          this.theme = "節慶活動";
          break;
        case "Restaurant":
          this.theme = "在地美食";
          break;
      }
    },
  },
  props: ["apiType", "city", "name", "category"],
  created() {
    this.getChineseNameOfCurrentTheme();
  },
};
</script>
