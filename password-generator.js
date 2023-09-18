const generatepassword =require('generate-password');

var password = generatepassword.generate({
    length:50,
    number: true
})
var multiplepasswords = generatepassword.generateMultiple(10,{
    length:10
})

console.log(password);
console.log(multiplepasswords);