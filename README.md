# Build-A-Trip

<img src="/public/img/BAT_deployed_browse.png">

## About Build-A-Trip
For this project, I built a site where users can create an itinerary of things to do in Tokyo from my ptersonal recommendations and from their own ideas too. I decided to build this app because, I lived in Tokyo for 3 years and often have friends ask for recommendations on what to do and where to eat. Now instead of sending a lengthy text, I can send them this link!

#### Visit the Heroku Deploy: [Build-A-Trip](https://build-a-trip.herokuapp.com/tokyo)

### Languages & Frameworks Used
- HTML5
- JavaScript
- CSS3
- Node.js
- Mongo
- Mongoose
- Express
- EJS

## Wireframes
<img src="/public/img/browse-activities.png">
<img src="/public/img/your-itinerary.png"> 
<img src="/public/img/create-form-pg.png">

## User Stories
- As the user, I want to the option to see all activities or filter by category so that I can sort the results by my interests
- As the user, I want to be able to save my favorite activities so that I can quickly browse all the activities and then revisit the ones that seemed most interesting after
- As the user, I want to be able to see brief overview of the activity before clicking it for more information so that I can decide whether or not it may interest me
- As the user, I want to be able to add in my own custom activities so that I can add any activities that aren’t suggested
- As the user, I want to be able to select and organize the activities I choose so that I can see how they fit into the schedule
- As the user, I want to be able to share my schedule so that I can send it to whoever I’m traveling with

## Major Hurdles
#### 1. Organizing JSON data in consistent format
When creating the API of recommendations, I had some difficulty organizing the data in one Schema format. For example, when it comes to "websites" some activities I suggest have one, some don't have one, and others have one but the informational website and ticket booking website are separate. 

#### 2. Keeping style elements consistent across multiple pages
When building the CSS, it was slightly difficult to keep track of what I labeled the same and what was different. So after making adjustments to the CSS on one page, I made sure to run through all my other pages to check that I didn't incorrectly change something else too.

#### 3. Styling it the same as my initial design wireframes
My initial wireframes also included a lot of my stretch goals like building a "like" feature. And during the building process, I would often struggle to code something similar to what I had originally wireframed out. When this happened, I would go to my wireframes again, and redesign it while talking out how I could also do it in code. 

## Ideas for Future Modifications
1. Improve Media Responsiveness
2. Make Itinerary page more like a Calendar
3. Add images to recommended activities
4. Drag and Drop features on the Itinerary
5. Add User Account and Login capabilities
6. Add ability to like and share certain activities
7. Improve UX/UI Elements and Usability Testing
    - For example, have "Add to Itinerary" change to "Added!" after successfully added to User's Itinerary