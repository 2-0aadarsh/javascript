var btn = document.querySelector('button');
var image1 = document.querySelector('#img1');
var image2 = document.querySelector('#img2');

btn.addEventListener('click', function(){
    var src1 = image1.src;
    var src2 = image2.src;

    image1.src = src2;
    image2.src = src1;
})