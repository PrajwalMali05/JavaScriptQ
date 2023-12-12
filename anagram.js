function isAnagram (str1, str2){
    if(str1.lenght != str2.lenght) return false;
    return str1.split('').sort().reverse().join('') === str2.split('').sort().reverse().join('')
}

console.log(isAnagram("lite","ilte2"))