var search = document.getElementById('search');
var productContainer = document.querySelector('.product-lists');
var productList = productContainer.querySelectorAll('.list');


search.addEventListener('keyup', function(){
var enteredValue = event.target.value.toUpperCase();
console.log(enteredValue);
for(count=0; count<productList.length; count = count+1){

var productName = productList[count].querySelector('h2').textContent;
if(productName.toUpperCase().indexOf(enteredValue)<0){
productList[count].style.display = 'none';
}
else{
productList[count].style.display = 'block';
}
}
})

//checkbox
var check = document.getElementsByName('tags');
console.log(check)
var productContainer = document.querySelector('.product-lists');
var productList = productContainer.querySelectorAll('.list');
var tagList = productContainer.querySelectorAll('tags');
var list = [];
check.forEach((check) => {
check.addEventListener('click', function(){
if(event.target.checked){
var selectedValue = event.target.value.toUpperCase();
console.log(selectedValue)

for(count =0; count<tagList.length; count++){
var tag = tagList[count].innerHTML;
if(tag.toUpperCase().indexOf(selectedValue)<0){
list.push(event.target.value);
productList[count].style.display = 'none';
}
else{
var index = list.indexOf(event.target.value);
list.splice(index, 1);
productList[count].style.display = 'block';
}
}
}
else{
for(count =0; count<tagList.length; count++){
    unChecked(tagList,count)
}

}

})

})

function unChecked(tagList,count){
var tag = tagList[count].innerHTML;
var index = list.indexOf(event.target.value);
list.splice(index, 1);
productList[count].style.display = 'block';
}








