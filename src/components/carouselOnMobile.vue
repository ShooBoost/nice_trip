<template>
  <swiper
    v-if="carsouelList[0]"
    :slidesPerView="1.75"
    :spaceBetween="16"
    :breakpoints="{
      '768': {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      '992': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }"
    class="position-relative"
  >
    <swiper-slide v-for="(spot, i) in carsouelList" :key="i">
      <CardWithImgAndName
        :apiType="apiType"
        :spotId="spot[spotIDKey]"
        :imgUrl="spot.Picture.PictureUrl1"
        :backupImg="backupImg"
        :spotName="spot[spotNameKey]"
        :spotCity="spot.City"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
// import jsSHA from "jssha";
// import axios from "axios";

import CardWithImgAndName from "@/components/cardWithImgAndName.vue";

// Import Swiper Vue.js components
// 雖然官方寫： import { Swiper, SwiperSlide } from 'swiper/vue';
// 但用官網的寫法 import 失敗後，主要還是要觀察 module folder 裡的 swiper/vue 結構;
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

// Import Swiper styles
// 雖然官方寫： import 'swiper/css';
// 但用官網的寫法 import 失敗後，主要還是要觀察 module folder 裡的 swiper 結構
import "swiper/swiper-bundle.css";

export default {
  name: "CarouselOnMobile",
  components: {
    Swiper,
    SwiperSlide,
    CardWithImgAndName,
  },
  props: ['apiType','carsouelList','backupImg'],
  data() {
    return {
      spotIDKey: this.apiType+'ID',
      spotNameKey: this.apiType+'Name',
    };
  },
  mounted() {
  },
};
</script>
