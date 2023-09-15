const promis = new Promise((resolve , reject)=>{
    var x =0;
    if (x >=10)
    {
        resolve(x);
    }
    else{
        const err = new Error("the number is less than 10");
        reject(err);
    }
})
  
promis.then((x)=>{
    console.log(x);
}).catch((message) =>{
    console.log(message);
})