var link = document.getElementsByClassName("nav-item") ;
var posts = [];
getRecipts("Seafood");
for(var i=0; i<link.length; i++)
{
    link[i].addEventListener("click", function(e){
        var nameSelect = e.target.text;
        getRecipts(nameSelect)
    }) ;
}

function getRecipts(meal)
{
    var myRequest = new XMLHttpRequest();
    myRequest.open("get", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    myRequest.send();
    myRequest.addEventListener("readystatechange", function () {
        if (myRequest.readyState == 4) {
            //console.log(JSON.parse(myRequest.response).recipes);
            posts = JSON.parse(myRequest.response).recipes;
            displayPosts()
        }
    })
}




function displayPosts() {
    var cols = ``;
    for (var i = 0; i < posts.length; i++) {
        cols +=
            `<div class="col-md-4 my-3">
                <img class="w-100 imgFood" src="${posts[i].image_url}" alt = "imgPizza"> 
                <h2> ${posts[i].title}</h2>
                <button class = 'btn btn-primary'> <a target = "-blank" class ='text-white' href = "${posts[i].source_url}"> Details </a> </button>
            </div>
            `
    }
    document.getElementById("DisplayRows").innerHTML = cols ;
}


