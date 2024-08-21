Component({
    properties: {
        showModal: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        navigateToPrivacyPolicy() {
            wx.navigateTo({
                url: '/pages/logs/logs'
            });
        },
        onConfirm() {
            this.triggerEvent('confirm');
        },
        onCancel() {
            this.triggerEvent('cancel');
        }
    }
});
