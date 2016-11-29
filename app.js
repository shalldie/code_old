function getResult(word,delay){
    return new Promise(res=>{
        setTimeout(function(){
            res(word);
        },delay);
    });
}


(async function(){
    // let pro=Promise.all(getResult('hello',1000),getResult('world',2000)).then(n=>n);
    let result = await getResult('hello',1000);
    console.log(result);
    
})();