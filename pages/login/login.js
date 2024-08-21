// pages/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTabIndex: "0",  // 默认显示身份证内容
        idCardNumber: "",
        plateNumber: "",
        creditCodeNumber: "",
    },
    toggleType: function (e) {
        const index = e.currentTarget.dataset.index;
        this.setData({
            currentTabIndex: index
        });
        console.log(this.data.currentTabIndex);
    },
    onIdCardInput: function (e) {
        this.setData({
            idCardNumber: e.detail.value
        });
        console.log(e.detail.value);
    },
    onPlateNumberInput: function (e) {
        this.setData({
            plateNumber: e.detail.value
        });
        console.log(e.detail.value);
    },
    onCreditCodeInput: function (e) {
        this.setData({
            creditCodeNumber: e.detail.value
        });
        console.log(e.detail.value);
    }
    ,
    navigateToPrivacyPolicy: function() {
        wx.navigateTo({
            url: '/pages/logs/logs'
        });
    },
    onLogin: function () {
        // 登录成功，跳转到首页
        wx.navigateTo({
            url: '/pages/logs/logs',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})