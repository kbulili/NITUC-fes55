var option = {
    zoom : 18,  //縮尺(0に近いほど広範囲を表示)
    center : centerPosition, //地図の中心座標
    mapTypeId : google.maps.MapTypeId.ROADMAP //地図の種類を指定
};
var googlemap = new google.maps.Map(document.getElementById("mapField"), option);

//マーカーオプションの指定
var markerOption = {
    position : centerPosition, //マーカーを表示させる座標
    map : googlemap,  //マーカーを表示させる地図
    title : "ホームページ制作スタイル"  //マウスオーバーした際に表示させる文字列
};

//マーカー追加
var marker = new google.maps.Marker(markerOption);
//情報ウインドウオプションの指定
    var infoWindowOption = {
    position : centerPosition,  //中心座標
    content : "ホームページ制作スタイル"  //ウインドウ内に表示する文字列
};

//情報ウインドウ追加
var infoWindow = new google.maps.InfoWindow(infoWindowOption);
infoWindow.open(googlemap);
