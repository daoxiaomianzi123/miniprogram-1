// app.js
App({
    onLaunch() {
//计算导航栏高度
        const {statusBarHeight, platform} = wx.getSystemInfoSync()
        const {top, height} = wx.getMenuButtonBoundingClientRect()
        this.globalData.statusBarHeight = statusBarHeight;
        // 判断胶囊按钮信息是否成功获取
        if (top && top !== 0 && height && height !== 0) {
//获取成功进行计算
            this.globalData.navBarHeight = (top - statusBarHeight) * 2 + height
            // 导航栏高度
        } else {
//获取失败使用默认的高度
            this.globalData.navBarHeight = (
                platform === 'android' ? 48 : 40
            )
        }
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
    },
    globalData: {
        navBarHeight: 0, // 导航栏高度
        statusBarHeight: 0, // 状态栏高度
        userInfo: null
    }
})
