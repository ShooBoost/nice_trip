<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a class="link-primary" href="/">首頁</a></li>
      <li class="breadcrumb-item" v-if="theme">
        <a class="link-primary" :href="`/searching?theme=${apiType}`">{{ theme }}</a>
      </li>
      <li class="breadcrumb-item" v-if="city && city != '選擇縣市'">
        <a class="link-primary" :href="`/searching?theme=${apiType}&city=${city}`">{{ city }}</a>
      </li>
      <li class="breadcrumb-item" v-if="category && category != '選擇類別'">
        <a class="link-primary" :href="`/searching?theme=${apiType}&category=${category}`">{{ category }}</a>
      </li>
      <li class="breadcrumb-item link-primary active" aria-current="page" v-if="name">
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
  props: ["apiType", "city", "name", "category"],
  created() {
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
};
</script>
