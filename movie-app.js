// const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
// const url = '/posts';
// const options = {
//     method: 'POST',
//     data: {
//         'title': '',
//     },
//     body: JSON.stringify(blogPost),
// };
// var url = 'https://codeup-json-server.glitch.me/movies'
fetch('https://codeup-json-server.glitch.me/movies')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(post => {
            if(typeof(post.title) == 'string'){
            console.log(post.title);

            // function hasTitle(){
            //     if(post.title !== 'undefined'){
                    $('#titles').append(
                        `<div>${post.title}</div>`
                        // +
                        // `<button>delete me</button>`
                    )
            }
            //     }
            // }
            // return hasTitle()
        })
    })
const reviewObj = {
    title: 1,
    director: 'Codey',
    rating: 5,
    genre: "This is a really good place for coding and eating"
};
const url = 'https://codeup-json-server.glitch.me/movies';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewObj),
};
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */

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
