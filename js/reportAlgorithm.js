//健康算法用与根据客户参数算出具体客户的患病风险
//所有健康算法汇总
//入参类（标准的入参条件）
//导致的问题
//结果类

// 配置表
var Configuration = {
  "BMIGrade":[{
          "range": "(N-,18.5)",
          "index": "Shape1"
      }, {
          "range": "[18.5,24)",
          "index": "Shape2"
      }, {
          "range": "[24,28)",
          "index": "Shape3"
      }, {
          "range": "[28,N+)",
          "index": "Shape4"
      }],
};

//由入参，标准，算法，结果组成
var abHealthyAlgorithm = function(){
  //算法名
  this.algorithmName = "";
  //入参
  this.abReportPageData = null;
}

abHealthyAlgorithm.prototype.setParam = function(abReportPageData){
  this.abReportPageData = abReportPageData;
}

abHealthyAlgorithm.prototype.run = function(){
  return "我是个算法抽象模版";
}

//肥胖算法
var BMIAlgorithm = function(){
  abHealthyAlgorithm.call(this);
  this.algorithmName = "BMI算法";
}

BMIAlgorithm.prototype = new abHealthyAlgorithm();
BMIAlgorithm.prototype.constructor = BMIAlgorithm;

BMIAlgorithm.prototype.setParam = function(obesityPageData){
  this.obesityPageData = obesityPageData;
}

BMIAlgorithm.prototype.run = function(){
  var BMI = this.obesityPageData.oParam.BMI;
  result = MapStage(BMI,Configuration.BMIGrade);
  return result;
}

var healthyAlgorithms = {
  "BMI":function(obesityPageData){
    aBMIAlgorithm = new BMIAlgorithm();
    aBMIAlgorithm.setParam(obesityPageData);
    return aBMIAlgorithm.run();
  }
}

var getHealthyAlgorithms = function(name,abHealthyAlgorithm){
  return healthyAlgorithms['BMI'](abHealthyAlgorithm);
}
