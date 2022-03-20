<template>
  <div class="row" v-if="spotsList[0]">
    <router-link
      class="col col-12 col-lg-6 d-flex mb-0dot75 hoverImgBigger"
      v-for="(spot, i) in spotsList"
      :key="i"
      :to="'/spotDetail?theme='+apiType+'&id='+spot[spotIDKey]"
      target="_blank"
    >
      <div
        class="
          col-4
          position-relative
          overflow-hidden
          paddingTopLg30Percent
          paddingTop20Percent
          radiusLg12px
          radius8px
          radiusLgEndNone
          border border-gray
        "
      >
        <!-- :src="spot.Picture.PictureUrl1" -->
        <img
          class="
            h-100
            w-100
            objectFitCover
            position-absolute
            top-50
            start-50
            translate-middle
          "
          :src="spot.Picture.PictureUrl1"
          :alt="spot[spotNameKey]"
        />
      </div>
      <div
        class="
          col-8
          radiusLg12px
          radiusLgStartNone
          p-0
          ps-1
          py-lg-1
          ps-lg-2
          pe-lg-1dot5
          d-flex
          flex-column
          justify-content-between
          bgColorLgGrayLight
          borderLgGray
        "
      >
        <div>
          <p class="mb-0dot25 text-black-light fs-6dot75 fsLg6">
            {{ spot.StartTime }} - {{ spot.EndTime }}
          </p>
          <h5 class="textOverFlowHidden fs-6 fsLg4dot375">{{ spot[spotNameKey] }}</h5>
        </div>
        <div
          class="
            d-flex
            justify-content-between
            align-items-end
            position-relative
          "
        >
          <p class="m-0 text-black-light fs-6dot75 fsLg6">
            <span
              class="
                align-text-bottom
                material-icons-outlined
                d-none d-lg-inline-block
              "
            >
              place </span
            >{{ spot.City }}
          </p>
          <a
            class="link-primary stretched-link d-none d-lg-inline"
            target="_blank"
            >詳細介紹 ❯</a
          >
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "carsouel",
  components: {},
  props: ['apiType','spotsList'],
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

<style scoped lang="scss">
</style>
