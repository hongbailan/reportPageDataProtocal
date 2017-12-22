function buttonclick(){
  var newDataFormatObj = null;
  newDataFormatObj = getDataFormat(dataFormat["糖尿病风险"]);
  console.log(newDataFormatObj);
  oParam = {
    riskLevel : riskLevel["Height"],
    height : 99,
    weight :90,
    BMI       :233,   //BMI值
    waistline :28,   //腰围
    fastingBloodGlucose : 39, //空腹血糖
    CHDL  : 39,//高密度脂蛋白
    gardenStuff : 4,//蔬菜摄入量
    triglyceride : 0,
  }

  oProfile = {
    name : "李",
    age : "23",
    sex : 1,
    phone: "142229192",
  }

  newDataFormatObj.setData(oParam);
  newDataFormatObj.setProfile(oProfile);
  newDataFormatObj.setTime("2017-12-12");


  // var strProtocol = newDataFormatObj.EncodeProtocal();
  // console.log(strProtocol);

  var newDataFormatniguding = null;
  newDataFormatniguding = getDataFormat(dataFormat["尼古丁成瘾"]);
  console.log(newDataFormatniguding);
  oParamniguding = {
    riskLevel : riskLevel["Height"],  //成瘾程度
    target    : 10,  //目标控制吸烟每日数量
    current   : 5,  //当前吸烟数量情况
  }
  newDataFormatniguding.setData(oParamniguding);
  newDataFormatniguding.setProfile(oProfile);
  newDataFormatObj.setTime("2017-12-12");



  reportPageDataList = new reportPageDataList();
  reportPageDataList.setProfile(oProfile);
  reportPageDataList.setTime("1209-1-1");
  reportPageDataList.collectData(newDataFormatObj);
  reportPageDataList.collectData(newDataFormatniguding);
  var strFinalProtocol = reportPageDataList.EncodeProtocal();
  console.log(strFinalProtocol);
  key = reportPageDataList.getKey();

  console.log(key);

  $.ajax({
      // url:"http://192.168.0.184:8080/kvstore ",
      url:"http://uf.gqlife.cn/ws/kvstore",
      //url:"http://127.0.0.1:8080/kvstore",
      cache: false,
      type: "POST",
      data:{
          "action":"store",
          "key": key,
          "value":strFinalProtocol,
      },
      error:function(e){
          console.log("发生错误");
          console.log(e);
      },
      success:function(data) {
        console.log("存入成功");
      }
  });

}

var rpdDecoder = null;

function buttonget(){
  $.ajax({
      url:"http://uf.gqlife.cn/ws/kvstore",
      //url:"http://127.0.0.1:8081/kvstore",
      cache: false,
      type: "POST",
      data:{
          "action":"query",
          "key": "recent",
      },
      error:function(e){
          console.log("发生错误");
          console.log(e);
      },
      success:function(data) {
        rpdDecoder = new reportPageDataDecoder(data);
        rpdDecoder.analyzeData();
        rpdData = rpdDecoder;
      }
    });
  }

function buttongetData(){
  if(rpdDecoder != null){
    obj = rpdDecoder.analyzeDecoder('糖尿病风险');
    if(obj != null){
      console.log(obj.toJson());
    }
    objniguding = rpdDecoder.analyzeDecoder('尼古丁成瘾');
    if (obj != null){
      console.log(objniguding.toJson());
    }
  }
}

function buttongetKeys(){
  $.ajax({
    url:"http://127.0.0.1:8080/kvstore",
    cache:false,
    type:"POST",
    data:{
      "action":"getUser",
      "key":"getall",
    },
    error:function(e){
      console.log("发送错误");
      console.log(e);
    },
    success:function(data){
      console.log(data);
      var keys = eval ("(" + data + ")");
      obj = analyzeProfile(keys.keys[1]);
      console.log(obj);
    }
  })
}
