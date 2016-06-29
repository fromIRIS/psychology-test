/*
* Loading遮罩
* miqi
*/


// loading mask
var Loading = function() {
  var self = this;
  var hasDom = false;

  self.show = function() {

    if(!hasDom) {
      var $appendContainer = $('body');
      var dom = '<div class="joy-ui-loading j_JoyLoading">'+
                    '<div class="content-box">'+
                        '<div class="circle"></div>'+
                        '<span>加载中···</span>'+
                    '</div>'+
                '</div>';
      $appendContainer.append(dom);  
      hasDom = true;          
    }
    $('.j_JoyLoading').show();

  };

  self.hide = function() {
    if(!hasDom) {
      return;
    }
    $('.j_JoyLoading').hide();

  };

};

window.loading = new Loading();