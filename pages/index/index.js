// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const app = getApp();
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
    title:'和行DIP',
    leftIconType: '',
    theme: 'light',
    tpList: [{
      id: 1,
      "img_url": 'https://oss-test.hexingyueche.com/images/manycars/static/home/banner.png'
    },{
      id: 1,
      "img_url": 'https://oss-test.hexingyueche.com/images/manycars/static/home/banner.png'
    },{
      id: 1,
      "img_url": 'https://oss-test.hexingyueche.com/images/manycars/static/home/banner.png'
    }],
    indicatorDots:  true, //是否显示面板指示点
    indicatorColor: 'rgba(255,255,255,0.5)', //指示点颜色
    indicatorActiveColor: 'white', //当前指示点颜色
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    circular: true //是否采用衔接滑动,
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
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
