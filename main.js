
var ul = document.querySelector("ul");
var dataArray = [];
var HttpClient = function() {
  this.get = (aUrl, aCallback) =>{
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() { 
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
          aCallback(anHttpRequest.responseText);
      }
      anHttpRequest.open( "GET", aUrl, true );            
      anHttpRequest.send( null );
  }
}
var client = new HttpClient();
client.get('data.json', (response) => {
  dataArray = JSON.parse(response);
  console.log(dataArray);
  dataArray.pets.forEach((element,i) => {
    var li = document.createElement("li");
    var img = document.createElement("img");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var para = document.createElement("p");
    var node1 = document.createTextNode(element.name);
    var node2= document.createTextNode(element.age);
    p1.appendChild(node1);
    p2.appendChild(node2);
    var div1 = document.createElement("div");
    div1.appendChild(p1);
    div1.appendChild(p2);
    img.src = element.src;
    ul.appendChild(li);
    li.appendChild(img);
    li.appendChild(div1);
    li.classList.add("li-" + i)
    document.querySelector(".li-"+i).onclick = function(){
      document.querySelector(".popup").classList.remove("d-none");
      document.querySelector(".name").appendChild(document.createTextNode(element.name));
      document.querySelector(".type").appendChild(document.createTextNode(element.type));
      document.querySelector(".gender").appendChild(document.createTextNode(element.gender));
      document.querySelector(".age").appendChild(document.createTextNode(element.age));
      document.querySelector(".description").appendChild(document.createTextNode(element.description));
      document.querySelector(".fee").appendChild(document.createTextNode(element.fee));
    }
  });
});

function closePopup(){
  document.querySelector(".popup").classList.add("d-none");
  document.querySelector(".name").innerHTML = '';
  document.querySelector(".type").innerHTML = '';
  document.querySelector(".gender").innerHTML = '';
  document.querySelector(".age").innerHTML = '';
  document.querySelector(".description").innerHTML = '';
  document.querySelector(".fee").innerHTML = '';
}


