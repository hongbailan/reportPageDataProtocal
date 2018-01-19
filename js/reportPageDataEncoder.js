// 协议封装类
// {"value":
//   {"oProfile":{"name":"123","age":"23","sex":1},
//     "time":"1209-1-1",
//     "oParam":[
//       {"illName":"糖尿病风险",
//       "time":"2017-12-12",
//       "oProfile":{"name":"123","age":"23","sex":1},
//       "oParam":{"BMI":59,"waistline":28,"fastingBloodGlucose":39,"CHDL":39,"gardenStuff":4}
//       },
//       {
//       "illName":"糖尿病风险",
//       "time":"2017-12-12",
//       "oProfile":{"name":"123","age":"23","sex":1},
//       "oParam":{"BMI":59,"waistline":28,"fastingBloodGlucose":39,"CHDL":39,"gardenStuff":4}
//       }
//     ]
//   }
// }
//-----------------------------------------------------------------------------------------------
//
//v0.1  :在oProfile增加phone电话号码
//v0.2  :可以修改风险评估

var riskLevel = {"Height":"高风险","Middle":"中等风险","Small":"较小风险"}
var dataFormat = {
  "健康报告":1,
  "糖尿病风险":2,
  "缺血性心脏病风险":3,
  "肺癌风险":4,
  "代谢综合征风险":5,
  "肥胖症风险" :6,
  "高血压风险":7,
  "骨质疏松性骨折风险":8,
  "血脂异常风险":9,
  "尼古丁成瘾" :10,
}

var abReportPageData = function(){
    this.illName = "";
    this.time = "";
    this.oProfile = {
      name : "",
      age : "",
      sex : 0,
      phone : "",
    }
    this.oParam = {
      riskLevel : riskLevel["Small"],
      illName   : ""
    };
};

abReportPageData.prototype.setData = function(oParam){
  this.oParam = oParam
}

abReportPageData.prototype.setProfile = function(oProfile){
  this.oProfile.name = oProfile.name;
  this.oProfile.sex  = oProfile.sex;
  this.oProfile.age  = oProfile.age;
  this.oProfile.phone = oProfile.phone;
}

abReportPageData.prototype.setTime = function(time){
  this.time = time;
}

abReportPageData.prototype.setRiskLevel = function(riskLevel){
  this.oParam.riskLevel = riskLevel;
}

abReportPageData.prototype.toJson = function(){
  var illJson = {
    illName : this.illName,
    oParam  : this.oParam,
  }
  return JSON.stringify(illJson);
}

abReportPageData.prototype.EncodeProtocal = function(){
  var value = {
    index   : this.oParam,
    profile : this.oProfile,
  }

  var Protocal = {
    illName   : this.illName,
    value     : value,
  }
  return JSON.stringify(Protocal);
}

// 报告页
var reportPageData = function(){
  abReportPageData.call(this);
  this.illName = "健康报告";
  this.oParam = {
    riskLevel : riskLevel["Small"],
    //数值
    weight : 0,   //体重
    height : 0,   //身高
    BMI    : 0,   //BMI值
    waistline : 0, //腰围
    fatRate : 0, //脂肪率
    bloodPressure : "", //血压
    fastingBloodGlucose : 0, //空腹血糖
    bloodUricAcid : 0, //血尿酸
    totalCholesterol : 0, //总胆固醇
    triglyceride :0, //甘油三酯
    CHDL : 0, //  高密度脂蛋白胆固醇
    CLDL :0,// 低密度脂蛋白胆固醇
    ureaNitrogen : 0, //尿素氮
    apolipoproteinA : 0, //载脂蛋白A
    apolipoproteinB : 0, //载脂蛋白B
    //评估报告
    hypertension : "", // 高血压
    fattyLiver : "", // 脂肪肝
    bloodFat : "",//血脂
    thyroidFunction : "", //甲状腺功能
    tooth : "",//牙齿
    gout : "", // 痛风
    remark : "", // 备注
  }
}

reportPageData.prototype.setData = function(oParam){
  this.oParam.riskLevel = oParam.riskLevel;
  this.oParam.weight = oParam.weight;   //体重
  this.oParam.height= oParam.height;  //身高
  this.oParam.BMI    = oParam.BMI;   //BMI值
  this.oParam.waistline = oParam.waistline; //腰围
  this.oParam.fatRate = oParam.fatRate; //脂肪率
  this.oParam.bloodPressure = oParam.bloodPressure; //血压
  this.oParam.fastingBloodGlucose = oParam.fastingBloodGlucose; //空腹血糖
  this.oParam.bloodUricAcid = oParam.bloodUricAcid; //血尿酸
  this.oParam.totalCholesterol = oParam.totalCholesterol; //总胆固醇
  this.oParam.triglyceride =oParam.triglyceride; //甘油三酯
  this.oParam.CHDL = oParam.CHDL; //  高密度脂蛋白胆固醇
  this.oParam.CLDL = oParam.CLDL;// 低密度脂蛋白胆固醇
  this.oParam.ureaNitrogen = oParam.ureaNitrogen; //尿素氮
  this.oParam.apolipoproteinA = oParam.apolipoproteinA; //载脂蛋白A
  this.oParam.apolipoproteinB = oParam.apolipoproteinB; //载脂蛋白B
  this.oParam.hypertension = oParam.hypertension; // 高血压
  this.oParam.fattyLiver = oParam.fattyLiver; // 脂肪肝
  this.oParam.bloodFat = oParam.bloodFat;//血脂
  this.oParam.thyroidFunction = oParam.thyroidFunction; //甲状腺功能
  this.oParam.tooth = oParam.tooth; //牙齿
  this.oParam.gout = oParam.gout;// 痛风
  this.oParam.remark = oParam.remark; //备注
}

reportPageData.prototype.setProfile = function(oProfile){
  abReportPageData.prototype.setProfile.call(this,oProfile);
}

reportPageData.prototype.setTime = function(time){
  abReportPageData.prototype.setTime.call(this,time);
}

reportPageData.prototype.toJson = function(){
  return abReportPageData.prototype.toJson.call(this);
}

reportPageData.prototype.EncodeProtocal = function(){
  return abReportPageData.prototype.EncodeProtocal.call(this);
}


//糖尿病
var diabetesPageData = function(){
  abReportPageData.call(this);
  this.illName = "糖尿病风险"
  this.oParam = {
    riskLevel : riskLevel["Small"],
    weight  :0, //体重
    height  :0, //身高
    BMI       :0,   //BMI值
    waistline :0,   //腰围
    fastingBloodGlucose : 0, //空腹血糖 与DiFPG重复目前先使用
    CHDL  : 0,//高密度脂蛋白
    gardenStuff : 0,//蔬菜摄入量
    DiFPG : 0, //空腹血糖浓度
    DiFI  : 0, //空腹胰岛素
    DiGH  : 0, //糖化血红蛋白
    triglyceride : 0,       //甘油三酯
  }
}

diabetesPageData.prototype.setData = function(oParam){
  this.oParam.riskLevel = oParam.riskLevel;
  this.oParam.BMI       = oParam.BMI;   //BMI值
  this.oParam.waistline = oParam.waistline;   //腰围
  this.oParam.weight    = oParam.weight;
  this.oParam.height    = oParam.height;
  this.oParam.fastingBloodGlucose = oParam.fastingBloodGlucose; //空腹血糖
  this.oParam.CHDL  = oParam.CHDL;//高密度脂蛋白
  this.oParam.gardenStuff = oParam.gardenStuff;//蔬菜摄入量
  this.oParam.DiFPG = oParam.DiFPG;
  this.oParam.DiFI = oParam.DiFI;
  this.oParam.DiGH = oParam.DiGH;
  this.oParam.triglyceride = oParam.triglyceride;       //甘油三酯
}

diabetesPageData.prototype.setProfile = function(oProfile){
  abReportPageData.prototype.setProfile.call(this,oProfile);
}

diabetesPageData.prototype.setTime = function(time){
  abReportPageData.prototype.setTime.call(this,time);
}

diabetesPageData.prototype.toJson = function(){
  return abReportPageData.prototype.toJson.call(this);
}

diabetesPageData.prototype.EncodeProtocal = function(){
  return abReportPageData.prototype.EncodeProtocal.call(this);
}


//缺血性心脏病
var ischemicHeartDisease = function(){
  abReportPageData.call(this);
  this.illName = "缺血性心脏病风险";
  this.oParam = {
    riskLevel : riskLevel["Small"],
    totalCholesterol : 0, //总胆固醇
    systolicPressure : 0, //收缩压
    homocysteine     : 0, //同型半胱氨酸
    height           : 0, //身高
    weight           : 0, //体重
    BMI       :0,   //BMI值
  }
}

ischemicHeartDisease.prototype.setData = function(oParam){
  this.oParam.riskLevel = oParam.riskLevel;
  this.oParam.totalCholesterol = oParam.totalCholesterol;//总胆固醇
  this.oParam.systolicPressure = oParam.systolicPressure;     //收缩压
  this.oParam.homocysteine     = oParam.homocysteine; //同型半胱氨酸
  this.oParam.height           = oParam.height;
  this.oParam.weight           = oParam.weight;
  this.oParam.BMI  = oParam.BMI;   //BMI值
}

ischemicHeartDisease.prototype.setProfile = function(oProfile){
  abReportPageData.prototype.setProfile.call(this,oProfile);
}

ischemicHeartDisease.prototype.setTime = function(time){
  abReportPageData.prototype.setTime.call(this,time);
}

ischemicHeartDisease.prototype.toJson = function(){
  return abReportPageData.prototype.toJson.call(this);
}

ischemicHeartDisease.prototype.EncodeProtocal = function(){
  return abReportPageData.prototype.EncodeProtocal.call(this);
}

//肺癌
var lungCancerPageData = function(){
  abReportPageData.call(this);
  this.illName = "肺癌风险";
  this.oParam = {
    riskLevel : riskLevel["Small"],
    gardenStuff : 0
  }
}

lungCancerPageData.prototype.setData = function(oParam){
  this.oParam.riskLevel = oParam.riskLevel;
  this.oParam.gardenStuff = oParam.gardenStuff;//蔬菜摄入量
}

lungCancerPageData.prototype.setProfile = function(oProfile){
  abReportPageData.prototype.setProfile.call(this,oProfile);
}

lungCancerPageData.prototype.setTime = function(time){
  abReportPageData.prototype.setTime.call(this,time);
}

lungCancerPageData.prototype.toJson = function(){
  return abReportPageData.prototype.toJson.call(this);
}

lungCancerPageData.prototype.EncodeProtocal = function(){
  return abReportPageData.prototype.EncodeProtocal.call(this);
}

//代谢综合征
var metabolicSyndromePageData = function(){
  abReportPageData.call(this);
  this.illName  = "代谢综合征风险";
  this.oParam = {
    riskLevel : riskLevel["Small"],
    waistline :0,   //腰围
    fastingBloodGlucose : 0, //空腹血糖
    CHDL  : 0,          //高密度脂蛋白
    triglyceride :0,    //甘油三酯
    bloodPressure : "", //血压
  }
}

metabolicSyndromePageData.prototype.setData = function(oParam){
  this.oParam.riskLevel = oParam.riskLevel;
  this.oParam.waistline = oParam.waistline;   //腰围
  this.oParam.fastingBloodGlucose = oParam.fastingBloodGlucose; //空腹血糖
  this.oParam.CHDL  = oParam.CHDL;//高密度脂蛋白
  this.oParam.triglyceride = oParam.triglyceride; //甘油三酯
  this.oParam.bloodPressure = oParam.bloodPressure;//血压
}

metabolicSyndromePageData.prototype.setProfile = function(oProfile){
  abReportPageData.prototype.setProfile.call(this,oProfile);
}

metabolicSyndromePageData.prototype.setTime = function(time){
  abReportPageData.prototype.setTime.call(this,time);
}

metabolicSyndromePageData.prototype.toJson = function(){
  return abReportPageData.prototype.toJson.call(this);
}

metabolicSyndromePageData.prototype.EncodeProtocal = function(){
  return abReportPageData.prototype.EncodeProtocal.call(this);
}


// 肥胖症
var obesityPageData = function(){
  abReportPageData.call(this);
  this.illName = "肥胖症风险";
  this.oParam = {
    riskLevel : riskLevel["Small"],
    waistline : 0,          //腰围
    weight    : 0,          //体重
    height    : 0,          //身高
    BMI       : 0,
    bodyFatPercentage : 0,   //体脂率
    ObHis     : 0,  //肥胖家族史
  }
}

obesityPageData.prototype.setData = function(oParam){
  this.oParam.riskLevel = oParam.riskLevel;
  this.oParam.waistline = oParam.waistline;   //腰围
  this.oParam.BMI       = oParam.BMI;   //BMI值
  this.oParam.height    = oParam.height;
  this.oParam.bodyFatPercentage = oParam.bodyFatPercentage; //体脂率
  this.oParam.ObHis     = oParam.ObHis;
  this.oParam.weight    = oParam.weight;
}

obesityPageData.prototype.setProfile = function(oProfile){
  abReportPageData.prototype.setProfile.call(this,oProfile);
}

obesityPageData.prototype.setTime = function(time){
  abReportPageData.prototype.setTime.call(this,time);
}

obesityPageData.prototype.toJson = function(){
  return abReportPageData.prototype.toJson.call(this);
}

obesityPageData.prototype.EncodeProtocal = function(){
  return abReportPageData.prototype.EncodeProtocal.call(this);
}

//高血压
var hypertensionPageData = function(){
  abReportPageData.call(this);
  this.illName   = "高血压风险";
  this.oParam = {
    riskLevel : riskLevel["Small"],
    systolicPressure : 0,     //收缩压
    diastolicPressure : 0,    //舒张压
    weight    : 0,          //体重
    height    : 0,          //身高
    BMI  : 0
  }
}

hypertensionPageData.prototype.setData = function(oParam){
  this.oParam.riskLevel = oParam.riskLevel;
  this.oParam.systolicPressure = oParam.systolicPressure;     //收缩压
  this.oParam.diastolicPressure = oParam.diastolicPressure;    //舒张压
  this.oParam.BMI  = oParam.BMI;
  this.oParam.height           = oParam.height;
  this.oParam.weight           = oParam.weight;
}

hypertensionPageData.prototype.setProfile = function(oProfile){
  abReportPageData.prototype.setProfile.call(this,oProfile);
}

hypertensionPageData.prototype.setTime = function(time){
  abReportPageData.prototype.setTime.call(this,time);
}

hypertensionPageData.prototype.toJson = function(){
  return abReportPageData.prototype.toJson.call(this);
}

hypertensionPageData.prototype.EncodeProtocal = function(){
  return abReportPageData.prototype.EncodeProtocal.call(this);
}

//骨质疏松性骨折
var osteoporoticFractureBonePageData = function(){
  abReportPageData.call(this);
  this.illName = "骨质疏松性骨折风险";
  this.oParam = {
    riskLevel : riskLevel["Small"],
    boneDensity : 0 //骨密度值
  }
}

osteoporoticFractureBonePageData.prototype.setData = function(oParam){
  this.oParam.riskLevel = oParam.riskLevel;
  this.oParam.boneDensity = oParam.boneDensity;
}

osteoporoticFractureBonePageData.prototype.setProfile = function(oProfile){
  abReportPageData.prototype.setProfile.call(this,oProfile);
}

osteoporoticFractureBonePageData.prototype.setTime = function(time){
  abReportPageData.prototype.setTime.call(this,time);
}

osteoporoticFractureBonePageData.prototype.toJson = function(){
  return abReportPageData.prototype.toJson.call(this);
}

osteoporoticFractureBonePageData.prototype.EncodeProtocal = function(){
  return abReportPageData.prototype.EncodeProtocal.call(this);
}

//血脂异常风险
var dyslipidemiaPageData = function(){
  abReportPageData.call(this);
  this.illName = "血脂异常风险";
  this.oParam = {
    riskLevel : riskLevel["Small"],
    totalCholesterol : 0, //总胆固醇
    triglyceride :0, //甘油三酯
    height :0,
    weight :0,
    CHDL : 0, //  高密度脂蛋白胆固醇
    CLDL : 0,// 低密度脂蛋白胆固醇
    BMI  : 0
  }
}

dyslipidemiaPageData.prototype.setData = function(oParam){
  this.oParam.riskLevel = oParam.riskLevel;
  this.oParam.totalCholesterol = oParam.totalCholesterol;
  this.oParam.triglyceride = oParam.triglyceride;
  this.oParam.CHDL = oParam.CHDL;
  this.oParam.CLDL = oParam.CLDL;
  this.oParam.BMI  = oParam.BMI;
  this.oParam.height           = oParam.height;
  this.oParam.weight           = oParam.weight;
}

dyslipidemiaPageData.prototype.setProfile = function(oProfile){
  abReportPageData.prototype.setProfile.call(this,oProfile);
}

dyslipidemiaPageData.prototype.setTime = function(time){
  abReportPageData.prototype.setTime.call(this,time);
}

dyslipidemiaPageData.prototype.toJson = function(){
  return abReportPageData.prototype.toJson.call(this);
}

dyslipidemiaPageData.prototype.EncodeProtocal = function(){
  return abReportPageData.prototype.EncodeProtocal.call(this);
}

//尼古丁成瘾
var nicotineAddictionPageData = function(){
  abReportPageData.call(this);
  this.illName = "尼古丁成瘾";
  this.oParam = {
    riskLevel : riskLevel["Small"],  //成瘾程度
    target    : 0,  //目标控制吸烟每日数量
    current   : 0,  //当前吸烟数量情况
  }
}

nicotineAddictionPageData.prototype.setData = function(oParam){
  this.oParam.riskLevel = oParam.riskLevel;
  this.oParam.target    = oParam.target;
  this.oParam.current   = oParam.current;
}

nicotineAddictionPageData.prototype.setProfile = function(oProfile){
  abReportPageData.prototype.setProfile.call(this,oProfile);
}

nicotineAddictionPageData.prototype.setTime = function(time){
  abReportPageData.prototype.setTime.call(this,time);
}

nicotineAddictionPageData.prototype.toJson = function(){
  return abReportPageData.prototype.toJson.call(this);
}

nicotineAddictionPageData.prototype.EncodeProtocal = function(){
  return abReportPageData.prototype.EncodeProtocal.call(this);
}



function getDataFormat(illIndex){
  switch (illIndex) {
    case 1:
      return new reportPageData();
      break;
    case 2:
      return new diabetesPageData();
      break;
    case 3:
      return new ischemicHeartDisease();
      break;
    case 4:
      return new lungCancerPageData();
      break;
    case 5:
      return new metabolicSyndromePageData();
      break;
    case 6:
      return new obesityPageData();
      break;
    case 7:
      return new hypertensionPageData();
      break;
    case 8:
      return new osteoporoticFractureBonePageData();
      break;
    case 9:
      return new dyslipidemiaPageData();
      break;
    case 10:
      return new nicotineAddictionPageData();
    default:
      dataFormatObj = null;
      break;
  }
}

// 协议聚集类
var reportPageDataList = function(){
  this.oProfile = {
    name : "",
    age  : "",
    sex  : 0,
    phone: "",
  }

  this.protocol = {
    oProfile : "",
    time : "",
    oParam : "",
  }

  this.value = {
    value : "",
  }
  this.reportPageData = [];
  this.time = "1970-1-1";
}

reportPageDataList.prototype.setProfile = function(oProfile){
  this.oProfile.name = oProfile.name;
  this.oProfile.age  = oProfile.age;
  this.oProfile.sex  = oProfile.sex;
  this.oProfile.phone = oProfile.phone;
}

reportPageDataList.prototype.getKey = function(){
  return this.oProfile.name + "_" + this.oProfile.age + "_" + this.oProfile.sex + "_" + this.oProfile.phone;
}

reportPageDataList.prototype.setTime = function(time){
  this.time = time;
}

reportPageDataList.prototype.collectData = function(data){
  this.reportPageData.push(data);
}

reportPageDataList.prototype.clear = function(){
  this.reportPageData.length = 0;
}

reportPageDataList.prototype.EncodeProtocal = function(){
  this.protocol.time = this.time;
  this.protocol.oParam = this.reportPageData;
  this.protocol.oProfile = this.oProfile;

  this.value.value = this.protocol;
  return JSON.stringify(this.value);
}
