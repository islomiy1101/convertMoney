let sumInput=document.getElementById('sumInput');
let submitbtn=document.getElementById('submit');
let dollarInput=document.getElementById('dollarInput');
let euroInput=document.getElementById('euroInput');

submitbtn.addEventListener('click',convertFunction);

function convertFunction(){
    
    // get SumInput value
    let sumValue=Number(sumInput.value);
    // console.log(sumValue,typeof(sumValue));
    dollarInput.value=(sumValue/10670).toFixed(2);
    euroInput.value=(sumValue/12450).toFixed(2);
    // euroInput.value=Math.floor(sumValue/12450*100)/100;
    
}