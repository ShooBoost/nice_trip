<template>
  <swiper
    v-if="carsouelList"
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    class="position-relative"
  >
    <swiper-slide
      v-for="(spot, i) in carsouelList"
      :key="i"
      class="
        paddingTop53Percent
        paddingTopLg36Percent
        position-relative
        text-white
        radius24px
        overflow-hidden
      "
    >
      <router-link
        v-if="areWordsOnImg"
        :to="'/spotDetail?theme=' + apiType + '&id=' + spot[spotIDKey]"
        target="_blank"
        class="
          w-100
          h-100
          d-flex
          justify-content-center
          align-items-center
          position-absolute
          top-50
          start-50
          translate-middle
          zIndex1
        "
      >
        <h3 class="text-white fs-5 fsLg3">{{ spot.City }} | {{ spot[spotNameKey] }}</h3>
      </router-link>
      <img
        :src="spot.Picture.PictureUrl1"
        :alt="spot.PictureDescription1 || spot[spotNameKey]"
        class="
          h-100
          w-100
          position-absolute
          top-50
          start-0
          translate-middle-y
          objectFitCover
        "
    /></swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
// 雖然官方寫： import { Swiper, SwiperSlide } from 'swiper/vue';
// 但用官網的寫法 import 失敗後，主要還是要觀察 module folder 裡的 swiper/vue 結構;
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

// Import Swiper styles
// 雖然官方寫： import 'swiper/css';
// 但用官網的寫法 import 失敗後，主要還是要觀察 module folder 裡的 swiper 結構
import "swiper/swiper-bundle.css";

export default {
  name: "carsouel",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["areWordsOnImg", "apiType", "carsouelList"],
  data() {
    return {
      spotIDKey: this.apiType+'ID',
      spotNameKey: this.apiType+'Name',
    };
  },
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
