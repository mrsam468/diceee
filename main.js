var randomnum1 = Math.floor(Math.random()*6)+1;
var randomdice='dice'+randomnum1+".png";
var randomimage='images/'+randomdice;
var image1=document.querySelectorAll('img')[0];
image1.setAttribute('src',randomimage);
var randomnum2=Math.floor(Math.random()*6)+1;
var randomdice2='dice'+randomnum2+'.png';
var randomimage2='images/'+randomdice2;
var image2=document.querySelectorAll('img')[1];

image2.setAttribute('src',randomimage2);
if(randomnum1>randomnum2){
    // alert('hello world')
    document.querySelector('h1').innerHTML='player one wins!!'
}else if(randomnum1===randomnum2){
    document.querySelector('h1').innerHTML='Draw';
}
else{
    document.querySelector('h1').innerHTML='player two wins!!';
}