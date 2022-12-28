var b=1;
function hello(){
  let a=new Date();
  document.write(`The Time is  ${a.toLocaleTimeString()} <br><br>`);
  if(b>=10){
    clearInterval(id);
  }
  b++;
}
let id=setInterval(hello,3000);