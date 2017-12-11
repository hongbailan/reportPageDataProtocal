//协议解析类
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
//----------------------------------------------------------------------------------------------
// v0.1 增加电话号码的解析


var reportPageDataDecoder = function(data){
  this.JSONObj = null;
  if(typeof data == "string"){
    try{
        if(data.indexOf('{')>-1){
            this.JSONObj = JSON.parse(data);
          }
    }catch(e){
        console.log(e);
    }
  }
  this.kvMap = new kvMap();
  this.oProfile = {
    age : "",
    name : "",
    sex  : 0,
  }

  this.time = "1970-1-1";
}

//解析最外围json
reportPageDataDecoder.prototype.analyzeData = function(){
  if(this.JSONObj != null){
    this.oProfile.age  = this.JSONObj.value.oProfile.age;
    this.oProfile.name = this.JSONObj.value.oProfile.name;
    this.oProfile.sex  = this.JSONObj.value.oProfile.sex;
    this.oProfile.phone = this.JSONObj.value.oProfile.phone
    this.time = this.JSONObj.value.time;

    for (var i = 0; i < this.JSONObj.value.oParam.length; i ++){
      var obj = this.JSONObj.value.oParam[i];
      this.kvMap.put(obj.illName,obj);
    }
  }
}

reportPageDataDecoder.prototype.analyzeDecoder = function(illName){
  obj = this.kvMap.get(illName);
  decoderObj = getDataFormat(dataFormat[illName]);
  if(obj != null && decoderObj != null){
    decoderObj.setData(obj.oParam);
    decoderObj.setProfile(obj.oProfile);
    decoderObj.setTime(obj.time);
    return decoderObj;
  }else {
    return null;
  }
}

reportPageDataDecoder.prototype.clear = function(){
  this.kvMap.clear();
}
