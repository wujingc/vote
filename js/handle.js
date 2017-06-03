$(function(){
  function showText(text) {
    $(".text").text(text);
    $(".text").css('padding-top', '2px');
    setTimeout(function(){
      $(".text").text('');
      $(".text").css('padding-top', 0);
    }, 1000)
  }
  $(".vote-btn").on('click', function(){

      $.jsonp({
          url:'http://otc.finance.sina.com.cn/service/api/openapi.php/VoteService.setVote?callback=jQuery1112023504631878569506_1496488413337&wxflag=0&captcode=&roller_id=h1cXvQERTQ3QSPU-rc-gId5dB9YBtkmc1_MGXiq1ducitM-tTP4NRDyIjD-SxFR5cn7sKj5ONRwjpLxBEXzO8A&id=hyjy_ljrw_1011&appid=yinhang17&_=1496488413340',
          cache:true,
          callback:'jQuery1112023504631878569506_1496488413337',
          // 这个回调是会自动执行的
          success:function(result) {
              if (result.result.data.code == 1){
                showText('今天已经投过票了');
              } else if(result.result.data.code == 0) {
                showText('今天投票成功');
              }
          }
      });

  })  
});