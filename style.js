function style2()
{
makeList();
}

function findStyles(enabled)
{
var styles=[];
var all = document.getElementsByTagName("link");
var i=0;
var maxx=all.length-1;
while(i<maxx+1)
{
	var style = document.getElementsByTagName("link")[i];
        var title=style.getAttribute("title");
        if (title && (enabled==null || style.disabled == !enabled))
        styles.push(style);
        i+=1;
}
   return styles;
}

function makeList()
{
var styles = findStyles(null);
var list = "";
for (var i = 0; i < styles.length; i++) {
		var title = (styles[i]).getAttribute("title");
    list += '<a class="style_item" href="#" onclick="setStyle(\'' + title + '\'); return false;">Styl ' + title + '</a>';
	}

document.getElementsByClassName("menu")[0].innerHTML += list;
}

function setStyle(name) {
	var styles = findStyles(null);
	
	for (var i = 0; i < styles.length; i++) {
		styles[i].disabled = true;

		if ((styles[i]).getAttribute("title") == name)
			styles[i].disabled = false;
	}
}



function getStyle() {
	var styles = findStyles(true);
	
	if (styles.length > 0)
		return styles[0].getAttribute("title");
	else
		return null;
}


function createCookie(name, value, days) {
	var date = new Date();
	date.setTime(date.getTime() + (days*24*3600));
	var expires = date.toGMTString();
	document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
}


function readCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2)
		return parts.pop().split(";").shift();
	else
		return null;
}

window.onload = function(e) {
	var styleCookie = readCookie("style");
	var styleTitle = styleCookie ? styleCookie : getStyle();
	setStyle(styleTitle); 
}

window.onunload = function(e) {
	var styleTitle = getStyle(); 
	createCookie("style", styleTitle, 10);
}

var styleCookie = readCookie("style");
var styleTitle = styleCookie ? styleCookie : getStyle();
setStyle(styleTitle);

