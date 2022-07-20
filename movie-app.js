// RELOAD BUTTON
const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
    log.textContent = '';
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
});

window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});

const url = 'https://spectacular-hammerhead-galley.glitch.me/movies'
fetch('https://spectacular-hammerhead-galley.glitch.me/movies')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(post => {
        if (typeof (post.id) === 'number' || typeof (post.id) === 'string') {
            console.log(post.title);
            $('#movies').append(
                `<div class="container">` +
                `<div class="row" style="outline: auto; padding-bottom: 10px; padding-top: 10px">` +
                `<div class="col-4">` +
                `<img src="${post.poster}" style="height:300px; width:200px;" alt="...">` +
                `</div>` +
                `<div class="col-8">` +
                `<h3 style="margin-left: 38px">${post.title}</h3>` +
                `<ul style="list-style: none">` +
                `<li>Genre: ${post.genre}</li>` +
                `<li>Rating: ${post.rating}</li>` +
                `<li>Director: ${post.director}</li>` +
                `<li>Plot: ${post.plot}</li>` +
                `</ul>` +
                `<button style="margin-left: 38px" id="${post.id}" >delete movie</button>` +
                `</div>` +
                `</div>` +
                `</div>`
            )
        }
    })

    //DELETE BUTTON
    console.log(data.length)
    for (let i = 0; i < data.length; i++) {
        console.log(data.length)
        let test = document.getElementById(`${data[i].id}`);
        test.onclick = function deleteMovie(e) {
        e.preventDefault();
        console.log(data[i].id);
        fetch(url + "/" + `${data[i].id}`, {
            method: 'DELETE'
        }).then(() => {
            console.log('removed');
            window.location.reload(true);
        })
            .catch(err => {
            console.error(err);
        })
    }

        //EDIT BUTTON
        $('#edit').click((e) => {
            e.preventDefault();
            let editMovie = {
                currentTitle: $("#oldTitle").val(),
                title: $("#editTitle").val(),
                genre: $("#editGenre").val(),
                rating: $("#editRating").val(),
                director: $("#editDirector").val(),
                plot: $("#editPlot").val(),
                poster: $("#editImg").val()
            }
            let titleEntered = editMovie.currentTitle

            if (titleEntered.toLowerCase() === (data[i].title).toLowerCase()) {
                console.log("The same title")
                console.log(data[i].id)
                let options = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(editMovie),
                };
                fetch(url + "/" + `${data[i].id}`, options)
                    .then((response) => {
                        console.log('New rating is: ' + editMovie.rating);
                        window.location.reload(true)
                })
                    /* handle errors */
                    .catch(error => console.error(error));
            }
        })
        console.log(data)
    }
});

$('#add').click((e) => {
    e.preventDefault();
    let addMovie = {
        title: $("#title").val(),
        genre: $("#genre").val(),
        rating: $("#rating").val(),
        director: $("#director").val(),
        plot: $("#plot").val(),
        poster: $("#addImg").val()
    }
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addMovie),
    };
    fetch(url, options)
        .then((response) => {
            console.log(response)
            window.location.reload(true)
    })
        /* handles errors */
        .catch(error => console.error(error));
})


