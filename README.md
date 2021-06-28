# Build-A-Trip

<img src="img/">

## About Build-A-Trip
After living in Tokyo for 3 years, I often get asked for recommendations on what to do and where to eat, so when we were tasked with Project 2 in my Software Engineering Immersive, I decided to build a site where users can create an itinerary of things to do in Tokyo from a list of my personal recommendations as well as, add their own ideas too.

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
<img src="/img/browse activities.png">
<img src="/img/your itinerary.png">
<img src="/img/create-form-pg.png">

### Major Hurdles
#### 1. Organizing JSON data in consistent format
In creating the API of recommendations, I had some difficulty organizing the data in my ```TokyoAcitivity``` model. For example, some activities I suggest, either don't have a wesbite, or they do but their website and booking site are separate. So I had to decide which one would be categorized as "website," and keep it consistent for each one.

#### 2. Keeping style elements consistent across multiple pages
When building the CSS, it was slightly difficult to keep track of what I labeled the same and what was different. So after making adjustments to the CSS on one page, I made sure to run through all my other pages to check that I didn't incorrectly change something else too.

#### 3. Designing the same as my initial Wireframes
My initial wireframes also included a lot of my stretch goals like building a "like" feature. And during the building process, I would often struggle to design something similar to what I had originally wireframed out. When this happened, I would go to my wireframes again, and redesign it while talking out how I could also do it in code. 

## Ideas for Future Modifications
1. Improve Media Responsiveness
2. Make Itinerary page more like a Calendar
3. Add images to recommended activities
4. Drag and Drop featurs on the Itinerary
5. Add User Account and Login capabilities
6. Add ability to like and share certain activities