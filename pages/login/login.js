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
        showModal: false,
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
    this.setData({
        showModal: true
    });
    // wx.showModal({
    //     title: '温馨提示',
    //     content: '为了更好保障您的合法权益，请先阅读并同意<span style="color: #424242;">为了更好保障您的合法权益，请先阅读并同意</span><span style="color: #2B66F7;">《用户隐私协议》</span>',
    //     confirmText: '同意',
    //     cancelText: '不同意',
    //     confirmColor: '#2B66F7',
    //     cancelColor: '#000000',
    //     success(res) {
    //         if (res.confirm) {
    //             // 用户点击同意
    //             wx.navigateTo({
    //                 url: '/pages/home/home' // 假设首页路径为 /pages/home/home
    //             });
    //         } else if (res.cancel) {
    //             // 用户点击不同意
    //             console.log('用户不同意隐私协议');
    //         }
    //     }
    // });
},

    onConfirm() {
        this.setData({
            showModal: false
        });
        wx.navigateTo({
            url: '/pages/home/home'
        });
    },
    onCancel() {
        this.setData({
            showModal: false
        });
        console.log('用户不同意隐私协议');
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