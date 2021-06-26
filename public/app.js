let addActivity = document.querySelectorAll('.add-btn')
// let actContainer = document.querySelectorAll('.activity-container')

addActivity.forEach(addButton => {
    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("button clicked")
        //target data
        let activityData = e.target.dataset.title
        //fetch and post new user activity and carry over data (may have to use parent/sibling)
        console.log(activityData)
        let url = 'http://localhost:3000/users'
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
                // if (res.ok) {
                //     console.log('SUCCESS')
                // } else {
                //     console.log('not successful')
                // }
            })
            .then(data => {
                console.log(data)
                res.redirect('/users')
            })
            .catch(err => console.log('ERROR'))
    })
})