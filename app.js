function getResult(word,delay){
    return new Promise(res=>{
        setTimeout(function(){
            res(word);
        },delay);
    });
}


(async function(){
    let pro=Promise.all(getResult('hello',1000),getResult('world',2000));
})();