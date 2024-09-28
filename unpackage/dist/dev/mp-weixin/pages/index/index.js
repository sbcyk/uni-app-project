"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "有点卡卡的aaa",
      // 轮播图
      pictures: [
        { id: 1, url: "https://sbcyk.online/cykblog/strange_smiley_with_no_background.webp" },
        { id: 2, url: "https://sbcyk.online/cykblog/strange_smiley_with_no_background_white.webp" }
      ]
    };
  },
  onLoad() {
    this.fuck();
  },
  methods: {
    fuck() {
      console.log("xixixi fuuuuuuuuuuuuuuuk");
    },
    onPreviewImage(url) {
      common_vendor.index.previewImage({
        urls: this.pictures.map((item) => item.url),
        current: url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pictures, (item, k0, i0) => {
      return {
        a: item.url,
        b: common_vendor.o(($event) => $options.onPreviewImage(item.url), item.id),
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "G:/HBuilderXDoc/uni-app-project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
