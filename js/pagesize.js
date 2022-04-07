$(function(){
  if(document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight){
	 var winHeight =	document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
	 var topPadding = (winHeight-370)/2;
	 $('#topPadding').css('padding-top',topPadding + 'px');
	}else {
	 var winHeight02 = window.innerHeight;
	 var topPadding02 = (winHeight02-350)/2;
	 $('#topPadding').css('padding-top',topPadding02 + 'px');
	}	
});

// ウィンドウ横幅サイズを取得する関数
function getWindowHeight(){
		var changeHeight;
		changeHeight = window.innerHeight;
		return changeHeight;
}
// onresizeで横幅サイズが変わった時のイベント
window.onresize = function() {
		var changeHeight = getWindowHeight();
		if(document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight){
			var changePadding = (changeHeight-370)/2;
			$('#topPadding').css('padding-top',changePadding + 'px');
		}else {
			var changePadding = (changeHeight-370)/2;
			$('#topPadding').css('padding-top',changePadding + 'px');
		}
}