var empty="";
var str="Harish123";
function reverse(str){
    for(let i=str.length-1;i>=0;i--){
        empty+=str.charAt(i);
    }
}
reverse(str);
console.log(empty);

//maximum element in an array
var arr=[1,2,3,9,-5,6,-1];
var max=arr[0];
var secondMax;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        secondMax=max;
        max=arr[i];
    }else if(arr[i]>secondMax){
        secondMax=arr[i];
    }
}
console.log(max);
console.log("second maximum element is "+secondMax);

var min=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log("minimum element is "+min);
