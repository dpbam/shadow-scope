import videos from './videosArray';

function openSlideMenu() {
  document.getElementById('side-menu').style.width = '300px';
  document.getElementById('main').style.marginLeft = '250px';
}
function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

$(function () {
  $('#headerDIV').load('../html/header.html');
  $('#footerDIV').load('../html/footer.html');
});

// Slideshow

// Automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slides?.length > 0) {
    slides[slideIndex - 1].style.display = 'block';
  }
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
// User conrols slideshow:
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/Previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
// End user controls slideshow

// videos search bar

for (let i = 0; i < videos.length; i++) {
  console.log(videos[i]);
}

videos.forEach(function (value, index, videos) {
  console.log(value, index, videos);
});

const searchInput = document.querySelector('.input');
const searchButton = document.getElementById('search-button');

// Initially load the videos by default
// renderVideos(videos);

// Injects the videos into the videos-results div based on the array of `videosToRender`

function renderVideos(videosToRender) {
  var videoResults = document.getElementById('videos-results');

  if (videoResults !== null) {
    videoResults.innerHTML = '';

    // Loop through each video and add the html element to the videos-results div
    videosToRender.forEach((video) => {
      videoResults.innerHTML += `
        <div class="video-card">
          <h2>${video.name}</h2>
       
            <source src="${video.url}" />
            <iframe width="500" height="400" src="${video.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>/>
          
        </div>
        <p>
          Click the three vertical dots, download your video, and share with your
          friends! (Don't forget to tag us on <em>Twitter</em> @CSUShadowScope)
        </p>
      `;
    });
  }
}

// function filterVideosByName(nameValue) {
//   let filteredVideos = videos.filter((v) =>
//     v.name.toLocaleLowerCase().includes(nameValue)
//   );

//   renderVideos(filteredVideos);
// }

// function filterVideosByEvent(eventValue) {
//   let filteredVideos = videos.filter((v) =>
//     v?.event?.toLocaleLowerCase()?.includes(eventValue)
//   );

//   renderVideos(filteredVideos);
// }

function filterVideos(value) {
  let filteredVideos = videos.filter(
    (v) =>
      v.name.toLocaleLowerCase().includes(value) ||
      v.event.toLocaleLowerCase().includes(value)
    // || v.teacher.toLocaleLowerCase().includes(value)
    // || v.shape.toLocaleLowerCase().includes(value)
    // || v.direction.toLocaleLowerCase().includes(value)
  );

  renderVideos(filteredVideos);
}

searchButton.addEventListener('click', (e) => {
  // inside, we will need to achieve a few things:
  // 1. declare and assign the value of the event's target to a variable AKA whatever is typed into the search bar
  let searchInputValue = searchInput.value;

  // 2. check: if input exists and if input is larger than 0
  if (searchInputValue && searchInputValue.trim().length > 0) {
    // 3. redefine 'value' to exclude white space and change input to all lowercase
    // 4. return the results only if the value of the search is included in the video's name
    // we need to write code (a function for filtering through our data to include the search input value)

    searchInputValue = searchInputValue.trim().toLowerCase();
    filterVideos(searchInputValue);
    // filterVideosByEvent(searchInputValue);
    // filterVideosByUrl(searchInputValue);

    // input is invalid -- show an error message or show no results
    // default:
    //   alert('Try search again!');
  }
});

searchInput.addEventListener('keyup', (e) => {
  // Enter key is hit, apply filter
  if (e.key == 'Enter' || e.keyCode == 13) {
    // This is duplicate code as in the searchButton click event listener above.
    // I added this to show how to trigger the same action from two different events.

    // 1. declare and assign the value of the event's target to a variable AKA whatever is typed into the search bar
    let searchInputValue = searchInput.value;

    // 2. check if input exists and if input is larger than 0
    if (searchInputValue && searchInputValue.trim().length > 0) {
      // 3. redefine 'value' to exclude white space and change input to all lowercase
      searchInputValue = searchInputValue.trim().toLowerCase();
      // 4. return the results only if the value of the search is included in the video's name
      // we need to write code (a function for filtering through our data to include the search input value)
      filterVideos(searchInputValue);
      // filterVideosByEvent(searchInputValue);
      // filterVideosByUrl(searchInputValue);
    } else {
      // 5. return nothing
      // input is invalid -- show an error message or show no results
      console.log('Try your search again');
    }
  }
});

// creating and declaring a function called "setList"
// setList takes in a param of "results"
function setList(results) {
  for (const video of results) {
    // creating a li element for each result item
    const resultItem = document.createElement('<li>');

    // adding a class to each item of the results
    resultItem.classList.add('result-item');

    // grabbing the name of the current point of the loop and adding the name as the list item's text
    const text = document.createTextNode(video.name);

    // appending the text to the result item
    resultItem.appendChild(text);

    // appending the result item to the list
    list.appendChild(resultItem);
  }
}

// function videosSearchFunction() {
//   if (videos.indexOf(Number(myInputs.value)) == -1) {
//     document.write(myInputs.value + '<b>Not Found</b>');
//   } else {
//     document.write(
//       '<b>Element found at ' +
//         videos.indexOf(Number(myInputs.value)) +
//         ' Position</b>'
//     );
//   }
// }

// searchButton.addEventListener('click', searchFunction);
