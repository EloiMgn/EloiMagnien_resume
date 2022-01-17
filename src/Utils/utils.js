  function cursorOver(){
    '.cursor-follower'.stop().animate({width: 86, height: 86, opacity: 0.1, margin: '-43px 0 0 -43px'}, 500);
  }
  function cursorOut(){
  '.cursor-follower'.stop().animate({width: 26, height: 26, opacity: 0.4, margin: '-13px 0 0 -13px'}, 500);
  }