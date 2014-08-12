/**
 * Created by sky on 14-7-25.
 */
/********************************
*    Object define              *
********************************/

function userInfo(UserID,UserName,Modules) {
    this.UserID = UserID;
    this.UserName = UserName;
    this.Modules = Modules;
}



/********************************
 *    Global variant            *
 ********************************/
var storage = undefined;
var currentUser = undefined;
var modules = undefined;
var categories = undefined;



/********************************
 *   Public Methods             *
 ********************************/


/**   load data from a array json */

function loadFromArrayJson (e,a) {
   var result = [];
   var ref = {};
   for (var prop in e) {
      for (var i in a[0]) {
          if (prop === a[0][i])
              ref[prop] = i;
      }
   }

   for (var i in a[1]) {
      for (var prop in e) {
          if (ref[prop] !== undefined)
            e[prop] = a[1][i][ref[prop]];
      }
      result.push(e);
   }
   return result;
}

/**   set data to a array json  */

function setToArrayJson(a,e) {

}



String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})","g");
                    result = result.replace(reg,args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + i + "]})","g");
                    result=result.replace(reg,arguments[i]);
                }
            }
        }
    }
    return result;
}