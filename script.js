/* 
    Assignment: Frame
    1. Pick a free, public API (e.g. NASA, Dog API, PokéAPI, etc.)
    2. In getData(), use fetch() to fetch data from the API
    3. Insert 10+ li elements into the .frame element 
*/

const frame = document.querySelector('.frame');
let currentItem = 0;
let totalItems = 10; // change this if you do more than 10 items

async function getData() {
    try {
        frame.innerText = "loading..."
        const response = await fetch("https://dog.ceo/api/breeds/image/random/" + totalItems);
        const data = await response.json();
        frame.innerText = ""
        
        for (let i = 0; i < data.message.length; i++) {
            const li = document.createElement("li");
            if (i === 0) {
                li.classList.add("active")
            }
            const img = document.createElement("img");
            img.src = data.message[i];
            li.appendChild(img);
            frame.appendChild(li);
        }

    } catch (error) {
        frame.innerText = "Something went wrong. Please try again later"
        console.error(error)

    }
    // YOUR CODE HERE

}

function goToItem(index) {
    const items = frame.querySelectorAll('li');
    items[currentItem].classList.remove('active');
    currentItem = index;
    items[currentItem].classList.add('active');
}

frame.addEventListener('click', function () {
    const nextItem = (currentItem + 1) % totalItems;
    goToItem(nextItem);
});

getData();