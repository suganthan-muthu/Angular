
var a =function(){
return "Hello";
}
console.log(a());

var b=()=>"Hello";
console.log(b());

var c=(test)=>{
    console.log("Line1");
    console.log(test);
}
c("rough");
