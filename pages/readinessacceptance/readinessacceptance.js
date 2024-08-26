// index.js
Page({
  data: {
    currentTab: 0 // 默认显示第一个tab
  },

  // 切换tab
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index
    });
  }
});
