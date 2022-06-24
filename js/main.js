const cvs=document.getElementById('cvs');
const ctx=cvs.getContext('2d');

cvs.width=800;
cvs.height=500;

ctx.fillStyle="#ddd";
ctx.fillRect(0,0,cvs.width,cvs.height);

ctx.fillStyle="blue";
ctx.fillRect(30,20,150,100);

ctx.strokeStyle="yellow";
ctx.lineWidth=4;
ctx.strokeRect(30,20,150,100);

ctx.strokeStyle="purple"
ctx.lineCap="round"

ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(150,250);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,300);
ctx.lineTo(200,300);
ctx.lineTo(200,450);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(250,70,50,0,Math.PI*2);
ctx.closePath();
ctx.fill();

ctx.fillStyle="yellow";
ctx.beginPath();
ctx.moveTo(250,200);
ctx.arc(250,200,50,  Math.PI / 6 , -1 * Math.PI/ 6, false);
ctx.closePath();
ctx.fill();

ctx.font =  "36px sans-serif";
ctx.fillText("こんちゃすCanvas",250,350);
ctx.font = "36px serif"
ctx.fillText("こんちゃすCanvas",250,400);

const img1=new Image();
img1.src="./images/kaba1.jpg";
img1.onload =()=>{
    //ctx.drawImage(img1,350,20);
    ctx.drawImage(img1,350,20,200,150);
}

const img2=new Image();
img2.src = "./images/kaba2.jpg";
img2.onload =()=>{
    ctx.save();
    ctx.translate(500,80);
    ctx.rotate(Math.PI /8);
    ctx.drawImage(img2,0,0,200,150);
    ctx.restore();
}

const img3=new Image();
img3.src="./images/kaba3.jpg";
img3.onload =()=>{
    for(let i=0;i<8;i++){
        ctx.save();
        ctx.translate(600,300);
        ctx.rotate(Math.PI / 4 * i);
        ctx.drawImage(img3,0,0,200,150);
        ctx.restore();
    }
}