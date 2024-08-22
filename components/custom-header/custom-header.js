const navBarHeight = wx.getSystemInfoSync().statusBarHeight + 48;
Component({
	properties: {
		title: {
			type: String,
			value: '标题',
		},
		backgroundColor: {
			type: String,
			value: 'transparent',
		},
		titleColor: {
			type: String,
			value: '#212121',
		},
		leftIconType: {
			type: String,
			value: 'back',
		},
		Url: {
			type: String,
			value: ''
		},
		UrlNew: {
			type: String,
			value: ''
		}
	},
	data: {
		navBarHeight: navBarHeight,
		statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
  },
	methods: {
		goHome() {
			this.triggerEvent('goHome');
		},
		goBack() {
			if (this.properties.Url) {
				wx.switchTab({
					url: this.properties.Url,
				})

			} else if (this.properties.UrlNew) {
				wx.redirectTo({
					url: this.properties.UrlNew,
				})
			} else {
				wx.navigateBack();
			}
		}
	}
});
