
//To add Recommendations to User's Itinerary
let addActivity = document.querySelectorAll('.add-btn')

addActivity.forEach(addButton => {
    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("button clicked")
        //target data
        let activityData = e.target.dataset.title
        //fetch and post new user activity and carry over data (may have to use parent/sibling)
        console.log(activityData)
        let url = 'https://build-a-trip.herokuapp.com/users'
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: activityData
            }),
            mode: 'cors'
        })
            .then(res => {
                console.log(res.json())
                return res.json()
            })
            .then(data => {
                console.log(data)
                // res.redirect('/users')
            })
            .catch(err => console.log('ERROR'))
    })
})

//Weather API
// let axios = require("axios").default;

// window.addEventListener('load', (e) => {
//     e.preventDefault();

//     let options = {
//     method: 'GET',
//     url: 'https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=cEo4a6lzS8nzLnYA9s3NnsVkOoSdwZgP',
//     params: {lat: '42.8237618', lon: '-71.2216286'},
//     headers: {
//         'x-rapidapi-host': 'climacell-microweather-v1.p.rapidapi.com',
//         'x-rapidapi-key': 'cEo4a6lzS8nzLnYA9s3NnsVkOoSdwZgP'
//     }
//     };

//     axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });

// })






//Search through activities
// let searchBar = document.getElementById('search-bar');
// let filter = searchBar.nodeValue.toLowerCase();
// let container = document.getElementsByClassName('activity-container')
// let activity = document.getElementsByClassName('title')

// const searchActivities = () => {
//     for (let i=0; i < activity.length; i++) {
//         let inputVal= activity[i].innerText
//         if (inputVal.toLowerCase().indexOf(filter) > -1) {
//             container[i].style.display= ""
//         } else {
//             container[i].style.display="none"
//         }
//     }
// }
