const accessKey = "GQasTQ37E2eqKppfa8YvHHegYKLVc_oQ8FPT4MMwBGU";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const searchBtn = document.getElementById("search-btn");

// GQasTQ37E2eqKppfa8YvHHegYKLVc_oQ8FPT4MMwBGU  = Access key
// llDAuIFDRNtsgMF5V5Y_u02L98T7vTddnwkV3MqHsoE  = secret key

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if(page == 1){
searchResult.innerHTML ="";

    }

    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink =document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";
   
    console.log(data);
    
}

showMoreBtn.addEventListener("click",()=> {
    page++;
    searchImage();
        })

       
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
    
})

// searchImage();