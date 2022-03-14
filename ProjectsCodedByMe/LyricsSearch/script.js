const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh'; // API 


// Search by song or artist

async function searchSongs(term) {
    // fetch(`${apiURL}/suggest/${term}`).then(res => res.json())
    //     .then(data => console.log(data))
    //     .then(data => console.log(data)); 


    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();

    showData(data);

    // console.log(data);
}

// Show data and artist in DOM
function showData(data) {
    console.log(data);
    // let output = '';

    // data.data.forEach(song => {
    //     output += `
    //     <li> 
    //     <span><strong>${song.artist.name}</strong> -${song.title}</span>
    //     <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>

    //     </li> 
    //     `;
    // });

    // result.innerHTML = `
    // <ul class="songs">
    //   ${output}
    // </ul>
    // `;

    result.innerHTML = `
      <ul class="songs">
       ${data.data.map(song => `<li> 
       <span><strong>${song.artist.name}</strong> -${song.title}</span>
       <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>

       </li>`)
      .join('')
    }
      </ul>
    `; 


    if(data.pre || data.text){
      more.innerHTML =`
      ${data.prev ? `<button class="btn">Prev</button>` : ''}
      ${data.next ? `<button class="btn">Next</button>` : ''}
      `;
      
    }else{
      more.innerHTML = ''; 
    }
}

// Event listener 
form.addEventListener('submit', e => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if (!searchTerm) {
        alert('Please type in a search term');
    } else {
        searchSongs(searchTerm)
    }

    console.log(searchTerm);
});