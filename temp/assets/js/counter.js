let count=0;
function incriment(e){
  count = e.target.parentElement.children[1].getAttribute("value");
  let v = e.target.parentElement.children[2].getAttribute("value");
  console.log(v)
  if (v/ count > 1) {
    count++;
    e.target.parentElement.children[1].setAttribute("value", count);
    e.target.parentElement.children[3]
      .classList.remove("disabled");
  }
  if (v/count <= 1) {
    e.target.classList.add("disabled");
    console.log(count);
  }

  console.log(count)
}
function decriment(e) {
  console.log('decrement')
  count = e.target.parentElement.children[1].getAttribute('value');
  if (count > 1)
  {
    count--;
    e.target.parentElement.children[1].setAttribute('value',count)
  }
  if (count <= 1){
    e.target.classList.add('disabled')
  }
}

for (i = 0; i != document.getElementsByClassName("incriment").length; i++) {
  let element = document.getElementsByClassName("incriment")[i];
  element.addEventListener("click", incriment);
  let v = element.parentElement.children[1].getAttribute("value");
  let m = element.parentElement.children[2].getAttribute("value");
  if(v>=m){
    element.classList.add("disabled");
  }
  console.log("init 1");
}
for (i = 0; i != document.getElementsByClassName("decriment").length; i++) {
  let element = document.getElementsByClassName("decriment")[i];
  element.addEventListener("click", decriment);
  let v = element.parentElement.children[1].getAttribute("value");
  if (v <= 1){
    element.classList.add("disabled");
  }
  console.log("init 2");

}

