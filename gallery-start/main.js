const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */
for(let i=1;i<=5;i++){
    const newImage = document.createElement('img');
    let newImagePath = "images/pic"+i.toString()+".jpg";
    newImage.setAttribute('src', newImagePath);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',function(){
        displayedImage.setAttribute('src',newImagePath);
    });
}

/* 编写 变暗/变量 按钮功能 */
btn.addEventListener('click',function(){
    if (btn.getAttribute('class')=="dark"){
        btn.textContent="变亮";
        btn.setAttribute('class',"light");
        overlay.style.backgroundColor="rgba(0,0,0,0.5)";
    }
    else{
        btn.textContent="变暗";
        btn.setAttribute('class',"dark");
        overlay.style.backgroundColor="rgba(0,0,0,0)";
    }   
});