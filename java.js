let searchForm = document.getElementById('search-form')
let searchBox = document.getElementById('search-box')
let searchResult = document.getElementById('search-result')
let showMoreBtn = document.getElementById('show-more-btn')


let keyword = "";
let page = 1;
let accessKey = 'bITxVU4xI6RxBF8_JY6nyn-KeXZoyFMNisEUW29D-Sk';

async function searchImages(e) {
    e.preventDefault();
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    let response = await fetch(url);
    let data = await response.json();

    let results = await data.results;

    results.map((result) => {
        let image = document.createElement('img');
        image.src = result.urls.small;

        let imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        
        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    showMoreBtn.style.display ='block';
}

searchForm.addEventListener('submit',() =>{
    searchResult.innerHTML = '';
    page =1;
    searchImages(event);
})

showMoreBtn.addEventListener('click',() =>{
    page++;
    searchImages(event);
})