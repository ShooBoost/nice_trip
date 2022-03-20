<template>
  <router-link
    class="w-100 h-100"
    :to="'/spotDetail?theme=' + apiType + '&id=' + spotId"
    target="_blank"
  >
    <div
      class="
        w-100
        paddingTop75Percent
        position-relative
        radius20px
        overflow-hidden
        hoverImgBigger
        mb-0dot375 mb-lg-0dot625
      "
    >
      <img
        v-mainImg="imgUrl"
        :src="backupImg"
        :alt="spotName"
        class="
          position-absolute
          w-100
          h-100
          top-50
          start-0
          translate-middle-y
          objectFitCover
        "
      />
    </div>
    <h5 class="fs-5dot125 fsLg4dot375 text-black">
      {{ spotName }}
    </h5>
    <p class="m-0 text-black-light fs-6dot75 fsLg6">
      <span class="align-text-bottom material-icons-outlined d-inline-block">
        place </span
      >{{ spotCity }}
    </p>
  </router-link>
</template>

<script>
import mainImg from "@/mixins/directives/mainImg.js";
export default {
  name: "cardWithImgAndName",
  props: ["apiType", "spotId", "backupImg", "imgUrl", "spotName", "spotCity"],
  mixins: [mainImg],
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
