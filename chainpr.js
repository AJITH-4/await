// function mul(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(5*num),2000);
//     })
// }
// mul(5).then((data)=>{
//     console.log(data);//25
//     return mul(data);// mul(25)->
// }).then((data1)=>{
//     console.log(data1); //125
//     return mul(data1); //mul(125)
// }).then((data2)=>console.log(data2));

async function mul(num){
try{
data = num*5;
console.log(data);
data1= data*5;
console.log(data1);
data2 = data1*5
console.log(data2);
var er = await rej();
console.log("mul function");
}
catch(error){
    console.log(error);
}
function rej(){
    return new Promise((resolve,reject)=>{
      reject("this is rejected");
    });

}
}
mul(5)