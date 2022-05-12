// const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
// const url = '/posts';
// const options = {
//     method: 'POST',
//     data: {
//         'title': '',
//     },
//     body: JSON.stringify(blogPost),
// };
const url = 'https://spectacular-hammerhead-galley.glitch.me/movies'
fetch('https://spectacular-hammerhead-galley.glitch.me/movies')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // const example = data;
        // console.log(example);
        data.forEach(post => {
            if (typeof (post.id) === 'number' || typeof (post.id) === 'string') {
                console.log(post.title);

                // function hasTitle(){
                //     if(post.title !== 'undefined'){
                $('#movies').append(
                    `<h1>${post.title}</h1>` +
                    `<h4>Rating:  ${post.rating}</h4>` +
                    `<img src="${post.poster}" style="height:300px; width:200px;">` +
                    `<button id="${post.id}" >delete movie</button>`
                )
            }

        })


        //DELETE BUTTON

        console.log(data.length)
        for (let i = 0; i < data.length; i++) {
            console.log(data.length)
            var test = document.getElementById(`${data[i].id}`);
            test.onclick = function deleteMovie(e) {
                // e.preventDefault();
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

            //         // })


        //EDIT BUTTON

        $('#edit').click((e) => {
            // e.preventDefault();

                var editMovie = {
                    title: $("#editTitle").val(),
                    genre: $("#editGenre").val(),
                    rating: $("#editRating").val(),
                    director: $("#editDirector").val(),
                    plot: $("#editPlot").val()
                }
            var titleEntered = editMovie.title
            // console.log(editMovie.title);
            //     console.log("You can edit the movie")

            if (titleEntered === data[i].title) {
                console.log("The same title")
                console.log(data[i].id)

            // // const url = 'https://codeup-json-server.glitch.me/movies';
            let options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editMovie),
            };
            fetch(url + "/" + `${data[i].id}`, options)
                .then((response) => {
                    // console.log(response)
                    console.log('New rating is: ' + editMovie.rating);
                    window.location.reload(true)
                })
                // .then(response => console.log(response)) /* review was created successfully */
                .catch(error => console.error(error)); /* handle errors */

        }
        })
        // TRIED FOR EDIT BUTTON

        // for (let i = 0; i < data.length; i++) {
        //     console.log(data.length)
        //     var edit = document.getElementById(`${data[i].id}`);
        //     edit.onclick = function editMovie(e) {
        //         // e.preventDefault();
        //         console.log(data[i].id);
        //         fetch(url + "/" + `${data[i].id}`, {
        //             method: 'PUT'
        //         }).then(() => {
        //             console.log('edited');
        //             window.location.reload(true)
        //         })
        //             .catch(err => {
        //                 console.error(err)
        //             })
        //
        //     }
        //     //         // })
        // }
    }});
//     `<button onclick.(console.log($("#"+`${data[i].id}`)))>`;
//             $("#"+"`${data[i].id}`").click(
//             if ("`${data[i].id}`") {
//
// //DELETE request
//                     fetch(url + "/" + `${data[i].id}`, {
//                         method: 'DELETE'
//                     }).then(() => {
//                         console.log('removed');
//                     }).catch(err => {
//                         console.error(err)
//                     })
//
//                 })
//             }


//         for (let i = 0; i < data.length; i++) {
//             if ($("#"+`${data[i].id}`).click) {
//
// //DELETE request
//                     fetch(url + "/" + `${data[i].id}`, {
//                         method: 'DELETE'
//                     }).then(() => {
//                         console.log('removed');
//                     }).catch(err => {
//                         console.error(err)
//                     })
//
//                 }
//             }

//         (function (id) {
// //DELETE request
//                     fetch(url + "/" + `${post.id}`, {
//                         method: 'DELETE'
//                     }).then(() => {
//                         console.log('removed');
//                     }).catch(err => {
//                         console.error(err)
//                     })
//
//             })
//     }
// }
// return hasTitle()

// })

// function addMovie() {
//     const reviewObj = {
//         id: movies.length + 1,
//         title: document.getElementById(),
//         director: 'Codey',
//         rating: 5,
//         genre: "This is a really good place for coding and eating"
//     };
//     const url = 'https://codeup-json-server.glitch.me/movies';
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(reviewObj),
//     };
//     fetch(url, options)
//         .then(response => console.log(response)) /* review was created successfully */
//         .catch(error => console.error(error)); /* handle errors */
// }


$('#add').click((e) => {
    e.preventDefault();

    var addMovie = {
        title: $("#title").val(),
        genre: $("#genre").val(),
        rating: $("#rating").val(),
        director: $("#director").val(),
        plot: $("#plot").val()
    }
    // const url = 'https://codeup-json-server.glitch.me/movies';
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
            // console.log('removed');
            window.location.reload(true)
        })
        // .then(response => console.log(response)) /* review was created successfully */
        .catch(error => console.error(error)); /* handle errors */

})


// let deleteOptions = {
//     method: 'DELETE',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// };


// $("#delete").click(function() {
// //DELETE request
//     fetch(`${url}/${inputVal}`, deleteOptions)
//         .then();
// });

// $('#delete').click((e) => {
//     e.preventDefault();

// let options = {
//     method: 'DELETE',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(),
// };
// fetch(url, options)
//     .then(response => console.log(response)) /* review was created successfully */
//     .catch(error => console.error(error)); /* handle errors */
// })


// $('button').click($(this) => console.log($(this).siblings))

// const xhr = new XMLHttpRequest()
// //open a get request with the remote server URL
// xhr.open("GET", "https://codeup-json-server.glitch.me/movies")
//
// //send the Http request
// xhr.send()
//
// //EVENT HANDLERS
//
// //triggered when the response is completed
// xhr.onload = function() {
//     if (xhr.status === 200) {
//         //parse JSON datax`x
//         data = JSON.parse(xhr.responseText)
//         console.log(data)
//         console.log(typeof(data.title))
//         console.log(data.rating)
//     } else if (xhr.status === 404) {
//         console.log("No records found")
//     }
// }
