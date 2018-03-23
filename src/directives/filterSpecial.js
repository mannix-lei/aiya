/**
 * Created by Tellyes_worker on 2018/1/12/0012.
 */
import Vue from 'vue'

Vue.directive('fileSpecial',function(bind){
  console.info(bind)
  var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
  var rs = "";
  for (var i = 0; i < bind.length; i++) {
    rs = rs + bind.substr(i, 1).replace(pattern, '');
  }
  return rs;
})
