function upload1(){
	var imgcanvas=document.getElementById("can1");
	var fileinput=document.getElementById("finput1");
	fgimage=new SimpleImage(fileinput);
	fgimage.drawTo(imgcanvas);
}
function upload2(){
	var imgcanvas=document.getElementById("can2");
	var fileinput=document.getElementById("finput2");
	bgimage=new SimpleImage(fileinput);
	bgimage.drawTo(imgcanvas);
}
function greenscreen(){
	var output=new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
	bgimage.setSize(fgimage.getWidth(),fgimage.getHeight());
	for(var pixel of fgimage.values()){
		var x=pixel.getX();
		var y=pixel.getY();
		var pixel2=bgimage.getPixel(x,y);
		if(pixel.getGreen()>(pixel.getBlue()+pixel.getRed())){
		output.setPixel(x,y,pixel2);
		}
		else{
			output.setPixel(x,y,pixel);
		}
	}
	var imgcanvas1=document.getElementById("can1");
	var imgcanvas2=document.getElementById("can2");
	output.drawTo(imgcanvas1);
	var ctx=imgcanvas2.getContext("2d");
	ctx.clearRect(0,0,imgcanvas2.width,imgcanvas2.height);
	}