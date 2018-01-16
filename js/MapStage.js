// var datas = [{
//     "range": "(N-,60)",
//     "index": 1
// }, {
//     "range": "[60,100)",
//     "index": 2
// }, {
//     "range": "[100,150)",
//     "index": 3
// }, {
//     "range": "[150,N+)",
//     "index": 4
// }];
//获取判断块大小结果
var MapStage = function(num,datas){
    var result = null;

    for (var i = 0; i < datas.length; i++) {
        var data = datas[i];

        var minValueStr = data.range.split(",").shift().split("[").pop().split("(").pop();
        var minValue = parseFloat(data.range.split(",").shift().split("[").pop().split("(").pop());
        var minSymbol = data.range.charAt(0);

        var maxValueStr = data.range.split(",").pop().split("]").shift().split(")").shift();
        var maxValue = parseFloat(data.range.split(",").pop().split("]").shift().split(")").shift());
        var maxSymbol = data.range.substr(-1);

        if (isNaN(maxValue)) {
            // 如果最大值不存在，说明最大值等于无穷大，只看最小值
            if(minSymbol == "["){
                if (minValue <= num) {
                    result = data.index;
                    break;
                }
            }else if(minSymbol == "("){
                if (minValue < num) {
                    result = data.index;
                    break;
                }
            }
        } else if(isNaN(minValue)){
            // 如果最小值不存在，说明最小值等于无穷小，只看最大值
            if(maxSymbol == "]"){
                if (maxValue >= num) {
                    result = data.index;
                    break;
                }
            }else if(maxSymbol == ")"){
                if (maxValue > num) {
                    result = data.index;
                    break;
                }
            }
        } else {
            // 正常匹配
            if(minSymbol == "["){
                if (minValue <= num) { // 符合最小值范围
                    if(maxSymbol == "]"){
                        if (maxValue >= num) {
                            result = data.index;
                            break;
                        }
                    }else if(maxSymbol == ")"){
                        if (maxValue > num) {
                            result = data.index;
                            break;
                        }
                    }
                }
            }else if(minSymbol == "("){
                if (minValue < num) { // 符合最小值范围
                    if(maxSymbol == "]"){
                        if (maxValue >= num) {
                            result = data.index;
                            break;
                        }
                    }else if(maxSymbol == ")"){
                        if (maxValue > num) {
                            result = data.index;
                            break;
                        }
                    }
                }
            }
        }
    }
    return result;
}
