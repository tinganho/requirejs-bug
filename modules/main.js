require.onError = function(err) {
  printStackTrace({e : err});
}

require([

  'a',
  'b'

], function(

  a,
  b

) {

  alert('I\'m the last');
  a();
  alert(b('wrong_credentials'));

});
