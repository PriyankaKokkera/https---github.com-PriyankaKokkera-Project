const searchItem=document.getElementById("search-item");
const searchBox=document.getElementById("searchBox");
const searchResult=document.getElementById("search-result");
const showMoreBtn=document.getElementById("show-more-btn");
const AccessKey="fTjdqK0vz2i9PNUuUbMUUZVKai17XYlBOY-ZSPj9Oi8";
let keyword="";
let page=1;
async function searchImage(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${AccessKey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();
    const results=data.results;
    // if(page === 1){
    //     searchResult.innerHTML="";

    // }

     
results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink)

})
showMoreBtn.style.display="block"


} 

searchItem.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();

})  
showMoreBtn.addEventListener('click',()=>{
    page++;
    searchImage();
})
