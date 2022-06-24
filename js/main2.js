const cvs=document.getElementById('cvs');
const ctx=cvs.getContext('2d');

cvs.width=800;
cvs.height=500;

ctx.fillStyle="#ddd";
ctx.fillRect(0,0,cvs.width,cvs.height);

const imgs=[new Image(),new Image(),new Image()];
const paths=["kaba1.jpg","kaba2.jpg","kaba3.jpg"];
for(let i=0;i<imgs.length;i++){
    imgs[i].src="./images/"+paths[i];
}

//callback関数（関数(function)を入れて利用するやーつって分かるもん)
const setLoadAllCallback=(imgs,callback) =>{
    let count =0;
    for(let i=0;i<imgs.length;i++){
        imgs[i].onload =()=>{
            ++count;
            if(count == imgs.length){
                callback(imgs);
            }
        };
    }
}

setLoadAllCallback(imgs,(imgs)=>{
    let count =0;
    let timerId=setInterval(()=>{
        count++;
        let idx=Math.floor(Math.random()*imgs.length);
        let img=imgs[idx];
        ctx.save();
        ctx.translate(Math.random()*cvs.width,Math.random()*cvs.height);
        ctx.rotate(Math.random()*2*Math.PI);
        let width = Math.floor(Math.random()*200)+100;
        ctx.drawImage(img,0,0,width,width*3/4);
        ctx.restore();
        if(count > 100){
            clearInterval(timerId);
        }
    },30);
});