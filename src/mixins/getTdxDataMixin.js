import qs from "qs";
import axios from "axios";

export default {
  data() {
    return {
      tdxData: [],
    };
  },
  methods: {
    // apiType 為 'ScenicSpot' 或 'Restaurant' 或 'Activity'
    getSpotApiUrl({
      apiType = "ScenicSpot",
      city = null,
      select = [],
      filter = [],
      orderby = [],
      top = [],
      skip = [],
      spatialFilter = [],
    }) {
      let customParameters = [
        { type: "select", valueList: select },
        { type: "filter", valueList: filter },
        { type: "orderby", valueList: orderby },
        { type: "top", valueList: top },
        { type: "skip", valueList: skip },
        { type: "spatialFilter", valueList: spatialFilter },
      ];
      let apiParameterString = "";
      let apiParameterList = [];
      // console.log("customParameters", customParameters)

      customParameters.forEach(function (item) {
        if (item.valueList.length !== 0) {
          let itemValue = "";
          itemValue += `$${item.type}=`;
          itemValue += item.valueList.length === 1 ? item.valueList[0] : item.valueList.join("%2C%20");
          apiParameterList.push(itemValue);
        }
      });
      if (city) {
        apiType += `/${city}`;
      }
      if (apiParameterList.length !== 0) {
        apiParameterString = apiParameterList.join("&");
        apiParameterString += "&";
      }

      let apiUrl = `https://ptx.transportdata.tw/MOTC/v2/Tourism/${apiType}?${apiParameterString}$format=JSON`;
      // console.log("apiUrl", apiUrl)
      return apiUrl;
    },
    async getAuthorizationHeader() {
      const parameter = {
        grant_type: "client_credentials",
        client_id: "shooboost-0659506a-9440-4f49",
        client_secret: "f075a3b1-3567-47d5-9926-e413ba6d3d42",
      };
      let auth_url = `https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token`;
      try {
        let res = await axios({
          method: "POST",
          url: auth_url,
          data: qs.stringify(parameter),
          headers: { "content-type": "application/x-www-form-urlencoded" },
        });
        let accesstoken = res.data;
        return {
          authorization: `Bearer ${accesstoken.access_token}`,
        }
      } catch (err) {
        return err;
      }
    },
    // getAuthorizationHeader() {
    //   //  填入自己 ID、KEY 開始
    //   let AppID = "6881a6e19c3240089c9d8cc87f52f52e";
    //   let AppKey = "z274IyT03M2HixJY5cAbZn-8ccs";
    //   //  填入自己 ID、KEY 結束

    //   let GMTString = new Date().toGMTString();
    //   let ShaObj = new jsSHA("SHA-1", "TEXT");
    //   ShaObj.setHMACKey(AppKey, "TEXT");
    //   ShaObj.update("x-date: " + GMTString);
    //   let HMAC = ShaObj.getHMAC("B64");
    //   let Authorization = `hmac username="${AppID}",algorithm="hmac-sha1",headers="x-date",signature="${HMAC}"`;
    //   return { Authorization: Authorization, "X-Date": GMTString };
    // },
    async getSpotsFromTdx(apiTypeAndParameters) {
      var _this = this;
      var apiUrl = _this.getSpotApiUrl(apiTypeAndParameters);

      try {
        let res = await axios.get(
          // $select     Picture, Name, Address, ZipCode
          // $orderby    SrcUpdateTime desc; 排序按照資料更新日期最新的開始
          // $top        12; 取 12 筆資料
          // $skip	     10; 跳過前 10 筆資料
          // 取得觀光景點資料
          // "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$select=Picture%2C%20Name%2C%20Address%2C%20ZipCode&$orderby=SrcUpdateTime%20desc&$top=12&$skip=10&$format=JSON",
          `${apiUrl}`,
          {
            headers: await this.getAuthorizationHeader(),
          }
        );
        // console.log(apiUrl, res.data);

        return await res.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getAllCitiesInTaiwan() {
      var apiUrl =
        "https://tdx.transportdata.tw/api/basic/v2/Basic/City?%24format=JSON";

      try {
        let res = await axios.get(apiUrl, {
          headers: await this.getAuthorizationHeader(),
        });
        // console.log(" getAllCitiesInTaiwan", apiUrl, res.data);
        return await res.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getTdxGeoData({
      apiType = "GeoCode",
      address = "",
      locX = "",
      locY = "",
    }) {
      // apiType 為 GeoCode or GeoLocating
      let apiUrl = "";
      switch (apiType) {
        case "GeoCode":
          apiUrl = `https://gist.motc.gov.tw/gist_api/V3/Map/GeoCode/Coordinate/Address/${address}`;
          break;
        case "GeoLocating":
          apiUrl = `https://gist.motc.gov.tw/gist_api/V3/Map/GeoLocating/District/LocationX/${locX}/LocationY/${locY}?$format=JSON`;
          break;
      }

      try {
        let res = await axios.get(`${apiUrl}`, {
          headers: this.getAuthorizationHeader(),
        });
        // console.log(res);

        return await res.data;
      } catch (err) {
        console.log(err);
        return await null;
      }
    },

    async getCityName({ address, locX, locY }) {
      if (locX && locY) {
        let cityName = await this.getTdxGeoData({
          apiType: "GeoLocating",
          locX: locX,
          locY: locY,
        });
        if (await cityName) {
          return cityName[0].CityName;
        }
      } else if (address) {
        let geoByAddress = await this.getTdxGeoData({
          apiType: "GeoCode",
          address: address,
        });
        geoByAddress = geoByAddress[0].Geometry.split(" ");

        let [locXByAddress, locYByAddress] = [
          geoByAddress[1].replace("(", ""),
          geoByAddress[2].replace(")", ""),
        ];
        let geoByXY = await this.getTdxGeoData({
          apiType: "GeoLocating",
          locX: locXByAddress,
          locY: locYByAddress,
        });

        // 會不會我一開始直接切地址前三個字就好了 XD + QAQ
        let cityName = geoByXY.CityName
          ? geoByXY.CityName
          : address.slice(0, 3);
        return await cityName;
      } else {
        return "";
      }
    },
  },
};
