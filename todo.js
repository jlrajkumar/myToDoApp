
var ul =document.getElementById('list');
var li;


var addToDo = document.getElementById('add').addEventListener('click',()=>{
//console.log('add button clicked!!');
var input=document.querySelector('input');
var item = input.value;
ul=document.getElementById('list'); 
var textNode = document.createTextNode(item)
if(item ===''){
    return false;
}
else{
    //create Li
    li =document.createElement('li');

    //Create checkbox
    var checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.setAttribute('id', 'check');

//createLabel
var label = document.createElement('label');

label.setAttribute('for','item')
}

//Add all these on our App
ul.appendChild(label);
li.appendChild(checkbox);
label.appendChild(textNode);

li.appendChild(label);
ul.insertBefore(li, ul.childNodes[0]);

setTimeout(()=>{
li.className = 'visual'; 
},2)

input.value='';

});

var delToDo = document.getElementById('del').addEventListener('click',()=>{
    //console.log('delete button clicked!!');

    li = ul.children
    for(let i=0; i<li.length; i++){
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i]);
        }
    }

});