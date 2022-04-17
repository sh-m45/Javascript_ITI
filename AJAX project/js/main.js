//ajax---async javascript and xml
/*
GET--->get data from server (db)
POST--->send data from server (db)
UPDATE(PUT)--->update record for db
PATCH--->update piece of data
DELETE-->delete from db
request.readyState=0,1,2,3,4;
*/
var receipts=[];
var links=document.getElementsByClassName("nav-link");
for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",function(eventInfo){
        var currentMeal=eventInfo.target.text;
        getReceipts(currentMeal)
    })
}
function displayReceipts(){
    var cols=``;
    for(var i=0;i<receipts.length;i++){
        cols+=
        `
                <div class="col-md-3 my-4">
                    <div>
                       <img class='w-100 recipe-img' src='${receipts[i].image_url}'>
                        <h4>${receipts[i].title}</h4>
                        <button class='btn btn-info'>
                            <a class='text-white'
                            target="_blank"
                            href='${receipts[i].source_url}'>source</a>
                         </button>
                         <button class='btn btn-warning'>
                            <a class='text-white' href="details.html?rid=${receipts[i].recipe_id}">details</a>
                         </button>
                    </div>
                </div>
        `
    }
    document.getElementById("postsRow").innerHTML=cols
 
}

function getReceipts(meal){
var request=new XMLHttpRequest();
request.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
request.send();
request.addEventListener("readystatechange",function(){
    if(request.readyState==4&&request.status==200)
    {
        receipts= JSON.parse(request.response).recipes;
 
       displayReceipts()
    }
})
}

getReceipts("pasta");  


