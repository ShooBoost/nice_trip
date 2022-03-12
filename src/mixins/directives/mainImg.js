export default {
  directives: {
    async mainImg(el, binding) {
      // 檢查圖片是否存在
      function IsImageExist(imgUrl) {
        return new Promise(function (resolve, reject) {
          var img = new Image();
          img.onload = function () {
            // console.log(`${img.src} onload ya`);
            resolve(true);
          };
          img.onerror = function () {
            reject(false);
          };
          img.src = imgUrl;
        })
          .then((res) => {
            return res;
          })
          .catch((err) => {
            return err;
          });
      }
      // 如果有圖片網址的話
      if (binding.value) {
        let doesExist = await IsImageExist(binding.value);
        // console.log("doesExist", doesExist);
        if (doesExist) {
          el.setAttribute("src", binding.value);
        }
      }
    },
  },

};
