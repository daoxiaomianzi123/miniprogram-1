const {
  baseUrl
} = require('./env').dev
// const WXBizDataCrypt = require('../RdWXBizDataCrypt.js');
// 封装ajax
module.exports = {
  request: function (url, data) {
    // 操作url
    var url = `${baseUrl}${url}`
    // 操作data
    var data = data;
    var token = null;
    if (wx.getStorageSync('token')) {
      token = wx.getStorageSync('token')
    }
    if (data == undefined) data = {};
    let params = {
      ...data,
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: "POST",
        data: params,
        header: {
          'Content-type': 'application/json',
          'Authorization': token == null ? '' : 'Bearer ' + token
        },
        success(res) {
          resolve(res.data)
        },
        fail(res) {
          reject(res.data)
        }
      })
    })
  },
  getOpenid: function (url, data) {
    // 操作url
    var url = `${baseUrl}${url}`
    // 操作data
    var data = data;
    var token = null;
    if (data == undefined) data = {};
    let params = {
      ...data,
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: "GET",
        data: params,
        header: {
          'Content-type': 'application/x-www-form-urlencoded',
          'Authorization': ''
        },
        success(res) {
          resolve(res.data)
        },
        fail(res) {
          reject(res.data)
        }
      })
    })
  },
  
  requestPOST: function (url, data) {
    // 操作url
    var url = `${baseUrl}${url}`
    // 操作data
    var data = data;
    var token = null;
    if (wx.getStorageSync('token')) {
      token = wx.getStorageSync('token')
    }
    if (data == undefined) data = {};
    let params = {
      ...data,
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: "POST",
        data: params,
        header: {
          'Content-type': 'application/x-www-form-urlencoded',
          'Authorization': token == null ? '' : 'Bearer ' + token
        },
        success(res) {
          if (res.data.code == 401) {
            // getweChatLogin.getweChatLogin()
            // 获取所有的key
            const keys = wx.getStorageInfoSync().keys
            // 遍历所有的key，并逐个移除
            keys.forEach(key => {
              console.log("key ==== ", key)
              console.log("value ==== ", wx.getStorageSync(key))
              wx.removeStorageSync(key);
            });
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
            // wx.navigateTo({
            //   url: '/pageA/login/login',
            // })
          } else if (res.data.code == 0) {
            resolve(res.data)
          } else {
            resolve(res.data)
          }
        },
        fail(res) {
          reject(res.data)
        }
      })
    })
  },

  requestGET: function (url, data) {
    // 操作url
    var url = `${baseUrl}${url}`
    // 操作data
    var data = data;
    var token = null;
    if (wx.getStorageSync('token')) {
      token = wx.getStorageSync('token')
    }
    if (data == undefined) data = {};
    let params = {
      ...data,
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: "GET",
        data: params,
        header: {
          'Content-type': 'application/x-www-form-urlencoded',
          'Authorization': token == null ? '' : 'Bearer ' + token
        },
        success(res) {
          if (res.data.code == 401) {
            // getweChatLogin.getweChatLogin()
            // 获取所有的key
            const keys = wx.getStorageInfoSync().keys
            // 遍历所有的key，并逐个移除
            keys.forEach(key => {
              console.log("key ==== ", key)
              console.log("value ==== ", wx.getStorageSync(key))
              wx.removeStorageSync(key);
            });
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          } else if (res.data.code == 0) {
            resolve(res.data)
          } else {
            resolve(res.data)
          }
        },
        fail(res) {
          reject(res.data)
        }
      })
    })
  },
  requestDELETE: function (url, data) {
    var url = `${baseUrl}${url}`
    var data = data;
    var token = null;
    if (wx.getStorageSync('token')) {
      token = wx.getStorageSync('token')
    }
    if (data == undefined) data = {};
    let params = {
      ...data,
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: "DELETE",
        data: params,
        header: {
          'Content-type': 'application/x-www-form-urlencoded',
          'Authorization': token == null ? '' : 'Bearer ' + token
        },
        success(res) {
          if (res.data.code == 401) {
            // getweChatLogin.getweChatLogin()
            // 获取所有的key
            const keys = wx.getStorageInfoSync().keys
            // 遍历所有的key，并逐个移除
            keys.forEach(key => {
              console.log("key ==== ", key)
              console.log("value ==== ", wx.getStorageSync(key))
              wx.removeStorageSync(key);
            });
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          } else if (res.data.code == 0) {
            resolve(res.data)
          }
        },
        fail(res) {
          reject(res.data)
        }
      })
    })
  },
}
