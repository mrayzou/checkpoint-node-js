console.log("hello world")

const {response} =require ("express")
const http= require ("http")

http.createServer((request,response)=>{
    response.end("<h1> hello node </h1>")
}).listen(3000)