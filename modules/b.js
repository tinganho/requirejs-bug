define(function() {
  var t = {
    "wrong_credentials": function anonymous(it) {
      return "Invalid email and/or password.";
    }
  };
  return function(translationKey) {
    if(!(translationKey in t)) {
      console.log("You have used an undefined translation key:" + translationKey);
      return false;
    }
    delete arguments[0];
    if("1" in arguments) {
      arguments[0] = arguments[1];
    }
    delete arguments[1];
    if(typeof t[translationKey] !== 'undefined') {
      return t[translationKey].apply(undefined, arguments);
    } else {
      if(typeof alert !== 'undefined') {
        alert(printStackTrace())
      }
    }
  };
});
