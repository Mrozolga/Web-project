flaga=1;
flaga1=1;
var czas = -1
function odliczaj(){
	var d = new Date();
    	var n = d.getHours();
	var n2 = d.getMinutes();
	var n3 = d.getSeconds();
	n3++
	if (flaga==1)
{
	document.getElementById('czas').value =("0"+n).slice(-2)+":"+("0"+n2).slice(-2)+":"+("0"+n3).slice(-2);
}
	setTimeout("odliczaj()",1000);
if (flaga1==1)
{
	document.getElementById('data').value =d.getFullYear()+":"+("0" + (d.getMonth() + 1)).slice(-2)+":"+("0" + d.getDay()).slice(-2);
}
}

function walidacja()
{
  var z=document.getElementById('czas').value;
  var re = new RegExp("^..:..:..$");
  var res = z.split(":");
  var res1 = parseInt(res[0],10)+1;
  var res2 = parseInt(res[1],10)+1;
  var res3 = parseInt(res[2],10)+1;
  if(re.test(z)!=true || res1<0 || res1>24 || res2<0 || res2>60 || res3<0 || res3>60)
	{
	flaga=1;
	alert("zmieniam flage");
	return flaga;
	}
}

function walidacja2()
{
  var z=document.getElementById('data').value;
  var re = new RegExp("^..:..:..$");
  var res = z.split(":");
  var res1 = parseInt(res[0],10);
  var res2 = parseInt(res[1],10);
  var res3 = parseInt(res[2],10);
  if (res2<0 || res2>12 || res1<0)
{alert("0");flaga1=1; return flaga1;}
  if (res2%2==0 && res2!=2 && res2!=8)
 {
	if (res3>30 || res3<0){alert("1");flaga1=1; return flaga1;}
 }
 if(res2%2==1 || res2==8)
 {
	if (res3>31 || res3<0){alert("2");flaga1=1; return flaga1;}
 }
 if (res2==2 && res1%4==0)
 {
        if (res3>28 || res3<0){alert("3");flaga1=1; return flaga1;}
}
  if(re.test(z)!=true)
	{
        alert("4");
	flaga1=1;
	return flaga1;
	}
}
function addFileButton() {
	var container = document.getElementById("files");
	childCount = container.children.length;
	buttonCount = (childCount + 1) / 2;
	
	for (var i = 1; i < childCount; i += 2) {
		if (container.children[i].value == "")
			return;
	}

	container.appendChild(document.createElement("br"));
	var input = document.createElement("input");
	input.type = "file";
	input.name = "attach" + (buttonCount + 1);
	input.onchange = function() { addFileButton(); };
	container.appendChild(input);
}
