var image;
var fgimage;
var bgimage;
function upload(){
  var imgcanvas=document.getElementById("can");
  var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}

function turngray(){
	for(var pixel of image.values()){
			var a=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
			pixel.setRed(a);
			pixel.setBlue(a);
			pixel.setGreen(a);
			}
	var imgcanvas=document.getElementById("can");
	image.drawTo(imgcanvas);
}
function rainbow(){
	var h=image.getHeight();
	for(var pixel of image.values()){
		var y=pixel.getY();
		var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
		if(avg<128){
		switch (true){
			case (y<=h/7):				
				pixel.setRed(2*avg);
				break;
			case (y>h/7 && y<=2*h/7):
				pixel.setRed(2*avg);
				pixel.setGreen(0.8*avg);
				break;
			case (y>2*h/7 && y<=3*h/7):
				pixel.setRed(2*avg);
				pixel.setGreen(2*avg);
				break;
			case (y>3*h/7 && y<=4*h/7):
				pixel.setGreen(2*avg);
				break;
			case (y>4*h/7 && y<=5*h/7):
				pixel.setBlue(2*avg);
				break;
			case (y>5*h/7 && y<=6*h/7):
				pixel.setRed(0.8*avg);
				pixel.setBlue(2*avg);
				break;
			default:
				pixel.setRed(1.6*avg);
				pixel.setBlue(1.6*avg);
				break;
		}
		}
		else{
			switch (true){
			case (y<=h/7):				
				pixel.setRed(255);
				pixel.setGreen(2*avg-255);
				pixel.setBlue(2*avg-255);
				break;
			case (y>h/7 && y<=2*h/7):
				pixel.setRed(255);
				pixel.setGreen((1.2*avg)-51);
				pixel.setBlue((2*avg)-255);
				break;
			case (y>2*h/7 && y<=3*h/7):
				pixel.setRed(pixel.setRed(255));
				pixel.setGreen(255);
				pixel.setBlue((2*avg)-255);
				break;
			case (y>3*h/7 && y<=4*h/7):
				pixel.setRed((2*avg)-255);
				pixel.setGreen(255);
				pixel.setBlue((2*avg)-255);
				break;
			case (y>4*h/7 && y<=5*h/7):
				pixel.setRed((2*avg)-255);
				pixel.setGreen((2*avg)-255);
				pixel.setBlue(255);
				break;
			case (y>5*h/7 && y<=6*h/7):
				pixel.setRed((1.2*avg)-51);
				pixel.setGreen((2*avg)-255);
				pixel.setBlue(255);
				break;
			default:
				pixel.setRed((0.4*avg)+153);
				pixel.setGreen((2*avg)-255);
				pixel.setBlue((0.4*avg)+153);
				break;
		}
		}
	}
	var imgcanvas=document.getElementById("can");
	image.drawTo(imgcanvas);
}