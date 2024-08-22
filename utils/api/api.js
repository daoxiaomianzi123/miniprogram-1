const {
  request,
  getOpenid,
  requestGET,
  requestPOST,
  requestDELETE
} = require('./http')

module.exports = {
  // 查询各tab权限
  tabPermission: (d) => requestGET('admin-api/applet/user/permission', d),
  // 获取openID
  getOpenID: (d) => getOpenid('admin-api/wx/openid/get', d),
  // 解密手机号
  getMobile: (d) => getOpenid('admin-api/wx/getWxUserInfo', d),
  // 微信快速登录
  weChatLogin: (d) => request('admin-api/system/auth/applet/login', d),
  // 车迟列表
  poolList: (d) => requestGET('admin-api/applet/pool/list', d),
  // 车迟移除
  deletePool: (d) => requestGET('admin-api/applet/pool/delete', d),
  // 车池添加
  addCarToPool: (d) => requestGET('admin-api/applet/pool/add', d),
  // 整备单列表
  collatList: (d) => requestGET('admin-api/applet/collate/list', d),
  // 整备完成
  collatComplete: (d) => requestGET('admin-api/applet/collate/complete', d),

  /*【交车单】 */
  // 【交车单】网约待处理列表
  submitList: (d) => requestGET('admin-api/applet/submit/list', d),
  // 网约CP待处理列表
  CPList: (d) => requestGET('admin-api/applet/ltcp/submit/list', d),
  // 交车确认列表count
  submitVehCount: (d) => requestGET('admin-api/applet/ltcp/submit/wait/count/list', d),
  // 【交车单】获取验车6大模块概要信息
  submitModelList: (d) => requestGET('admin-api/applet/submit/modelList', d),
  // 【交车单】获取验车电量里程信息
  submitSocInfo: (d) => requestGET('admin-api/applet/submit/soc/info', d),
  // 【交车单】获取验车基本信息
  submitBaseInfo: (d) => requestGET('admin-api/applet/submit/base/info', d),
  // 【交车单】插入或更新验车电量里程信息
  submitSocupInsert: (d) => request('admin-api/applet/submit/soc/upInsert', d),
  // 【交车单】插入或更新验收车辆基本信息
  submitBaseupInsert: (d) => request('admin-api/applet/submit/base/upInsert', d),
  // 【交车单】根据父级uuid查询子配置项
  submitModelFiledlist: (d) => requestGET('admin-api/applet/submit/model/filedList', d),
  // 【交车单】根据模块获取模块字段列表
  submitModelconfigList: (d) => requestGET('admin-api/applet/submit/model/configList', d),
  // 【交车单】根据字段以及业务ID查询数据
  submitModelData: (d) => requestGET('admin-api/applet/submit/model/data', d),
  // 【交车单】新增或新增车辆外观内饰性能信息
  submitNeiupInsert: (d) => request('admin-api/applet/submit/model/upInsert', d),
  // 【整/交/退车单】获取验车物品信息
  submitstuffIfo: (d) => requestGET('admin-api/applet/submit/stuff/info', d),
  // 【整/交/退车单】新增或新增车辆物品信息
  submitstuffupinsert: (d) => request('admin-api/applet/submit/stuff/upInsert', d),
  // 查询是否可以交车
  ifCanHandover: (d) => requestGET('admin-api/business/cp/ioSubmit/canHandover', d),


  // 【交/退车单】确认交车
  submitConfirm: (d) => requestGET('admin-api/applet/submit/submitConfirm', d),

  // 【交/退车单】验车完成
  updateResult: (d) => requestGET('admin-api/applet/submit/updateResult', d),

  // 【整备单】整备完成
  complete: (d) => requestGET('admin-api/applet/collate/complete', d),
  //soure == 3
  completee: (d) => requestGET('admin-api/business/lt/ioSubmit/collate/success', d),

  // 【退车单】获取退车扣款明细
  orderCutFee: (d) => requestGET('admin-api/applet/submit/orderCutFee', d),

  // 【整/交/退车单】获取整备/交车/退车单详情
  submitDetail: (d) => requestGET('admin-api/applet/submit/submitDetail', d),

  // 【整备单验收】整备验收打回
  checkReject: (d) => requestGET('admin-api/applet/collate/check/reject', d),
  // 【整备单验收】整备验收通过
  checkPass: (d) => requestGET('admin-api/applet/collate/check/pass', d),

  // 【整备单验收】异常明细
  abnormalDetail: (d) => requestGET('admin-api/applet/submit/abnormal/detail', d),

  // 【我的】推送设置
  wxPushset: (d) => requestGET('admin-api/applet/wxPush/set', d),
  // 【我的】推送设置
  getUser: (d) => requestGET('admin-api/applet/detail', d),

  // 首页
  homePer: (d) => requestGET('admin-api/applet/home/permission', d),
  homePermission: (d) => requestGET('admin-api/applet/user/permission', d),

  // 工单相关 ----------------------------------------------- start
  // 工单列表
  woList: (d) => requestGET('admin-api/applet/workOrder/list', d),
  // 新增代步车工单
  addReplaceWo: (d) => request('admin-api/applet/workOrder/replaceCar/add', d),
  // 暂存代步车工单
  tempReplaceWo: (d) => request('admin-api/applet/workOrder/replaceCar/temp/add', d),
  // 新增保费变更工单
  addInsureWo: (d) => request('admin-api/applet/workOrder/insure/add', d),
  // 暂存保费变更工单
  tempInsureWo: (d) => request('admin-api/applet/workOrder/insure/temp/add', d),
  // 可发起代步车替换工单的车辆
  getCars: (d) => requestGET('admin-api/applet/workOrder/replaceCar/getCars', d),
  // 代步车工单可选择的代步车
  getReplaceCars: (d) => requestGET('admin-api/applet/workOrder/replaceCar/getReplaceCars', d),
  // 查询车辆信息
  getCarInfo: (d) => requestGET('admin-api/applet/workOrder/getCarInfo', d),
  // 删除工单
  woDel: (uuid) => requestDELETE('admin-api/applet/workOrder/delete/' + uuid),
  // 代步车工单详情
  repOrderDetail: (d) => requestGET('admin-api/applet/workOrder/replaceCar/detail', d),
  // 保费变更工单详情
  insureOrderDetail: (d) => requestGET('admin-api/applet/workOrder/insure/detail', d),
  // 查询保险工单新增可选择车辆
  getInsureCar: (d) => requestGET('admin-api/applet/workOrder/insure/getCars', d),
  // 工单相关 ----------------------------------------------- end

  // 司机待办、司机已办理
  workList: (d) => request('admin-api/applet/lt/submit/wait/work/list', d),
  // 业务代办、业务已办理
  sendList: (d) => request('admin-api/applet/lt/submit/wait/send/list', d),
  // 确认送达
  confirmSendCar: (d) => requestGET('admin-api/applet/lt/submit/confirmSendCar', d),
  // 待办工单列表数字
  todoCount: (d) => requestGET('admin-api/applet/lt/submit/wait/count/list', d),
  // 待办工单 已处理工单详情
  workdetail: (d) => requestGET('admin-api/applet/lt/submit/detail', d),
  // 小程序 交接单签署
  workconfirmSubmitCar: (d) => request('admin-api/applet/lt/submit/confirmSubmitCar', d),

  // 车辆报修
  vehReportRepair: (d) => requestGET('admin-api/applet/collate/report/repair', d),

  //意向金列表
  intentionDepositList: (d) => request('admin-api/earnest/money/applet/list', d),

  //意向金订单取消
  cancelIntentionDepositOrder: (d) => requestGET('admin-api/earnest/money/applet/cancel', d),

  //意向金订单删除
  deleteIntentionDepositOrder: (d) => requestGET('admin-api/earnest/money/applet/delete', d),

  //获取意向金二维码支付金额
  reqIntentionDepositBalance: (d) => requestGET('admin-api/system/config/configKey/earnest_money_num', d),

  //获取巡游待处理列表
  getXunyouPendingList: (d) => requestGET('admin-api/taxi/applet/car/return/list', d),
  //获取巡游已处理列表
  getXunyouProcessedList: (d) => requestGET('admin-api/taxi/applet/car/return/list', d),
  //获取巡游验车确认相关信息
  getXunyouConfirmInfo: (d) => requestGET('admin-api/taxi/applet/car/return/detail', d),
  //巡游验车确认暂存
  saveXunyouConfirmInfo: (d) => request('admin-api/taxi/applet/car/return/cache', d),
  //巡游验车退车保存
  submitXunyouAllConfirmInfo: (d) => request('admin-api/taxi/applet/car/return/save', d),
  //获取巡游验车配件、工时列表
  getXunyouAttachmentsOrManhours: (d) => requestGET('admin-api/taxi/applet/car/return/fitting/list', d),
  //巡游收车签字确认
  confirmXunyouSignature: (d) => request('admin-api/taxi/applet/car/return/submit', d),
  // 3.1待办相关 ------------------------------------------start
  // 待办列表查询
  todoList: (d) => requestGET('admin-api/applet/car/todo/list', d),
  // 首页待办数量
  todoHomeCount: () => requestGET('admin-api/applet/car/todo/homeCount'),
  // 待办详情
  todoDetail: (d) => requestGET('admin-api/applet/car/todo/detail', d),
  // 完成待办
  completeTodo: (d) => request('admin-api/applet/car/todo/complete', d),
  // 查询系统用户
  userList: (d) => requestGET('admin-api/applet/user/list', d),
  // 转办
  transferTodo: (d) => request('admin-api/applet/car/todo/transfer', d),
  // 3.1待办相关 ------------------------------------------end

  // 3.1绑定北斗相关 ------------------------------------------start
  // 搜索车俩
  searchBindVeh: (d) => requestGET('admin-api/applet/machine/search/car', d),
  // 搜索北斗设备
  searchBindMachine: (d) => requestGET('admin-api/applet/machine/search/machine', d),
  // 绑定北斗
  bindBeidou: (d) => request('admin-api/applet/machine/bind/car', d),
  // 3.1绑定北斗相关 ------------------------------------------end
  
  // 3.1.1入库确认相关 ------------------------------------------start
  // 入库记录列表
  storageRecordList: (d) => requestGET('admin-api/applet/storage/list', d),
  // 车辆存放位置
  getVehicleStorageLocation: (d) => requestGET('admin-api/applet/storage/getLocationList', d),
  // 批量入库
  batchStorage: (d) => request('admin-api/applet/storage/batchStorage', d),
  // 3.1.1入库确认相关 ------------------------------------------end

  // 3.3租赁收车相关 ------------------------------------------start
  // 租赁收车列表
  rentalCollectionList: (d) => requestGET('admin-api/applet/lt/submit/list', d),
  // 查看退车单
  rentalCollectionDetail: (d) => requestGET('admin-api/applet/lt/submit/io/detail', d),
  // 确认收车
  rentalCollectionConfirm: (d) => request('admin-api/business/lt/ioSubmit/return/confirm', d),
  // 3.3租赁收车相关 ------------------------------------------end

  // 工单模块接口-------------------
  // 待我处理列表
  workOrderPendingList: (d) => requestGET('admin-api/applet/lt/work/order/wait-deal-forme/list', d),
  // 我发起的列表
  workOrderApplyList: (d) => requestGET('admin-api/applet/lt/work/order/apply-with-me/list', d),
  // 我处理的列表
  workOrderHandleList: (d) => requestGET('admin-api/applet/lt/work/order/op-with-me/list', d),
  //转办
  workOrderTransferTodo: (d) => requestPOST('admin-api/applet/lt/work/order/transfer', d),
  //撤回
  workOrderRevoke: (d) => requestPOST('admin-api/applet/lt/work/order/cancel', d),
  workOrderForceClose: (d) => requestPOST('admin-api/applet/lt/work/order/force-shutdown', d),
  // 客户列表
  workOrderClientList: (d) => requestGET('admin-api/business/lt/customer/list', d),
  // 司机列表
  workOrderDriverList: (d) => requestGET('admin-api/applet/lt/work/order/select/driver-users', d),
  // 车辆列表
  workOrderCarList: (d) => requestGET('admin-api/applet/lt/work/order/select/cars', d),
  //查询车辆绑定的客户
  getClientByCar: (d) => requestGET('admin-api/applet/lt/work/order/select/car-bind-customer', d),
  // 替换车查询原车车辆列表
  workOrderCarList1: (d) => requestGET('admin-api/applet/lt/work/displace/select/cars', d),
   // 办理派车车辆列表
   workOrderCarList2: (d) => requestGET('admin-api/applet/lt/work/order/select/dispatch/cars', d),
  //代步车申请存草稿
  commutingCarApplySaveDraft: (d) => request('admin-api/applet/lt/work/replace/draft', d),
  //代步车申请保存
  commutingCarApplySave: (d) => request('admin-api/applet/lt/work/replace/add', d),
  //代步车草稿详情
  commutingCarDraftDetail: (d) => request('admin-api/applet/lt/work/replace/draft/detail', d),
  //代步车申请详情
  commutingCarApplyDetail: (d) => requestGET('admin-api/applet/lt/work/replace/detail', d),
  //代步车审核
  commutingCarApprove: (d) => request('admin-api/applet/lt/work/replace/approve', d),
  //代步车办理派车
  commutingCarSendCar: (d) => request('admin-api/applet/lt/work/replace/assign', d),
  //代步车开始任务-确认送达-确认返程
  commutingCarDoTask: (d) => request('admin-api/applet/lt/work/replace/quest', d),
  //代步车获取默认总工时总里程
  commutingCarMileageManhour: (d) => requestGET('admin-api/applet/lt/work/order/mileage-manhour', d),
  //代步车关闭工单
  commutingCarCloseOrder: (d) => requestPOST('admin-api/applet/lt/work/order/shutdown', d),
  //替换车保存草稿
  replaceCarApplySaveDraft: (d) => request('admin-api/applet/lt/work/displace/draft', d),
  //替换车申请提交
  replaceCarApplySave: (d) => request('admin-api/applet/lt/work/displace/add', d),
  //替换车草稿详情
  replaceCarDraftDetail: (d) => requestGET('admin-api/applet/lt/work/displace/draft/detail', d),
  //替换车工单详情
  replaceCarOrderDetail: (d) => requestGET('admin-api/applet/lt/work/displace/detail', d),
  //替换车工单审核
  replaceCarApprove: (d) => request('admin-api/applet/lt/work/displace/approve', d),
  //替换车派车
  replaceCarSendCar: (d) => request('admin-api/applet/lt/work/displace/assign', d),
  //替换车开始任务-确认送达-确认返程
  replaceCarDoTask: (d) => request('admin-api/applet/lt/work/displace/quest', d),
  //车辆故障/事故保存草稿
  vehicleFaultApplySaveDraft: (d) => request('admin-api/applet/lt/work/fault/draft', d),
  //车辆故障/事故工单申请提交
  vehicleFaultApplySave: (d) => request('admin-api/applet/lt/work/fault/add', d),
  //车辆故障/事故查询草稿详情
  vehicleFaultDraftDetail: (d) => requestGET('admin-api/applet/lt/work/fault/draft/detail', d),
  //车辆故障/事故查询工单详情
  vehicleFaultOrderDetail: (d) => requestGET('admin-api/applet/lt/work/fault/detail', d),
  //车辆故障/事故派车
  vehicleFaultSendCar: (d) => requestPOST('admin-api/applet/lt/work/fault/dispatch/car', d),
  //车辆故障/事故开始任务
  vehicleFaultStartTask: (d) => requestPOST('admin-api/applet/lt/work/fault/start', d),
  //车辆故障/事故现场处理
  vehicleFaultDealNow: (d) => requestPOST('admin-api/applet/lt/work/fault/deal', d),
  //车辆故障/事故确认送修
  vehicleFaultRepair: (d) => requestPOST('admin-api/applet/lt/work/fault/send-repair', d),
  //车辆故障/事故确认收车
  vehicleFaultGetCar: (d) => requestPOST('admin-api/applet/lt/work/fault/return-car', d),
  //上门收车-草稿详情
  getCarDraftDetail: (d) => requestGET('admin-api/applet/lt/work/take-car-back/draft/detail', d),
  //上门收车-保存草稿
  getCarApplySaveDraft: (d) => request('admin-api/applet/lt/work/take-car-back/draft', d),
  //上门收车-工单申请提交
  getCarApplySave: (d) => request('admin-api/applet/lt/work/take-car-back/add', d),
  //上门收车-工单详情
  getCarOrderDetail: (d) => requestGET('admin-api/applet/lt/work/take-car-back/detail', d),
  //上门收车-派人
  getCarSendDriver: (d) => requestPOST('admin-api/applet/lt/work/take-car-back/dispatch/drv', d),
  //上门收车-开始任务
  getCarStartTask: (d) => requestPOST('admin-api/applet/lt/work/take-car-back/start', d),
  //上门收车-取车
  getCarPickup: (d) => requestPOST('admin-api/applet/lt/work/take-car-back/accept-car', d),
  //上门收车-收车
  getCarCollect: (d) => requestPOST('admin-api/applet/lt/work/take-car-back/back-car', d),
  //上门取送车-草稿详情
  getSendCarDraftDetail: (d) => requestGET('admin-api/applet/lt/work/car-pick-delivery/draft/detail', d),
  //上门取送车-保存草稿
  getSendCarApplySaveDraft: (d) => request('admin-api/applet/lt/work/car-pick-delivery/draft', d),
  //上门取送车-工单申请提交
  getSendCarApplySave: (d) => request('admin-api/applet/lt/work/car-pick-delivery/add', d),
  //上门取送车-工单详情
  getSendCarOrderDetail: (d) => requestGET('admin-api/applet/lt/work/car-pick-delivery/detail', d),
  //上门取送车-派人
  getSendCarSendDriver: (d) => requestPOST('admin-api/applet/lt/work/car-pick-delivery/dispatch/drv', d),
  //上门取送车-开始任务
  getSendCarStartTask: (d) => requestPOST('admin-api/applet/lt/work/car-pick-delivery/start', d),
  //上门取送车-取车
  getSendCarPickup: (d) => requestPOST('admin-api/applet/lt/work/car-pick-delivery/pick-car', d),
  //上门取送车-送车
  getSendCarSend: (d) => requestPOST('admin-api/applet/lt/work/car-pick-delivery/delivery-car', d),
  //上门取送车-返程
  getSendCarReturnBack: (d) => requestPOST('admin-api/applet/lt/work/car-pick-delivery/return-trip', d),
  //上门取送车-收车
  getSendCarGetCar: (d) => requestPOST('admin-api/applet/lt/work/car-pick-delivery/back-car', d),

   //申请试驾车-草稿详情
   testDriveApplyDraftDetail: (d) => requestGET('admin-api/applet/lt/work/test-drive/draft/detail', d),
  //申请试驾车-保存草稿
  testDriveApplySaveDraft: (d) => request('admin-api/applet/lt/work/test-drive/draft', d),
  //申请试驾车-工单申请提交
  testDriveApplySave: (d) => request('admin-api/applet/lt/work/test-drive/add', d),
  //申请试驾车-工单详情
  testDriveOrderDetail: (d) => requestGET('admin-api/applet/lt/work/test-drive/detail', d),
  //申请试驾车-部门领导审核
  testDriveApprove1: (d) => requestPOST('admin-api/applet/lt/work/test-drive/check/first', d),
  //申请试驾车-分管领导审核
  testDriveApprove2: (d) => requestPOST('admin-api/applet/lt/work/test-drive/check/second', d),
  //申请试驾车-派车
  testDriveSendCar: (d) => requestPOST('admin-api/applet/lt/work/test-drive/dispatch/car', d),
  //申请试驾车-开始任务
  testDriveStartTask: (d) => requestPOST('admin-api/applet/lt/work/test-drive/start', d),
  //申请试驾车-完成交接
  testDriveFinishHandover: (d) => requestPOST('admin-api/applet/lt/work/test-drive/send-car', d),
  //申请试驾车-确认返程
  testDriveConfirmReturnTrip: (d) => requestPOST('admin-api/applet/lt/work/test-drive/return-trip', d),
  //上门取送车-返程
  testDriveReturnBack: (d) => requestPOST('admin-api/applet/lt/work/car-pick-delivery/return-trip', d),
  //上门取送车-收车
  testDriveGetCar: (d) => requestPOST('admin-api/applet/lt/work/car-pick-delivery/back-car', d),

  // 3.4我的合同相关 ------------------------------------------start
  // 我的合同列表
  contractList: (d) => requestGET('admin-api/business/lt/applet/contract/list', d),
  // 我的合同审核中列表
  contractAuditList: (d) => requestGET('admin-api/business/lt/applet/contract/auditList', d),
  // 我的合同列表删除
  contractDelete: (d) => requestPOST('admin-api/business/lt/applet/contract/delete', d),
  // 我的合同列表撤销
  contractRevert: (d) => requestPOST('admin-api/business/lt/applet/contract/revert', d),
  // 我的合同列表撤回
  contractReturn: (d) => requestGET('admin-api/business/lt/applet/contract/return', d),
  // 我的合同列表详情
  contractDetail: (d) => requestGET('admin-api/business/lt/applet/contract/detail', d),
  // 我的合同详情审批流程
  contractFlowList: (d) => requestGET('admin-api/business/lt/applet/contract/flowList', d),
  // 我的合同详情车辆信息
  contractCarList: (d) => requestGET('admin-api/business/lt/applet/contract/carList', d),
  // 我的合同租金明细
  contractRent: (d) => requestGET('admin-api/business/lt/applet/contract/rent', d),
  // 我的合同开票回款
  contractInvoice: (d) => requestGET('admin-api/business/lt/applet/contract/invoice', d),
  // 我的合同审批可退回节点
  contractBackNode: (d) => requestGET('admin-api/business/lt/contract/audit/returnFlowList', d),
  // 我的合同提交审核
  contractAudit: (d) => requestPOST('admin-api/business/lt/applet/contract/audit', d),
  // 3.4我的合同相关 ------------------------------------------end
  // 3.5我的合同相关 ------------------------------------------start
  frameworkContractsList: (d) => requestGET('admin-api/business/lt/contract/frame/contract', d),
  //合同详情
  contractInfoDetail: (d) => requestGET('admin-api/business/lt/contract/detail', d),
  //签约客户列表
  signClientsList: (d) => requestGET('admin-api/business/lt/customer/select', d),
  //新增合同
  newContractSave: (d) => request('admin-api/business/lt/applet/contract/insert', d),
  //编辑合同暂存
  updateContractSave: (d) => request('admin-api/business/lt/applet/contract/update', d),
  // 3.5我的合同相关 ------------------------------------------end
  // 车辆品牌
  getBrandList: (d) => requestGET('admin-api/busi/car/model/page/brands',d),
  // 型号
	getModelList: (d) => requestGET('admin-api/busi/car/model/brand/model',d),
}
