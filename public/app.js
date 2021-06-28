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
                res.redirect('/users')
            })
            .catch(err => console.log('ERROR'))
    })
})


// //View Map Event Listener
// const openBtn = document.getElementById('openMap');

// // Grabbing modal element
// const mapModal = document.getElementById('map-modal')

// // Grabbing close button
// const closeBtn = document.getElementById('map-close-btn')

// //Add event handler
// // Function to change modal display to 'block'
// const openMap = () => {
//     modal.style.display = 'block';
//   }

// // Event handler to close the modal
//   const closeMap = () => {
//     modal.style.display = 'none'
//   }

// //Add event listener to About the Game button
// openBtn.addEventListener('click', openMap)
// //Add event listener to Close button
// closeBtn.addEventListener('click', closeMap)


    // function canDrop(e) {
    //   e.preventDefault();
    // }
    
    // function dragActivity(e) {
    //   e.dataTransfer.setData("text", e.target.id);
    // }
    
    // function dropActivity(e) {
    //   e.preventDefault();
    //   let moveActivity = e.dataTransfer.getData("text");
    //   e.target.appendChild(document.getElementById(moveActivity));
    // }
