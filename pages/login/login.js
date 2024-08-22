// pages/login.js
const WXBizDataCrypt = require('../../utils/RdWXBizDataCrypt.js');
const {
    getOpenID,
    weChatLogin,
} = require('../../utils/api/api');
const getUserInfo = require('../../utils/getUserInfo.js')

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
        agree: false,
        captchaId: 'b25e77bf3d8172481bc8e74b8cbde23b',
        captchaData: null,
        verify: false,
        openid: '',
        unionid: '',

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
    },
    onAgreementCheck: function () {
        this.setData({
            agree: !this.data.agree
        });
    },
    navigateToPrivacyPolicy: function () {
        wx.navigateTo({
            url: '/pages/logs/logs'
        });
    },
    onLogin: function () {
        if (!this.data.agree) {
            this.setData({
                showModal: true
            });
        } else {
            if (!this.data.idCardNumber) {
                wx.showToast({
                    title: '请输入身份证号',
                    icon: 'none',
                    duration: 1000
                });
                return;
            } else if (!this.data.plateNumber) {
                wx.showToast({
                    title: '请输入车牌号',
                    icon: 'none', duration: 1000
                })
                return
            }
            this.accountClick()
        }
    },
    accountClick: function () {
        if (this.data.openid.length > 0 && this.data.unionid.length > 0) {
            this.toVerify()
        } else {
            wx.showLoading({
                title: '',
            })
            const that = this
            wx.login({
                success(res) {
                    getOpenID({
                        code: res.code
                    }).then(res => {
                        wx.hideLoading()
                        if (res.code == 0) {
                            that.setData({
                                openid: res.data.openid,
                                unionid: res.data.unionid,
                            })
                            wx.setStorageSync('openid', res.data.openid)
                            wx.setStorageSync('unionid', res.data.unionid);
                           that.toVerify()
                        } else {
                            wx.showToast({
                                title: res.msg,
                                icon: 'none'
                            })
                        }
                    })
                }
            })
        }
    },
    toVerify: function () {
        this.setData({
            verify: Date.now()
        })
    },
    // 极验
    captchaSuccess: function (result) {
        this.setData({
            captchaData: result
        })
        let {detail} = this.data.captchaData
        let gee = {
            captchaOutput: detail.captcha_output,
            lotNumber: detail.lot_number,
            genTime: detail.gen_time,
            passToken: detail.pass_token
        }
        this.captchaValidate(gee)
    },
    captchaValidate: function (gee) {
        var captchaData = this.data.captchaData; // 获取完成验证码时存储的验证结果
        if (typeof captchaData !== 'object') {
            app.showToast('none', '请先完成验证！')
            return
        }
        // 将结果提交给用户服务端进行二次验证
        wx.showLoading();
        let parme = {
            openId: this.data.openid,
            unionId: this.data.unionid,
            time: new Date().getTime()
        }
        weChatLogin({
            openId: WXBizDataCrypt.encrypted(JSON.stringify(parme)),
            accountNum: this.data.idCardNumber,
            password: WXBizDataCrypt.encrypted(this.data.plateNumber),
            loginType: 3,
            gee
        }).then(res => {
            wx.hideLoading()
            if (res.code == 0) {
                wx.setStorageSync('wxPush', res.data.wxPush)
                wx.setStorageSync('token', res.data.accessToken);
                getUserInfo.getUserInfo(res.data.userId)
            } else {
                wx.showToast({
                    title: res.msg,
                    icon: 'none',
                });
            }
        }).catch(() => {
          wx.showToast({
            title: '网络错误',
            icon: 'none',
          });
        })
    },


    onConfirm() {
        this.setData({
            showModal: false,
            agree: true
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