function genRandomString(length){
    const chars = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklmbvcxz1234567890';
    let res = ''
    for(let i = 0; i<length;i++){
        let index = Math.floor(Math.random()* chars.length);
        res += chars.charAt(index)
    }
    return res;
}
console.log(genRandomString(10))