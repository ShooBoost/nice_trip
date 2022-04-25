<template>
  <div :id="mapId"></div>
</template>
<script>
// 在地圖上顯示 TDX 資料
import L from "leaflet";

// 自製的 mixin

export default {
  name: "spotMap",
  props: ["mapId", "lat", "lon"],
  data() {
    return {
      map: {},
    };
  },
  methods: {
    initalLeafletMap(mapId, posLat, posLon) {
      // inital map
      this.map = L.map(mapId, {
        center: [posLat, posLon],
        zoom: 18,
      });
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 25,
          // id:"mapbox/satellite-v9" 為實景空拍模式
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoibG9ic3RlcjAxIiwiYSI6ImNrdXdvN3prYTUyYXgyb3BoaThwcmcxN2cifQ.CsAL1uSEtZjpGwuEpYA-6A",
        }
      ).addTo(this.map);
    },
    showSpotOnMap(mapId, lat, lon) {
      // 先初始化將 leaflet 撲到畫面上
      this.initalLeafletMap(mapId, lat, lon);

      // 客製化 icon，可以自己設計 html
      var myIcon = L.divIcon({
        // 客製化 icon
        html: `<span class="material-icons locationIcon">
location_on
</span>`,
        // 給定 icon 大小
        iconSize: [41, 51], // size of the icon
        iconAnchor: [20, 51], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -51], // point from which the popup should open relative to the iconAnchor
      });

      // 讓 marker 使用我們設計的 客製化 icon
      // 並在指定經緯度放上客製化的 marker
      L.marker([lat, lon], { icon: myIcon }).addTo(this.map);
    },
  },
  mounted() {
    // console.log(this.mapId, this.lat, this.lon);
    this.showSpotOnMap(this.mapId, this.lat, this.lon);
  },
};
</script>
