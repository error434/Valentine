var noarr=
[
    '<i class="bi bi-x-circle"></i>',
    'Please? <i class="bi bi-x-square"></i>',
    'Pyaar nahi karti?  <i class="bi bi-emoji-frown"></i>',
    'Kya hua tera vada?',
    'Wo kasam wo irada?',
    'You serious?',
    '👉👈',
    'Waffle khilaunga!!',
    'Yaar 🥺',
    'Pleaseeeeeeeee',
    'Mai ro dunga',
    'Bhadwi'
]

var i = 0;
var arrlen=noarr.length;
const nobtn=document.getElementById('nobtn');
const yesbtn=document.getElementById('yesbtn');
const gifimage=document.getElementById('gifimage');

function success()
{
    const successChange=document.getElementById('successChange');
    successChange.innerHTML=
    `<h1 style='text-align:center'>Ok yay !!!</h1>`;
    gifimage.innerHTML=
    `<div class="tenor-gif-embed" data-postid="11092575278240837627" data-share-method="host" width="370" height="230"><a href="https://tenor.com/view/thank-you-gif-11092575278240837627">`;
}

function failPile()
{
    if(i<arrlen-1){
        if(i==4){
            gifimage.innerHTML=
            `<img src='https://tenor.com/rZOb1FX42Vv.gif'>`;
        }
        i++;
        showNoBtn();
        var currentSize=parseFloat(window.getComputedStyle(yesbtn).fontSize);
        var newSize=currentSize+30;
        yesbtn.style.fontSize=newSize+'px';
        }
    else{
        i=0;
        showNoBtn();
        var currentSize=parseFloat(window.getComputedStyle(yesbtn).fontSize);
        var newSize=currentSize+4;
        yesbtn.style.fontSize=newSize+'px';
    }
}

function showNoBtn()
{
    nobtn.innerHTML=noarr[i];
}


showNoBtn();

