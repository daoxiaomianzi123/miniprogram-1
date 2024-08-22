const app = getApp()
const {
	baseUrl
} = require('api/env').dev

const getUserInfo = (id) => {
  wx.setStorageSync('loginUserId', id);
	// 操作url
	let urls = `${baseUrl}` + 'admin-api/applet/detail'
	let token = ''
	if (wx.getStorageSync('token')) {
		token = wx.getStorageSync('token')
	}
	let params = {
		id: id
	}
	return new Promise((resolve, reject) => {
		wx.request({
			url: urls,
			method: "GET",
			data: params,
			header: {
				'Content-type': 'application/x-www-form-urlencoded',
				'Authorization': token == null ? '' : 'Bearer ' + token
			},
			success(res) {
				wx.setStorageSync('userInfo', res.data.data)
				wx.switchTab({
					url: '../../pages/index/index',
				})
			},
			fail(res) {
				reject(res.data)
			}
		})
	})
	// return new Promise((resolve, reject) => {
	// 	getUser({id:id})
	// 		.then(res => {
	// 			wx.setStorageSync('userInfo', res.data)
	// 			resolve(res.data)
	// 		})
	// 		.catch(err => {
	// 			reject(err)
	// 		})
	// })
}


module.exports = {
	getUserInfo: getUserInfo
}
