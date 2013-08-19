define(['b'], function(b) {
  alert(b('wrong_credentials'));
  return function() {
    alert('I got called');
  };
});
