let cards = document.querySelectorAll('.box')
    
function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
    
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
            location.href = "https://stoneminers.github.io/js-search/src/?q=" + search_query;
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
}

//A little delay
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});
