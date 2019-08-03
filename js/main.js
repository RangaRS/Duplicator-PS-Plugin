/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
                
        themeManager.init();
                
        $("#btn_Horz").click(function () {
          var space = $("input[name=space-2]").val();
          var count = $("input[name=count-2]").val();
          var grp = $("#grpState"). prop("checked");
          var axis = 2;
          
            csInterface.evalScript('sayHello('+ space +','+ count +','+ axis +',' + grp +')');
        });
      
        $("#btn_Vert").click(function () {
          var space = $("input[name=space-2]").val();
          var count = $("input[name=count-2]").val();
          var grp = $("#grpState"). prop("checked");
          var axis = 1;
            csInterface.evalScript('sayHello('+ space +','+ count +','+ axis +',' + grp +')');
        });
    }
        
    init();

}());
    
