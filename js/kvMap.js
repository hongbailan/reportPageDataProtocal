//键值对集合
//
function kvMap(){
  this.data = new Array();
  this.key = new Array();

  this.put = function(key,value){
      if(-1 != scope.key.indexOf(key)){
        console.log("already have same key");
      }else{
        scope.data[key] = value;
        scope.key.push(key);
      }
    }

  this.get = function(key){
    return scope.data[key];
  }

  this.remove = function(key){
    index = scope.key.indexOf(key);
    scope.key.splice(index,1);
    return scope.data[key] = null;
  }

  this.clear = function(){
    scope.data.length = 0;
    scope.key.length = 0;
  }

  this.size = function(){
    return scope.data.length;
  }

  this.isEmpty = function(){
    return scope.data.length == 0;
  }

  this.hasKey = function(key){
    return -1 == scope.key.indexOf(key)
  }

  scope = this;
}
