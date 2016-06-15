// Get number of students
var ul = document.getElementsByClassName("student-list");

// Initial View
var items = ul[0].getElementsByClassName("student-item");
var numPages = Math.ceil(items.length/10);
console.log(numPages);
for (var i = 10; i < items.length; ++i) {
  items[i].className += " no-show";
}

var header = document.getElementsByClassName("page-header");

header[0].innerHTML += header[0].innerHTML + '<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>';

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
  });
}

function hideAll(){
  for (var i = 0; i < items.length; ++i) {
    items[i].className = "no-show";
  }
}
