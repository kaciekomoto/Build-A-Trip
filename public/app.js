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


//Search through activities
let searchBar = document.getElementById('search-bar');
let filter = searchBar.nodeValue.toLowerCase();
let container = document.getElementsByClassName('activity-container')
let activity = document.getElementsByClassName('title')

const searchActivities = () => {
    for (let i=0; i < activity.length; i++) {
        let inputVal= activity[i].innerText
        if (inputVal.toLowerCase().indexOf(filter) > -1) {
            container[i].style.display= ""
        } else {
            container[i].style.display="none"
        }
    }
}
