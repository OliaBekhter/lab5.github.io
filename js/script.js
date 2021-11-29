function printArr() {
	console.log("Array");
	let y = 0;
    var arrY=Array();
    var arrX=Array();
    let i=0;
    document.getElementById("test").innerHTML+="Array: <br>";
	for (let x = 0; x <= 5; x+=0.5) {
        arrX[i]=x;
		y = Math.pow(x, 1.5);
        arrY[i]=y;
		document.getElementById("test").innerHTML+="x = " + arrX[i]+", y = " + arrY[i] + "<br>";
        i++;
	}
}