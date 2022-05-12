// const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
// const url = '/posts';
// const options = {
//     method: 'POST',
//     data: {
//         'title': '',
//     },
//     body: JSON.stringify(blogPost),
// };
const url = 'https://codeup-json-server.glitch.me/movies'
fetch('https://codeup-json-server.glitch.me/movies')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(post => {
            if(typeof(post.title) == 'string'){
            console.log(post.title);

            // function hasTitle(){
            //     if(post.title !== 'undefined'){
                    $('#movies').append(
                        `<h1>${post.title}</h1>` +
                        `<h4>Rating:  ${post.rating}</h4>` +
                        `<img src="${post.poster}" style="height:300px; width:200px;">` +
                        `<button id="delete">delete movie</button>`
                    )
            }
            //     }
            // }
            // return hasTitle()
        })
    })
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
        .then(response => console.log(response)) /* review was created successfully */
        .catch(error => console.error(error)); /* handle errors */
})


let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    }
};

$("#delete").click(function() {
//DELETE request
    fetch(`${url}/${inputVal}`, deleteOptions)
        .then();
});

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
