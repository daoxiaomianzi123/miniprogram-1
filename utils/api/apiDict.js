const {
	request,
	getOpenid,
	requestGET
} = require('./http')

module.exports = {
	// 根据字典类型查询字典数据
	dictionary: (d) => requestGET('admin-api/system/dict-data/'+d),
	// 车辆品牌
	brandList: (d) => requestGET('admin-api/busi/car/model/all-brands'),
	// 型号
	modelList: (d) => requestGET('admin-api/busi/car/model/list'),
	// 城市
	cityGet: (d) => requestGET('admin-api/business/city/select',d),
	//车辆基本信息
	driverDetail: (d) => requestGET('admin-api/applet/car/detail/'+d),
}
