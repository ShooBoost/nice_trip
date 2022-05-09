<template>
  <!-- banner - start -->
  <section class="container mb-3 mb-lg-4 pt-3 pt-md-5">
    <div class="row">
      <!-- banner title - start -->
      <div class="col-12 col-lg-6 offset-lg-1 mb-2 mb-lg-0">
        <div>
          <h1 class="mb-1 mb-md-1 fw-normal lh-sm">
            探索<ins class="textUnderline">台灣之美</ins><br />
            讓我們更親近這片土地
          </h1>
          <div class="text-black-light">
            <span class="material-icons text-yellow fs-6 fsLg5"> location_on </span>

            <h2 class="d-inline me-0dot5 fs-6 fsLg5">台灣旅遊景點導覽</h2>
            <h2 class="d-inline fs-6 fsLg5">Taiwan Travel Guide</h2>
          </div>
        </div>
      </div>
      <!-- banner title - end -->
      <!-- banner searching area - start -->
      <div class="col-12 col-lg-4">
        <!-- 搜索類型 - start -->
        <div class="dropdown mb-0dot5">
          <button
            class="
              btn btn-lg btn-outline-primary
              border-gray
              dropdown-toggle
              w-100
              fw-bold
              d-flex
              justify-content-between
              align-items-center
              px-2
              py-0dot75
              fs-6
            "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ themeForSearchTC }}
          </button>
          <ul
            class="dropdown-menu w-100 mt-0dot5 p-0"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a
                @click="setThemeForSearch('探索景點')"
                class="dropdown-item py-0dot75 px-2"
                
                >探索景點</a
              >
            </li>
            <li><hr class="dropdown-divider m-0" /></li>
            <li>
              <a
                @click="setThemeForSearch('節慶活動')"
                class="dropdown-item py-0dot75 px-2"
                
                >節慶活動</a
              >
            </li>
            <li><hr class="dropdown-divider m-0" /></li>
            <li>
              <a
                @click="setThemeForSearch('品嚐美食')"
                class="dropdown-item py-0dot75 px-2"
                
                >品嚐美食</a
              >
            </li>
          </ul>
        </div>
        <!-- 搜索類型 - end -->
        <!-- searching input - start -->
        <input
          v-model="keywordsForSearch"
          class="
            form-control form-control-lg
            bg-gray-light
            px-2
            py-0dot75
            mb-0dot5
            focusPrimary
            fs-6
          "
          type="text"
          placeholder="你想去哪裡？請輸入關鍵字"
          aria-label="搜尋欄，請填入關鍵字進行搜尋"
        />
        <!-- searching input - end -->
        <!-- searching button - start -->
        <router-link
          class="btn btn-primary w-100 btn-lg text-white letterSpacingLg fs-6"
          :to="
            keywordsForSearch.length > 0
              ? `/searching?theme=${themeForSearch}&keywords=${keywordsForSearch}`
              : `/searching?theme=${themeForSearch}`
          "
        >
          <span class="material-icons align-text-top"> search </span>
          搜尋
        </router-link>
        <!-- searching button - end -->
      </div>
      <!-- banner searching area - end -->
    </div>
  </section>
  <!-- banner - end -->
  <!-- carousel - start -->
  <section class="container">
    <Carousel
      areWordsOnImg="yes"
      apiType="ScenicSpot"
      :carsouelList="carsouelList"
      class="mb-3 mb-md-2"
    />
  </section>
  <!-- carsousel - end -->
  <!-- recent activities - start -->
  <section class="container">
    <div
      class="
        d-flex
        justify-content-between
        align-items-center
        mb-lg-0dot75 mb-0dot5
      "
    >
      <h2 class="fs-4 fsLg1dot5 d-inline fw-normal m-0">近期活動</h2>
      <router-link class="link-secondary m-0" to="/searching?theme=Activity">查看更多活動 ❯</router-link>
    </div>
    <Card
      apiType="Activity"
      :spotsList="moreActivitiesList"
      class="mb-2dot25"
    />
  </section>
  <!-- recent activities - end -->
  <!-- popular spot - start -->
  <section class="container mb-1dot5 mb-lg-2">
    <div
      class="
        d-flex
        justify-content-between
        align-items-center
        mb-lg-0dot75 mb-0dot5
      "
    >
      <h2 class="fs-4 fsLg1dot5 d-inline fw-normal m-0">熱門打卡景點</h2>
      <router-link class="link-secondary m-0" to="/searching?theme=ScenicSpot">查看更多景點 ❯</router-link>
    </div>
    <carouselOnMobile
      apiType="ScenicSpot"
      :carsouelList="moreScenicSpotsList"
      class="mb-2dot25"
    />
  </section>
  <!-- popular spot - end -->
  <!-- resturant - start -->
  <section class="container mb-4dot5">
    <div
      class="
        d-flex
        justify-content-between
        align-items-center
        mb-lg-0dot75 mb-0dot5
      "
    >
      <h2 class="fs-4 fsLg1dot5 d-inline fw-normal m-0">一再回訪美食</h2>
      <router-link class="link-secondary m-0" to="/searching?theme=Restaurant">查看更多美食 ❯</router-link>
    </div>
    <carouselOnMobile
      apiType="Restaurant"
      :carsouelList="moreRestaurantsList"
      class="mb-2dot25"
    />
  </section>
  <!-- resturant - end -->
</template>
<script>
import Carousel from "@/components/carousel.vue";
import Card from "@/components/card.vue";
import CarouselOnMobile from "@/components/carouselOnMobile.vue";

// 自製的 mixin
import getTdxDataMixin from "@/mixins/getTdxDataMixin";

export default {
  name: "first",
  components: { Carousel, Card, CarouselOnMobile },
  mixins: [getTdxDataMixin],
  data() {
    return {
      carsouelList: [],
      moreActivitiesList: [],
      moreScenicSpotsList: [],
      moreRestaurantsList: [],
      themeForSearch: "ScenicSpot",
      themeForSearchTC: "探索景點",
      keywordsForSearch: "",
    };
  },
  created() {
    var _this = this;
    // 取得餐廳資料
    (async function () {
      _this.moreRestaurantsList = await _this.getSpotsFromTdx({
        apiType: "Restaurant",
        orderby: ["SrcUpdateTime desc"],
        top: ["10"],
        skip: ["16"],
      });
      // console.log("_this.moreRestaurantsList", await _this.moreRestaurantsList);
    })();
    
    // 取得景點資料
    (async function () {
      let scenicSpotsList = await _this.getSpotsFromTdx({
        apiType: "ScenicSpot",
        orderby: ["SrcUpdateTime desc"],
        top: ["20"],
        skip: ["50"],
      });
      await scenicSpotsList.forEach(async function (item) {
        if (item.Picture.PictureUrl1) {
          // 取得所在城市名稱
          item.City = item.Address.slice(0, 3);

          if (_this.carsouelList.length < 6) {
            _this.carsouelList.push(item);
          } else {
            _this.moreScenicSpotsList.push(item);
          }
        }
      });
    })();
    // 取得活動資料
    (async function () {
      let activitiesList = await _this.getSpotsFromTdx({
        apiType: "Activity",
        orderby: ["SrcUpdateTime desc"],
        top: ["30"],
      });
      await activitiesList.forEach(function (item) {
        if (item.Picture.PictureUrl1 && _this.moreActivitiesList.length < 4) {
          item.EndTime = item.EndTime.slice(0, 10);
          item.StartTime = item.StartTime.slice(0, 10);
          _this.moreActivitiesList.push(item);
        }
      });
      // console.log(_this.moreActivitiesList);
    })();
  },
  methods: {
    setThemeForSearch(themeTC) {
      this.themeForSearchTC = themeTC;
      switch (themeTC) {
        case "探索景點":
          this.themeForSearch = "ScenicSpot";
          break;
        case "節慶活動":
          this.themeForSearch = "Activity";
          break;
        case "品嚐美食":
          this.themeForSearch = "Restaurant";
          break;
      }
    },
  },
};
</script>
