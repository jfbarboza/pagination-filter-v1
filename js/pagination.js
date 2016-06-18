// Get number of students
'use strict'

var ul = document.getElementsByClassName("student-list");

// Initial View
var items = ul[0].getElementsByClassName("student-item");
var numPages = Math.ceil(items.length/10);

initialize();

function initialize(){

  hideAll();

  for (var i = 0; i < 10; i++) {
    items[i].className = "student-item cf";
  }

  var header = document.getElementsByClassName("page-header");

  header[0].innerHTML += '<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>';

  var paginationHTML = '<div class="pagination">';
  var paginationHTML = paginationHTML + '<ul>';

  for(i = 1; i <= numPages; i++){
    if(i == 1){
        paginationHTML = paginationHTML + '<li><a class="active" href="#">' + i + '</a></li>';
    }
    else{
      paginationHTML = paginationHTML + '<li><a href="#">' + i + '</a></li>';
    }
  }

  var paginationHTML = paginationHTML + '</div>';

  var page =document.getElementsByClassName("page");
  page[0].innerHTML = page[0].innerHTML + paginationHTML;

  var pagination = document.getElementsByClassName("pagination");
  var pagList = pagination[0].getElementsByTagName("ul");
  var pagIndex = pagList[0].getElementsByTagName("li");

  for(var i = 0; i < pagIndex.length; i++){
    pagIndex[i].addEventListener('click', function(e){
      event.preventDefault();
      var index = parseInt(this.innerText);
      hideAll();
      showRange(index, 10);
      clearPagIndex(pagIndex);
      this.childNodes[0].className = "active";
    });
  }
}

function hideAll(){
  var items = document.getElementsByClassName("student-item");
  for (var i = 0; i < items.length; i++) {
    items[i].className = "student-item cf no-show";
  }
}

function showRange(index, range){
  var items = document.getElementsByClassName("student-item");
  var starting = (range * index) - range ;
  var ending = starting + range
  console.log(items.length);
  for(var i = starting; (i < ending) && (i < items.length); i++){
    items[i].className = "student-item cf";
  }
}

function clearPagIndex(index){
  for(var i = 0; i < index.length; i++){
    index[i].childNodes[0].className = "";
  }
}

document.getElementsByTagName('button')[0].addEventListener('click', function(event){
  console.log('You clicked search!');
  var searchString = document.getElementsByTagName('input')[0].value;
  if(searchString == ''){
    var items = document.getElementsByClassName("student-item");
    hideAll();
    for (var i = 0; i < 10; i++) {
      items[i].className = "student-item cf";
    }
    var pagination = document.getElementsByClassName("pagination");
    var pagList = pagination[0].getElementsByTagName("ul");
    var pagIndex = pagList[0].getElementsByTagName("li");
    clearPagIndex(pagIndex);
    pagIndex[0].childNodes[0].className="active";
    console.log(pagIndex[0].getElementsByTagName('a'));
  }else{
    searchStudents(searchString);
  }
});

function searchStudents(studentString){
  alert('You want to find ' + studentString);
}
