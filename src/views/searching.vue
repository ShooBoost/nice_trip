<template class="">
  <!-- vue loading overlay - start -->
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="fullPage"
  />
  <!-- vue loading overlay - end -->

  <section
    id="searchingForm"
    class="
      container
      pt-2
      sticky-top
      bg-white
      mb-2 mb-md-3dot75
      transitionSmooth
    "
  >
    <!-- Breadcrumb - start -->
    <Breadcrumb
      class="mb-1 mb-lg-2dot5"
      :apiType="currentTheme"
      :city="currentCity"
      :category="this.$route.query.category"
    />
    <!-- Breadcrumb - end -->
    <!-- searching bar - start -->
    <div class="row">
      <!-- 縣市 - start -->
      <div class="col-12 col-lg-3">
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
            {{ currentCity.CityName || "選擇縣市" }}
          </button>
          <ul
            class="
              dropdown-menu
              w-100
              maxHeight50vh
              overflow-scroll
              mt-0dot5
              p-0
              cursorPointer
            "
            aria-labelledby="dropdownMenuButton1"
          >
            <li v-if="this.$route.query.city">
              <a
                @click="renewRouterQuery({ city: {} })"
                class="dropdown-item py-0dot75 px-2"
                >選擇縣市</a
              >
              <hr class="dropdown-divider m-0" />
            </li>
            <li v-for="(item, i) in cityList" :key="i">
              <hr v-if="i !== 0" class="dropdown-divider m-0" />
              <a
                @click="
                  renewRouterQuery({
                    city: item,
                  })
                "
                class="dropdown-item py-0dot75 px-2"
                >{{ item.CityName }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- 縣市 - end -->
      <!-- 類別 - start -->
      <div class="col-12 col-lg-3">
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
            {{ this.$route.query.category || "選擇類別" }}
          </button>
          <ul
            class="
              dropdown-menu
              w-100
              maxHeight50vh
              overflow-scroll
              mt-0dot5
              p-0
              cursorPointer
            "
            aria-labelledby="dropdownMenuButton1"
          >
            <li v-if="this.$route.query.category">
              <a
                @click="renewRouterQuery({ category: '' })"
                class="dropdown-item py-0dot75 px-2"
                >選擇類別</a
              >
              <hr class="dropdown-divider m-0" />
            </li>
            <li v-for="(item, i) in allCategoriesOfCurrentTheme" :key="i">
              <hr v-if="i !== 0" class="dropdown-divider m-0" />
              <a
                @click="renewRouterQuery({ category: item.name })"
                class="dropdown-item py-0dot75 px-2"
                >{{ item.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- 類別 - end -->
      <!-- keywords - start -->
      <div class="col-12 col-lg-4">
        <input
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
          v-model="keywords"
          @keyup.enter="renewRouterQuery({ keywords: keywords });$event.target.blur()"
        />
      </div>
      <!-- keywords - end -->
      <div class="col-12 col-lg-2 d-none d-lg-block">
        <button
          @click="replaceRouterByNewCityAndCategory({})"
          class="
            btn btn-primary
            w-100
            btn-lg
            text-white
            fs-6
            d-flex
            justify-content-around
          "
          type="submit"
        >
          <span class="material-icons align-text-top"> search </span>
          <p class="letterSpacingLg">搜尋</p>
        </button>
      </div>
    </div>
    <!-- searching bar - end -->
  </section>

  <!-- allCategoriesOfCurrentTheme - start -->
  <section v-if="!showResults" class="container pb-5 pb-md-0dot75">
    <h2 class="fs-4 fsLg1dot5 fw-normal m-0 mb-0dot5 mb-lg-0dot75">熱門分類</h2>
    <div class="row">
      <div
        class="col-6 col-lg-3 mb-0dot75"
        v-for="(item, i) in allCategoriesOfCurrentTheme"
        :key="i"
      >
        <div
          @click="replaceRouterByNewCityAndCategory({ category: item.name })"
          class="
            w-100
            paddingTop53Percent
            paddingTopLg36Percent
            position-relative
            text-white
            radius24px
            overflow-hidden
            cursorPointer
          "
        >
          <!-- 如果圖片網址無效，要用備用圖片 -->
          <img
            :src="backupImg"
            v-mainImg="item.imgUrl"
            :alt="item.name"
            class="
              h-100
              w-100
              position-absolute
              top-50
              start-0
              translate-middle-y
              objectFitCover
              brightnessOdot6
            "
          />
          <h6
            class="
              text-white
              position-absolute
              top-50
              start-50
              translate-middle
              objectFitCover
            "
          >
            {{ item.name }}
          </h6>
        </div>
      </div>
    </div>
  </section>
  <!-- allCategoriesOfCurrentTheme - end -->
  <!-- searching result - start -->
  <section v-else class="container h-100 mb-0dot5 mb-lg-0dot75">
    <h2
      class="fs-4 fsLg1dot5 fw-normal m-0"
      v-if="resultSpotsList.length === 0"
    >
      Oops 暫無適合的搜尋結果
    </h2>
    <h2 class="fs-4 fsLg1dot5 fw-normal mb-1" v-else>搜尋結果</h2>
    <div class="row pb-4">
      <div
        class="col-6 col-lg-3 mb-1dot25 mb-md-2dot25"
        v-for="(item, i) in resultSpotsList.slice(
          0,
          amountsOfSpotsDurningEachResultShowingStage * stageOfResultShowing
        )"
        :key="i"
      >
        <CardWithImgAndName
          class="w-100"
          :apiType="$route.query.theme"
          :spotId="item.RestaurantID || item.ActivityID || item.ScenicSpotID"
          :imgUrl="item.Picture.PictureUrl1 || backupImg"
          :backupImg="backupImg"
          :spotName="
            item.RestaurantName || item.ActivityName || item.ScenicSpotName
          "
          :spotCity="
            item.City
              ? item.City
              : item.Location
              ? item.Location.slice(0, 3)
              : item.Address
              ? item.Address.slice(0, 3)
              : ''
          "
        />
      </div>
    </div>
  </section>
  <!-- searching result - end -->
</template>
<script>
// 自製的 mixin
import getTdxDataMixin from "@/mixins/getTdxDataMixin";
import mainImg from "@/mixins/directives/mainImg.js";

// components
import CardWithImgAndName from "@/components/cardWithImgAndName.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

// vue loading overlay
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "first",
  components: { CardWithImgAndName, Breadcrumb, Loading },
  mixins: [getTdxDataMixin, mainImg],
  props: ["apiType", "searchingParameters"],
  directives: {},
  data() {
    return {
      currentTheme: this.$route.query.theme,
      nameKey: this.$route.query.theme + "Name",
      currentCity: {},

      // vue loading overlay
      isLoading: false,
      fullPage: true,

      // searching bar
      cityList: [],
      keywords: this.$route.query.keywords || "",

      // spot data from TDX
      apiParameters: {},
      allSpotsOfCurrentTheme: [],
      allCategoriesOfCurrentTheme: [],
      resultSpotsList: [],
      showResults: false,
      amountsOfSpotsDurningEachResultShowingStage: 8,
      stageOfResultShowing: 1,

      // 如果圖片網址無效要用的備用圖片
      backupImg: require("../assets/imgForNoImgurl.png"),
    };
  },
  watch: {
    $route(from, to) {
      if (from.query.theme === to.query.theme) {
        this.currentTheme = this.$route.query.theme;
        this.nameKey = this.$route.query.theme + "Name";
        this.renewSearchingResults();
      } else {
        this.$router.go();
      }
    },
  },
  methods: {
    async getAllSpotsOfCurrentTheme() {
      var _this = this;
      return await _this.getSpotsFromTdx({
        apiType: _this.currentTheme,
        orderby: ["SrcUpdateTime desc"],
      });
    },

    async organizeCategoriesOfCurrentTheme() {
      this.isLoading = true;
      var _this = this;
      _this.allSpotsOfCurrentTheme = await _this.getAllSpotsOfCurrentTheme();
      (this.resultSpotsList = _this.allSpotsOfCurrentTheme),
        await _this.allSpotsOfCurrentTheme.forEach(function (
          spotOfCurrentTheme
        ) {
          // 整理該景點的類別
          let categoriesOfSpot = [
            spotOfCurrentTheme.Class,
            spotOfCurrentTheme.Class1,
            spotOfCurrentTheme.Class2,
            spotOfCurrentTheme.Class3,
          ];
          categoriesOfSpot.forEach(function (category) {
            if (!category) {
              return;
            }
            let categoryAlreadySavedInCurrentThemeCategories =
              _this.allCategoriesOfCurrentTheme.find(
                (categoryOfCurrentTheme) => {
                  return categoryOfCurrentTheme.name === category;
                }
              );
            if (categoryAlreadySavedInCurrentThemeCategories) {
              categoryAlreadySavedInCurrentThemeCategories.spots.push(
                spotOfCurrentTheme
              );
            } else {
              _this.allCategoriesOfCurrentTheme.push({
                name: category,
                spots: [spotOfCurrentTheme],
              });
            }
          });
        });

      // 讓每個類別都有代表的一張照片
      _this.allCategoriesOfCurrentTheme.forEach(function (
        categoryOfCurrentTheme
      ) {
        let spotWithImg = categoryOfCurrentTheme.spots.find((spot) => {
          return spot.Picture.PictureUrl1;
        });
        categoryOfCurrentTheme.imgUrl = spotWithImg
          ? spotWithImg.Picture.PictureUrl1
          : _this.backupImg;
      });
      _this.isLoading = false;
    },

    renewRouterQuery({
      query = JSON.parse(JSON.stringify(this.$route.query)),
      city = query.city,
      category = query.category,
      keywords = query.keywords,
    }) {
      if (city && Object.keys(city).length > 0) {
        query.city = city.City || city;
      } else {
        delete query.city;
      }

      if (category) {
        query.category = category;
      } else {
        delete query.category;
      }

      if (keywords) {
        query.keywords = keywords;
      } else {
        delete query.keywords;
      }

      this.$router.replace({ query });
    },
    renewSearchingResults(
      query = JSON.parse(JSON.stringify(this.$route.query)),
      queryCity = query.city,
      queryCategory = query.category,
      keywords = query.keywords
    ) {
      this.currentCity = {};
      if (queryCity) {
        let city = this.cityList.find((city) => {
          return city.City === queryCity;
        });
        this.currentCity = city;
      }

      this.resultSpotsList = this.allSpotsOfCurrentTheme.filter((spot) => {
        let sameCity = true;
        let sameCategory = true;
        let includeKeywords = true;
        if (Object.keys(this.currentCity).length) {
          sameCity = spot.City
            ? spot.City === this.currentCity.CityName
            : false;
        }
        if (queryCategory) {
          switch (this.currentTheme) {
            case "ScenicSpot":
              sameCategory =
                spot.Class1 === queryCategory ||
                spot.Class2 === queryCategory ||
                spot.Class3 === queryCategory;
              break;
            case "Restaurant":
              sameCategory = spot.Class === queryCategory;
              break;
            case "Activity":
              sameCategory =
                spot.Class1 === queryCategory || spot.Class2 === queryCategory;
              break;
          }
        }
        if (keywords) {
          let reg = new RegExp(keywords);
          includeKeywords = reg.test(spot[this.nameKey]) || reg.test(spot.City);
        }
        return sameCity && sameCategory && includeKeywords;
      });

      this.showResults = true;
    },

    replaceRouterByNewCityAndCategory({
      city = this.$route.query.city,
      category = this.$route.query.category,
    }) {
      let urlQuery = this.setCityParameterForTdxApi({ item: city });

      urlQuery = this.setClassParameterForTdxApi({
        category: category,
        query: urlQuery,
      });
      this.$router.replace({ query: urlQuery });
    },

    // 使用者選擇的城市
    setCityParameterForTdxApi({
      item = "",
      query = JSON.parse(JSON.stringify(this.$route.query)),
    }) {
      if (item) {
        let city = this.cityList.find((city) => {
          return city.City === item || city.CityName === item;
        });
        console.log("city", city, "item", item, "this.cityList", this.cityList);
        this.currentCity = city;
        this.apiParameters.city = item.City ? item.City : item;
        query.city = this.apiParameters.city;
      } else {
        this.apiParameters.city = "";
        delete query.city;
      }
      return query;
    },

    // 使用者選擇的類別
    setClassParameterForTdxApi({
      category = "",
      query = JSON.parse(JSON.stringify(this.$route.query)),
    }) {
      if (category) {
        query.category = category;
        // 因為不同主題的 api url 格式不同
        switch (this.currentTheme) {
          case "ScenicSpot":
            this.apiParameters["filter"] = [
              `Class1%20eq%20'${category}'%20or%20Class2%20eq%20'${category}'%20or%20Class3%20eq%20'${category}'`,
            ];
            break;
          case "Restaurant":
            this.apiParameters["filter"] = [`Class%20eq%20'${category}'`];
            break;
          case "Activity":
            this.apiParameters["filter"] = [
              `Class1%20eq%20'${category}'%20or%20Class2%20eq%20'${category}'`,
            ];
            break;
        }
      } else {
        this.apiParameters["filter"] = [];
        delete query.category;
      }
      return query;
    },

    // 當使用者按下搜尋鍵後，取得搜尋結果
    async getSearchingResults() {
      // this.isLoading = true;
      var _this = this;
      this.stageOfResultShowing = 1;
      this.apiParameters["apiType"] = this.currentTheme;
      this.resultSpotsList = await _this.getSpotsFromTdx(_this.apiParameters);
      this.showResults = true;
      this.filterSpotsByKeyword({});
      console.log("this.resultSpotsList", this.resultSpotsList);
    },
    filterSpotsByKeyword({ keywords = this.keywords }) {
      console.log("filterSpotsByKeyword");
      // if(!keywords)
      var _this = this;
      var reg = new RegExp(keywords);
      console.log(reg);
      this.resultSpotsList = this.resultSpotsList.filter(function (spot) {
        return reg.test(spot[_this.nameKey]);
      });
    },
  },

  mounted() {
    let searchingForm = document.getElementById("searchingForm");
    let latestScrollY = window.scrollY + 10;
    let _this = this;
    window.addEventListener("scroll", function () {
      if (
        _this.showResults &&
        window.scrollY + window.innerHeight >=
          document.querySelector("body").clientHeight - 10
      ) {
        _this.stageOfResultShowing += 1;
      }

      if (window.scrollY <= latestScrollY) {
        searchingForm.style.top = "0px";
        // searchingForm.classList.add('class', 'visible')
        // searchingForm.classList.remove('class', 'topNegative300')
      } else {
        searchingForm.style.top = "-300px";
        // searchingForm.classList.add('class', 'topNegative300')
        // searchingForm.classList.remove('class', 'visible')

        // searchingForm.setAttribute('class', 'invisible')
        // searchingForm.classList.toggle('invisible')
      }
      latestScrollY = window.scrollY;
    });
  },
  async created() {
    var _this = this;
    // 取得台灣所有的縣市名稱
    _this.cityList = await _this.getCityList();

    // 如果進入搜尋頁面時，已有指定的搜尋參數
    // 例如當使用者從 spotDetail 的 附近美食btn 點進來時
    // 依據搜尋參數（例如美食與座標）取得搜尋結果
    await _this.organizeCategoriesOfCurrentTheme();

    if (this.$route.query.lat) {
      this.apiParameters["spatialFilter"] = [
        `nearby(${this.$route.query.lat},${this.$route.query.lon},1000)`,
      ];
      this.getSearchingResults();
      this.apiParameters = {};
    } else if (
      this.$route.query.city ||
      this.$route.query.category ||
      this.$route.query.keywords
    ) {
      console.log(this.$route.query);
      // this.replaceRouterByNewCityAndCategory({ city: this.$route.query.city });
      // this.getSearchingResults();
      this.renewSearchingResults();
    }

    // else if (this.$route.query.keywords) {
    //   this.keywords = this.$route.query.keywords;
    //   this.getSearchingResults();
    // }

    // if (this.$route.query.keywords) {
    //   this.filterSpotsByKeyword();
    // }
  },
};
</script>
<style lang="scss"></style>
