// index.js
const app = getApp();

Page({
    data: {
        currentTab: "0", // 默认显示第一个tab
        leftIconType: "back", // 左侧图标是否显示
        title: "整备验收", // 标题
        navigationBarHeight: app.globalData.navBarHeight,
        statusBarHeight: app.globalData.statusBarHeight,
        listData: [{"order": "整备单号: 20230217-JC-0001"}, {"order": "整备单号: 20230217-JC-0002"},], // 列表数据
        isRefreshing: false, // 是否正在刷新
        isLoadingMore: false, // 是否正在加载更多
        page: 1, // 当前页数
        pageSize: 10, // 每页显示数量

    },

    // 切换tab
    switchTab(e) {
        const index = e.currentTarget.dataset.index;
        this.setData({
            currentTab: index
        });
    },
    onLoad: function () {
        console.log("readinessacceptance onload");
        this.onRefresh();
    },

    loadData: function () {
        // 模拟加载数据
        this.setData({
            isLoadingMore: true
        });

        // 模拟异步请求
        setTimeout(() => {
            const newData = this.generateMockData(); // 生成模拟数据
            this.setData({
                listData: [...this.data.listData, ...newData],
                isLoadingMore: false,
                page: this.data.page + 1
            });
        }, 2000);
        console.log("page: " + this.data.page + "");
    },

    onScrollToLower: function () {
        console.log("onScrollToLower");
        if (!this.data.isLoadingMore) {
            this.loadData();
        }
    },

    onRefresh: function () {
        console.log("onRefresh    =" + this.data.isRefreshing);
        if (!this.data.isRefreshing) {
            console.log("onRefresh 下拉刷新" );
            // 处理下拉刷新
            this.setData({
                isRefreshing: true
            });

            // 模拟异步请求
            setTimeout(() => {
                const newData = this.generateMockData(); // 生成模拟数据
                this.setData({
                    listData: newData,
                    isRefreshing: false,
                    page: 1
                });
            }, 2000);
        }
    },

    generateMockData: function () {
        // 生成模拟数据的逻辑
        return Array.from({length: 10}, (_, i) => ({
            order: `整备单号: 20230217-JC-000${i + 1}`
            // 其他数据字段
        }));
    }
});
