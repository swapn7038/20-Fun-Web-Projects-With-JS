const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seats:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;


// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectMoviePrice', moviePrice);
}

// Update total and count 
function updatedSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // console.log(selectedSeats);



    // Copy selected seats into arr
    // Map through array
    // return a new array indexes    
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    // console.log(seatsIndex);

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    // console.log(selectedSeatsCount);

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from local storage and populate UI 
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    // console.log(selectedSeats); 

    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach((seat, indes) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });

    }

    const selectedMovieIndex = localStorage.getItem('selectedMovie');

    if (selectedMovieIndex !== null) {
        movieSelect.selectIndex = selectedMovieIndex;
    }
}



// Movie select event 
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    console.log(e.target.selectIndex, e.target.value);
    updatedSelectedCount();
})


// Seat Click event 
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updatedSelectedCount();
    }
});


// Initial count and total set 

updatedSelectedCount();