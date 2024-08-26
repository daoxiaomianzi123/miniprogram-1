// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const app = getApp();
const {
    homePer,
    todoHomeCount
} = require('../../utils/api/api');
Page({
    data: {
        motto: 'Hello World',
        userInfo: {
            avatarUrl: defaultAvatarUrl,
            nickName: '',
        },
        hasUserInfo: false,
        canIUseGetUserProfile: wx.canIUse('getUserProfile'),
        canIUseNicknameComp: wx.canIUse('input.type.nickname'),
        navigationBarHeight: app.globalData.navBarHeight,
        statusBarHeight: app.globalData.statusBarHeight,
        title: '和行DIP',
        leftIconType: '',
        backgroundColor: '#ffffff',
        theme: 'light',
        tpList: [{
            id: 1,
            "img_url": 'https://oss-test.hexingyueche.com/images/manycars/static/home/banner.png'
        }, {
            id: 1,
            "img_url": 'https://oss-test.hexingyueche.com/images/manycars/static/home/banner.png'
        }, {
            id: 1,
            "img_url": 'https://oss-test.hexingyueche.com/images/manycars/static/home/banner.png'
        }],
        indicatorDots: true, //是否显示面板指示点
        indicatorColor: 'rgba(255,255,255,0.5)', //指示点颜色
        indicatorActiveColor: 'white', //当前指示点颜色
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 500,
        circular: true, //是否采用衔接滑动,
        tablist: [],
        tablistd: [{
            name: "车辆整备",
            imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_6.png',
            url: '/pageA/vehicleservicing/vehicleservicing',
            number: 0,
            permissiond: 'business:applet:car:collate'
        }, {
            name: "整备验收",
            imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_5.png',
            url: '/pages/readinessacceptance/readinessacceptance',
            number: 0,
            permissiond: 'business:applet:car:check'
        }, {
            name: "网约交车",
            imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_1.png',
            url: '/pageA/handover/handover',
            number: 0,
            permissiond: 'business:applet:car:submit'
        }, {
            name: "网约交车确认",
            imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_2.png',
            url: '/pageA/handoverconfirm/handoverconfirm',
            number: 0,
            permissiond: 'business:applet:car:submit:confirm'
        }, {
            name: "网约收车",
            imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_3.png',
            url: '/pageA/collection/collection',
            number: 0,
            permissiond: 'business:applet:car:return:check'
        }, {
            name: "网约车池",
            imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_4.png',
            url: '/pageA/carScheduling/carScheduling',
            number: 0,
            permissiond: 'business:applet:car:pool'
        }, {
            name: "网约工单",
            imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_7.png',
            url: '/pagesB/workOrderList/index',
            number: 0,
            permissiond: 'work:sheet:applet:apply'
        },
            {
                name: "租赁交车",
                imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_8.png',
                url: '/pageA/agencyworkorder/agencyworkorder',
                number: 0,
                permissiond: 'business:applet:work:waithandle'
            },
            {
                name: "收意向金",
                imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_9.png',
                url: '/pageA/IntentionDeposit/IntentionDepositList',
                number: 0,
                permissiond: 'business:applet:earnest:money'
            },
            {
                name: "巡游收车",
                imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/Patrol_collection.png',
                url: '/pageA/xunyouInspectCar/xyInspectCarList',
                number: 0,
                permissiond: 'business:taxi:applet:car:return'
            },
            {
                name: "绑定北斗",
                imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_10.png',
                url: '/pagesB/bindBeidou/index',
                number: 0,
                permissiond: 'business:applet:bind:beidou'
            },
            {
                name: "入库确认",
                imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_11.png',
                url: '/pagesB/storageConfirm/index',
                number: 0,
                permissiond: 'business:applet:car:storage'
            }, {
                name: "入库确认",
                imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_11.png',
                url: '/pagesB/storageConfirm/index',
                number: 0,
                permissiond: 'business:applet:car:storage'
            }, {
                name: "入库确认",
                imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_11.png',
                url: '/pagesB/storageConfirm/index',
                number: 0,
                permissiond: 'business:applet:car:storage'
            }, {
                name: "入库确认",
                imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_11.png',
                url: '/pagesB/storageConfirm/index',
                number: 0,
                permissiond: 'business:applet:car:storage'
            }, {
                name: "入库确认",
                imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_11.png',
                url: '/pagesB/storageConfirm/index',
                number: 0,
                permissiond: 'business:applet:car:storage'
            }, {
                name: "入库确认",
                imgurl: 'https://oss-test.hexingyueche.com/images/manycars/static/icon/icon_11.png',
                url: '/pagesB/storageConfirm/index',
                number: 0,
                permissiond: 'business:applet:car:storage'
            }],
        phoneNumber:'400-160-8899'
    },
    onLoad() {
        console.log("home ==== onLoad")
        console.log("token =" + wx.getStorageSync('token'))
        if (wx.getStorageSync('token')) {
            this.gethomePer()
        }
    },
    gethomePer() {
        homePer().then(res => {
            if (res.code == 0) {
                console.log("home === ", res.data)
                this.setData({
                    tablist: this.getfromD(this.data.tablistd, res.data)
                })
            } else {
                app.showToast('none', res.msg)
            }
        })
    },
    //循环插入数组
    getfromD(data, value) {
        data.forEach((item, index) => {
            value.forEach((itemN, indexN) => {
                for (var key in item) {
                    if (itemN['permission'] == item['permissiond']) {
                        itemN[key] = item[key]
                    }
                }
            })
        })
        return value
    },
    tabClick(e) {
        wx.showToast({
            title: '点击了' + this.data.tablistd[e.currentTarget.dataset.index].name,
            icon: 'none'
        })
        wx.navigateTo({
            url:this.data.tablistd[e.currentTarget.dataset.index].url,
        })
    },
    callPhone(e) {
        console.log(e.currentTarget.dataset.phone)
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.phone
        })
    },

    bindViewTap() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onChooseAvatar(e) {
        const {avatarUrl} = e.detail
        const {nickName} = this.data.userInfo
        this.setData({
            "userInfo.avatarUrl": avatarUrl,
            hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
        })
    },
    onInputChange(e) {
        const nickName = e.detail.value
        const {avatarUrl} = this.data.userInfo
        this.setData({
            "userInfo.nickName": nickName,
            hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
        })
    },
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res)
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        })
    },
})
