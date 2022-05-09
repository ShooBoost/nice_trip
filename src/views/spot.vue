<template>
  <!-- Breadcrumb - start -->
  <section class="container pt-2 pt-lg-1 mb-1">
    <Breadcrumb
      :apiType="$route.query.theme"
      :city="spotCity"
      :name="spot.Name"
    />
  </section>
  <!-- Breadcrumb - end -->

  <!-- carousel - start -->
  <section
    v-if="spot.Picture && Object.keys(spot.Picture).length > 0"
    class="container mb-1 mb-lg-2"
  >
    <Carousel :carsouelList="spot.Picture" />
  </section>
  <!-- carsousel - end -->

  <!-- description article - start -->
  <article class="container">
    <h1 class="mb-0dot625 mb-lg-1 fs-4 fsLg1dot5">{{ spot.Name }}</h1>
    <div class="mb-1dot125 mb-lg-2">
      <router-link
        v-for="(item, i) in spot.classList"
        :key="i"
        :to="`/searching?theme=${this.$route.query.theme}&category=${item}`"
        class="btn btn-outline-golden rounded-pill fs-6dot875 fsLg5 me-0dot5"
      >
        # {{ item }}
      </router-link>
    </div>
    <p class="fs-5dot125 fsLg5 fw-bold mb-0dot5 mb-lg-0dot625">景點介紹：</p>
    <p class="lh-lg mb-1dot875 mb-lg-3dot75">
      {{ spot.Description }}
    </p>
  </article>
  <!-- description article - end -->

  <!-- spot info and map - start -->
  <section
    class="container mb-3dot75 bg-gray-light bgLgNone pb-1dot875 pb-lg-0"
  >
    <div class="row">
      <div v-if="spotSpecifications.length > 0" class="col-12 col-lg-6">
        <SpotSpecifications :spotSpecifications="spotSpecifications" />
      </div>
      <!-- map 與 周邊資訊 - start -->
      <div class="col-12 col-lg-6" v-if="spot.Position">
        <div class="row">
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
                  v-if="spot.Position"
                  class="w-100 h-100"
                  mapId="mapBear"
                  :lat="spot.Position.PositionLat"
                  :lon="spot.Position.PositionLon"
                />
              </div>
            </div>
          </div>

          <p class="mb-1dot25 fs-5dot125 fsLg5 fw-bold">周邊資訊：</p>
          <router-link
            :to="
              '/searching?theme=Activity&lat=' +
              spot.Position.PositionLat +
              '&lon=' +
              spot.Position.PositionLon
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
              spot.Position.PositionLat +
              '&lon=' +
              spot.Position.PositionLon
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
              spot.Position.PositionLat +
              '&lon=' +
              spot.Position.PositionLon
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
      <!-- map 與 周邊資訊 - end -->
    </div>
  </section>
  <!-- spot info and map -end -->

  <!-- popular spot - start -->
  <section v-if="otherSpots.length > 0" class="container mb-3 mb-lg-2">
    <div
      class="
        d-flex
        justify-content-between
        align-items-center
        mb-lg-0dot75 mb-0dot5
      "
    >
      <h2 class="fs-4 fsLg1dot5 d-inline fw-normal m-0">
        還有這些不能錯過的{{ themeInChinese }}
      </h2>
      <router-link
        class="text-secondary m-0"
        :to="'/searching?theme=' + $route.query.theme"
        >查看更多{{ themeInChinese }} ❯</router-link
      >
    </div>
    <carouselOnMobile
      :apiType="$route.query.theme"
      :carsouelList="otherSpots"
      :backupImg="backupImg"
      class="mb-2dot25"
    />
  </section>
  <!-- popular spot - end -->
</template>
<script>
import Breadcrumb from "@/components/breadcrumb.vue";
import Carousel from "@/components/carousel.vue";
import SpotMap from "@/components/spotMap.vue";
import SpotSpecifications from "@/components/spotSpecifications.vue";
import CarouselOnMobile from "@/components/carouselOnMobile.vue";

// 自製的 mixin
import getTdxDataMixin from "@/mixins/getTdxDataMixin";

export default {
  components: {
    Carousel,
    CarouselOnMobile,
    Breadcrumb,
    SpotMap,
    SpotSpecifications,
  },
  mixins: [getTdxDataMixin],
  data() {
    return {
      allCitiesInTaiwan: [],
      otherSpots: [],
      map: {},
      IDKey: this.$route.query.theme + "ID",
      nameKey: this.$route.query.theme + "Name",
      spot: {},
      spotCity: {},
      spotSpecifications: [],
      backupImg: require("../assets/imgForNoImgurl.png"),
    };
  },
  computed: {
    themeInChinese() {
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
    getspotSpecifications(theme=this.$route.query.theme) {
      switch (theme) {
        case "ScenicSpot":
          this.spotSpecifications = [
            {
              infoTitle: "開放時間：",
              infoConent: this.spot.OpenTime,
            },
            {
              infoTitle: "服務電話：",
              infoConent: this.spot.Phone,
            },
            {
              infoTitle: "景點地址：",
              infoConent: this.spot.Address,
            },
            {
              infoTitle: "官方網站：",
              infoConent: this.spot.WebsiteUrl
                ? this.spot.WebsiteUrl
                : this.spot.MapUrl,
            },
            {
              infoTitle: "票價資訊：",
              infoConent: this.spot.TicketInfo,
            },
            {
              infoTitle: "注意事項：",
              infoConent: this.spot.Remarks,
            },
          ];
          break;
        case "Restaurant":
          this.spotSpecifications = [
            {
              infoTitle: "營業時間：",
              infoConent: this.spot.OpenTime,
            },
            {
              infoTitle: "聯絡電話：",
              infoConent: this.spot.Phone,
            },
            {
              infoTitle: "餐廳地址：",
              infoConent: this.spot.Address,
            },
            {
              infoTitle: "官方網站：",
              infoConent: this.spot.WebsiteUrl
                ? this.spot.WebsiteUrl
                : this.spot.MapUrl,
            },
          ];
          break;
        case "Activity":
          this.spotSpecifications = [
            {
              infoTitle: "活動時間：",
              infoConent: `${this.spot.StartTime}-${this.spot.EndTime}${this.spot.Cycle}`,
            },
            {
              infoTitle: "聯絡電話：",
              infoConent: this.spot.Phone,
            },
            {
              infoTitle: "主辦單位：",
              infoConent: this.spot.Organizer,
            },
            {
              infoTitle: "活動地點：",
              infoConent: this.spot.Address,
            },
            {
              infoTitle: "官方網站：",
              infoConent: this.spot.WebsiteUrl,
            },
            {
              infoTitle: "活動費用：",
              infoConent: this.spot.Charge,
            },
            {
              infoTitle: "注意事項：",
              infoConent: this.spot.Remarks,
            },
          ];
          break;
      }
      // console.log("get getspotSpecifications");
      this.spotSpecifications = this.spotSpecifications.filter((item) => {
        return item.infoConent;
      });
    },
  },
  created() {
    let _this = this;
    (async function () {
      let spotList = await _this.getSpotsFromTdx({
        apiType: `${_this.$route.query.theme}`,
        filter: [`${_this.$route.query.theme}ID eq '${_this.$route.query.id}'`],
      });
      let spot = spotList[0];
      // 整理景點料格式
      _this.spot = await {
        ...spot,
        Name: spot[_this.nameKey],
        Description: spot.DescriptionDetail
          ? spot.DescriptionDetail
          : spot.Description,
        Cycle: spot.Cycle ? ";" + spot.Cycle : "",
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
      _this.spot.Picture = await _this.spot.Picture.filter((item) => {
        return item.Picture.PictureUrl1;
      });
      // 整理所數類別
      let classList = await [spot.Class, spot.Class1, spot.Class2, spot.Class3];
      _this.spot.classList = classList.filter((item) => {
        return item;
      });

      // 取得所在城市名稱
      _this.spot.City = _this.spot.City
        ? _this.spot.City
        : _this.spot.Address.slice(0, 3);

      _this.allCitiesInTaiwan = await _this.getAllCitiesInTaiwan();
      if (_this.spot.City) {
        let city = _this.allCitiesInTaiwan.find((city) => {
          return city.CityName === _this.spot.City;
        });
        _this.spotCity = city;
      }

      // 設定要被條列呈現的資訊
      _this.getspotSpecifications();

      _this.otherSpots = await _this.getSpotsFromTdx({
        apiType: _this.$route.query.theme,
        select: ["Picture", _this.nameKey, "Address", "City", _this.IDKey],
        orderby: ["SrcUpdateTime desc"],
        skip: ["1"],
        top: ["10"],
        spatialFilter: [
          `nearby(${_this.spot.Position.PositionLat},${_this.spot.Position.PositionLon},10000)`,
        ],
      });
      for (spot of await _this.otherSpots) {
        spot.City = spot.City ? spot.City : spot.Address.slice(0, 3);
        // console.log('spot of others', spot)
      }
    })();
  },
  watch: {},
};
</script>
