// Search functionality for the website
const search = function () {
    // Search modal functionality
    const input = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > button');

    // ****************************************** //
    // select the open search modal
    // input.addEventListener('input', (event) => {
    //     console.log(event.target.value);
    // });

    // ****************************************** //
    
    // Handler of the click event on the button
    searchBtn.addEventListener('click', () => {
        console.log(input.value);
    });
}

// select the open search modal
search();

