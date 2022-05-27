const homepageLoader = () => {
 const content = document.querySelector('#content')
 
 const main = document.createElement('div')
 const heading = document.createElement('h1')
 const about = document.createElement('p')

 const hours = document.createElement('div')
 const hoursHeading = document.createElement('h3')
 const hoursParagraph = document.createElement('p')

 const location = document.createElement('div')
 const locationHeading = document.createElement('h3')
 const locationParagraph = document.createElement('p')
 
 // Generate Main Section
 main.setAttribute('id', 'main')
 heading.innerHTML = 'BurgerLords'
 about.innerHTML = "Back in 1954, a man named Ray Kroc discovered a small burger restaurant in California, and wrote the first page of our history. From humble beginnings as a small restaurant, we're proud to have become one of the world's leading food service brands with more than 36,000 restaurants in more than 100 countries."
 
 hours.setAttribute('id', 'hours')
 hoursHeading.innerHTML = 'Hours'
 hoursParagraph.innerHTML = "Sunday: <span>8am - 8pm</span> <br> Monday: <span>6am - 6pm</span> <br> Tuesday: <span>6am - 6pm</span> <br> Wednesday: <span>6am - 6pm</span> <br> Thursday: <span>6am - 10pm</span> <br> Friday: <span>6am - 10pm</span> <br> Saturday: <span>8am - 10pm</span>"
 hours.append(hoursHeading)
 hours.append(hoursParagraph)

 location.setAttribute('id', 'location')
 locationHeading.innerHTML = 'Location'
 locationParagraph.innerHTML = '123 Forest Drive, Forestville, Maine'
 location.append(locationHeading)
 location.append(locationParagraph)
 
 main.append(heading)
 main.append(about)
 main.append(hours)
 main.append(location)
 content.append(main)
 
}

export { homepageLoader }