<template>
  <!-- Breadcrumb - start -->
  <section class="container pt-5dot5 pt-lg-8dot75">
    <Breadcrumb
      :apiType="$route.query.theme"
      :city="spotDetail.City"
      :name="spotDetail.Name"
    />
  </section>

  <!-- Breadcrumb - end -->
  <!-- carousel - start -->
  <section class="container mb-1 mb-lg-2">
    <Carousel :carsouelList="spotDetail.Picture" />
  </section>
  <!-- carsousel - end -->

  <!-- article - start -->
  <article class="container">
    <h1 class="mb-0dot625 mb-lg-1 fs-4 fsLg1dot5">{{ spotDetail.Name }}</h1>
    <div class="mb-1dot125 mb-lg-2">
      <router-link
        v-for="(item, i) in spotDetail.classList"
        :key="i"
        :to="`/searching?theme=${this.$route.query.theme}&category=${item}`"
        class="btn btn-outline-golden rounded-pill fs-6dot875 fsLg5 me-0dot5"
      >
        # {{ item }}
      </router-link>
    </div>
    <p class="fs-5dot125 fsLg5 fw-bold mb-0dot5 mb-lg-0dot625">景點介紹：</p>
    <p class="lh-lg mb-1dot875 mb-lg-3dot75">
      {{ spotDetail.Description }}
    </p>
  </article>
  <!-- article - end -->
  <!-- spot info and map - start -->
  <section
    class="container mb-3dot75 bg-gray-light bgLgNone pb-1dot875 pb-lg-0"
  >
    <div class="row">
      <div class="col-12 col-lg-6">
        <InfoList :infoList="infoList" />
      </div>
      <div class="col-12 col-lg-6">
        <div class="row">
          <!-- map - start -->
          <div class="col-12 mb-1dot25 mb-lg-2">
            <div
              class="
                position-relative
                paddingTop53Percent
                overflow-hidden
                radius12px
              "
            >
              <div
                class="
                  w-100
                  h-100
                  position-absolute
                  top-50
                  start-0
                  translate-middle-y
                  objectFitCover
                "
              >
                <SpotMap
                  v-if="spotDetail.Position"
                  class="w-100 h-100"
                  mapId="mapBear"
                  :lat="spotDetail.Position.PositionLat"
                  :lon="spotDetail.Position.PositionLon"
                />
              </div>
            </div>
          </div>
          <!-- map - end -->
          <p class="mb-1dot25 fs-5dot125 fsLg5 fw-bold">周邊資訊：</p>
          <router-link
            :to="
              '/searching?theme=Activity&lat=' +
              spotDetail.Position.PositionLat +
              '&lon=' +
              spotDetail.Position.PositionLon
            "
            class="col-12 col-lg-4 mb-0dot5625 mb-lg-0"
          >
            <div
              class="
                text-center
                p-0dot75 p-lg-1dot5
                border border-gray
                rounded-3
              "
            >
              <img
                class="mb-0dot25"
                src="../assets/icon/nearby-event30.svg"
                alt="附近活動"
              />
              <p class="text-primary fw-bold">附近活動</p>
            </div>
          </router-link>
          <router-link
            :to="
              '/searching?theme=Restaurant&lat=' +
              spotDetail.Position.PositionLat +
              '&lon=' +
              spotDetail.Position.PositionLon
            "
            class="col-12 col-lg-4 mb-0dot5625 mb-lg-0"
          >
            <div
              class="
                text-center
                p-0dot75 p-lg-1dot5
                border border-gray
                rounded-3
              "
            >
              <img
                class="mb-0dot25"
                src="../assets/icon/nearby-food30.svg"
                alt="附近美食"
              />
              <p class="text-primary fw-bold">附近美食</p>
            </div>
          </router-link>
          <router-link
            :to="
              '/searching?theme=ScenicSpot&lat=' +
              spotDetail.Position.PositionLat +
              '&lon=' +
              spotDetail.Position.PositionLon
            "
            class="col-12 col-lg-4 mb-0dot5625 mb-lg-0"
          >
            <div
              class="
                text-center
                p-0dot75 p-lg-1dot5
                border border-gray
                rounded-3
              "
            >
              <img
                class="mb-0dot25"
                src="../assets/icon/nearby-scene30.svg"
                alt="附近景點"
              />
              <p class="text-primary fw-bold">附近景點</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- spot info and map -end -->

  <!-- popular spot - start -->
  <section class="container mb-3 mb-lg-2">
    <div
      class="
        d-flex
        justify-content-between
        align-items-center
        mb-lg-0dot75 mb-0dot5
      "
    >
      <h2 class="fs-4 fsLg1dot5 d-inline fw-normal m-0">
        還有這些不能錯過的{{ themeTC }}
      </h2>
      <router-link
        class="text-secondary m-0"
        :to="'/searching?theme=' + $route.query.theme"
        >查看更多{{ themeTC }} ❯</router-link
      >
    </div>
    <carouselOnMobile
      :apiType="$route.query.theme"
      :carsouelList="moreSpotsList"
      :backupImg="backupImg"
      class="mb-2dot25"
    />
  </section>
  <!-- popular spot - end -->
</template>
<script>
import Carousel from "@/components/carousel.vue";
import CarouselOnMobile from "@/components/carouselOnMobile.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import SpotMap from "@/components/spotMap.vue";
import InfoList from "@/components/infoList.vue";

// 自製的 mixin
import getTdxDataMixin from "@/mixins/getTdxDataMixin";

export default {
  name: "first",
  components: { Carousel, CarouselOnMobile, Breadcrumb, SpotMap, InfoList },
  mixins: [getTdxDataMixin],
  data() {
    return {
      backupImg: require("../assets/imgForNoImgurl.png"),
      map: {},
      moreSpotsList: [],
      infoList: [],
      spotIDKey: this.$route.query.theme+'ID',
      spotNameKey: this.$route.query.theme+'Name',
      spotDetail: {},
    };
  },
  computed: {
    themeTC() {
      var theme;
      switch (this.$route.query.theme) {
        case "ScenicSpot":
          theme = "景點";
          break;
        case "Restaurant":
          theme = "餐廳";
          break;
        case "Activity":
          theme = "活動";
          break;
      }
      return theme;
    },
  },
  methods: {
    getInfoList(theme) {
      switch (theme) {
        case "ScenicSpot":
          this.infoList = [
            {
              infoTitle: "開放時間：",
              infoConent: this.spotDetail.OpenTime,
            },
            {
              infoTitle: "服務電話：",
              infoConent: this.spotDetail.Phone,
            },
            {
              infoTitle: "景點地址：",
              infoConent: this.spotDetail.Address,
            },
            {
              infoTitle: "官方網站：",
              infoConent: this.spotDetail.WebsiteUrl
                ? this.spotDetail.WebsiteUrl
                : this.spotDetail.MapUrl,
            },
            {
              infoTitle: "票價資訊：",
              infoConent: this.spotDetail.TicketInfo,
            },
            {
              infoTitle: "注意事項：",
              infoConent: this.spotDetail.Remarks,
            },
          ];
          break;
        case "Restaurant":
          this.infoList = [
            {
              infoTitle: "營業時間：",
              infoConent: this.spotDetail.OpenTime,
            },
            {
              infoTitle: "聯絡電話：",
              infoConent: this.spotDetail.Phone,
            },
            {
              infoTitle: "餐廳地址：",
              infoConent: this.spotDetail.Address,
            },
            {
              infoTitle: "官方網站：",
              infoConent: this.spotDetail.WebsiteUrl
                ? this.spotDetail.WebsiteUrl
                : this.spotDetail.MapUrl,
            },
          ];
          break;
        case "Activity":
          this.infoList = [
            {
              infoTitle: "活動時間：",
              infoConent: `${this.spotDetail.StartTime}-${this.spotDetail.EndTime}${this.spotDetail.Cycle}`,
            },
            {
              infoTitle: "聯絡電話：",
              infoConent: this.spotDetail.Phone,
            },
            {
              infoTitle: "主辦單位：",
              infoConent: this.spotDetail.Organizer,
            },
            {
              infoTitle: "活動地點：",
              infoConent: this.spotDetail.Address,
            },
            {
              infoTitle: "官方網站：",
              infoConent: this.spotDetail.WebsiteUrl,
            },
            {
              infoTitle: "活動費用：",
              infoConent: this.spotDetail.Charge,
            },
            {
              infoTitle: "注意事項：",
              infoConent: this.spotDetail.Remarks,
            },
          ];
          break;
      }
      console.log("get getInfoList");
      this.infoList = this.infoList.filter((item) => {
        return item.infoConent;
      });
    },
  },
  created() {
    // console.log(this.$route.query);
    var _this = this;
    (async function () {
      let spotDetailList = await _this.getSpotsFromTdx({
        apiType: `${_this.$route.query.theme}`,
        filter: [`${_this.$route.query.theme}ID eq '${_this.$route.query.id}'`],
      });
      let spot = spotDetailList[0];
      // 整理景點料格式
      _this.spotDetail = await {
        Name: spot[_this.spotNameKey],
        OpenTime: spot.OpenTime,
        Phone: spot.Phone,
        WebsiteUrl: spot.WebsiteUrl,
        Description: spot.DescriptionDetail
          ? spot.DescriptionDetail
          : spot.Description,
        Address: spot.Address,
        Organizer: spot.Organizer,
        StartTime: spot.StartTime,
        EndTime: spot.EndTime,
        Cycle: spot.Cycle ? ";" + spot.Cycle : "",
        Charge: spot.Charge,
        Position: spot.Position,
        MapUrl: spot.MapUrl,
        TicketInfo: spot.TicketInfo,
        Remarks: spot.Remarks,
        City: spot.City,
        Picture: [
          {
            Picture: {
              PictureUrl1: spot.Picture.PictureUrl1,
              PictureDescription1: spot.Picture.PictureDescription1,
            },
          },
          {
            Picture: {
              PictureUrl1: spot.Picture.PictureUrl2,
              PictureDescription1: spot.Picture.PictureDescription2,
            },
          },
          {
            Picture: {
              PictureUrl1: spot.Picture.PictureUrl3,
              PictureDescription1: spot.Picture.PictureDescription3,
            },
          },
        ],
      };
      _this.spotDetail.Picture = await _this.spotDetail.Picture.filter(
        (item) => {
          return item.Picture.PictureUrl1;
        }
      );
      // 整理所數類別
      let classList = await [spot.Class, spot.Class1, spot.Class2, spot.Class3];
      _this.spotDetail.classList = classList.filter((item) => {
        return item;
      });

      // 取得所在城市名稱
      _this.spotDetail.City = _this.spotDetail.City
        ? _this.spotDetail.City
        : _this.spotDetail.Address.slice(0, 3);

      // 設定要被條列呈現的資訊
      await _this.getInfoList(_this.$route.query.theme);
      console.log(spot);
      console.log(_this.infoList);
    })();

  },
  watch: {
    spotDetail: function () {
      var _this = this;
      (async function () {
        _this.moreSpotsList = await _this.getSpotsFromTdx({
          apiType: _this.$route.query.theme,
          select: ["Picture", _this.spotNameKey, "Address", "City", _this.spotIDKey],
          orderby: ["SrcUpdateTime desc"],
          skip: ["1"],
          top: ["10"],
          spatialFilter: [
            `nearby(${_this.spotDetail.Position.PositionLat},${_this.spotDetail.Position.PositionLon},10000)`,
          ],
        });
        _this.moreSpotsList.forEach(async function (item) {
          item.City = item.City ? item.City : item.Address.slice(0, 3);
        });
        console.log("_this.moreSpotsList", _this.moreSpotsList);
      })();
    },
  },
};
</script>
<style lang="scss"></style>
