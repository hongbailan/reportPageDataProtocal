// 计算肥胖指数
function calcFatRate(BMI, Age, Sex, ObHis){
    if(Sex != 0 && Sex != 1){
        return false;
    }
    if(Age <= 18 || Age > 60){
        return false;
    }
    if(ObHis != 0 && ObHis != 1 && ObHis != 2){
        return false;
    }

    var WAge = 0;
    var WBMI = 0;
    var WSex = 0;

    WAge = 0.23 * Age;
    WBMI = 1.2 * BMI;
    WSex = 10.8 * Sex;

    var ObHisIndex = parseInt(WBMI + WAge - 5.4 - WSex);

    return ObHisIndex;
}

function clone(obj) {
    var o;
    if (typeof obj == "object") {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    o.push(clone(obj[i]));
                }
            } else {
                o = {};
                for (var j in obj) {
                    o[j] = clone(obj[j]);
                }
            }
        }
    } else {
        o = obj;
    }
    return o;
}


// 糖尿病值算法
var DegreeFactor = function (DiFPG,DiFI,DiGH){
    var Degree = 0;
    var conditionCount = 0;
    
    //空腹血糖浓度大于7.1为危险
    if(DiFPG >= 7.1){
        Degree = 2;     
    }else{
        
        //空腹血糖浓度在6.1至7.1之间,同时糖蛋白大于6,空腹胰岛素大于30为危险 三者同时发生为高危,只要发生一个或两个即为中等危险,没有发生则为低风险
        if(DiFPG >=6.1 && DiFPG < 7.1){conditionCount++;}
        if(DiFI >=30){conditionCount++;}
        if(DiGH >=6){conditionCount++;}
        switch(conditionCount){
            case 0 : Degree = 0; break;
            case 1 : Degree = 1; break;
            case 2 : Degree = 1; break;
            case 3 : Degree = 2; break;
        }
    }
    return Degree;
}


//体脂率风险算法
// 100 偏瘦,0 正常 ,1偏胖，2 肥胖 3 是肥胖1级
function ObBodyFatType(sex,fatRate){
    var retBodyFatType = 0;
    
    if(1 == sex){
        if(fatRate < 15){retBodyFatType = 100;}
        else if(fatRate >= 15 && fatRate < 20){retBodyFatType = 1;}
        else if(fatRate >= 20 && fatRate < 25){retBodyFatType = 1;}
        else if(fatRate >= 25 && fatRate < 30){retBodyFatType = 2;}
        else if(fatRate >= 30){retBodyFatType = 3;}
    }else if(0 == sex){
        if(fatRate < 20){retBodyFatType = 100;}
        else if(fatRate >= 20 && fatRate < 30){retBodyFatType = 1;}
        else if(fatRate >= 30 && fatRate < 35){retBodyFatType = 1;}
        else if(fatRate >= 35 && fatRate < 40){retBodyFatType = 2;}
        else if(fatRate >= 40){retBodyFatType = 3;}
    }
    return retBodyFatType;
}

//BMI风险算法
//100 偏瘦,0 正常 ,1偏胖，2 肥胖 3 是肥胖1级
function obBMIType(ObBMI){
    var retBMIType = 0;
    
    if(ObBMI < 18.5){retBMIType = 100;}
    else if(ObBMI >= 18.5 && ObBMI< 23){retBMIType = 100;}
    else if(ObBMI >= 23 && ObBMI< 25){retBMIType = 1;}
    else if(ObBMI >= 25 && ObBMI< 30){retBMIType = 2;}
    else if(ObBMI >= 30 && ObBMI< 35){retBMIType = 3;}
    else if(ObBMI >= 35 && ObBMI < 40){retBMIType = 4;}
    else if(ObBMI >= 40){retBMIType = 5;}
    return retBMIType;
}
