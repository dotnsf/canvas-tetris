document.body.onkeydown = function( e ) {
    var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate',
        32: 'drop'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};

//. obniz
var obniz = new Obniz("XXXX-XXXX"); //. <-- Edit with your own Obniz ID
obniz.onconnect = async function(){
  obniz.display.clear();
  obniz.display.print( "Obniz TETRIS" );

  obniz.switch.onchange = function( state ){
    obniz.display.clear();
    obniz.display.print( state );

    switch( state ){
    case 'left':
      keyPress( 'left' );
      render();
      break;
    case 'right':
      keyPress( 'right' );
      render();
      break;
    case 'push':
      keyPress( 'rotate' );
      render();
      break;
    default:
    }
  }
}
