function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
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
var videos = [
  {
    name: 'Video001',
    url: '../assets/videos/blobby-with-whiskers-20210121-210334shadow_scope1.mp4',
  },
  {
    name: 'Video002',
    url: '../assets/videos/blobby-with-whiskers-20210121-210334shadow_scope1.mp4',
  },
  {
    name: 'Video003',
    url: '../assets/videos/blobby-with-whiskers-20210121-210334shadow_scope1.mp4',
  },
  {
    name: 'Video004',
    url: '../assets/videos/chasing-blobby-with-whiskers-20210121-210350shadow_scope1.mp4',
  },
  {
    name: 'Video005',
    url: '../assets/videos/creepy-moving-bug-20210121-115601shadow_scope1.mp4',
  },
  {
    name: 'Video006',
    url: '../assets/videos/dot-tracking-greenplant-20210121-160535shadow_scope1.mp4',
  },
  {
    name: 'Video007',
    url: '../assets/videos/dot-tracking-plant-20210121-155902shadow_scope1.mp4',
  },
  {
    name: 'Video008',
    url: '../assets/videos/inching-worm2-20210121-151712shadow_scope1.mp4',
  },
  {
    name: 'Video009',
    url: '../assets/videos/littleguy-bumpercar-20210121-145755shadow_scope1.mp4',
  },
  {
    name: 'Video010',
    url: '../assets/videos/littleguy-spirals-20210121-145740shadow_scope1.mp4',
  },
  {
    name: 'Video011',
    url: '../assets/videos/party-elegans-20210121-090808shadow_scope1.mp4',
  },
  {
    name: 'Video012',
    url: '../assets/videos/pooping-flea-20210121-114516shadow_scope1.mp4',
  },
  {
    name: 'Video013',
    url: '../assets/videos/rotation-20201026-173549shadow_scope1.mp4',
  },
  {
    name: 'Video014',
    url: '../assets/videos/segmented-nematode-20210121-204833shadow_scope1.mp4',
  },
  {
    name: 'Video015',
    url: '../assets/videos/segmented-worm-and-flea-20210121-204848shadow_scope1.mp4',
  },
  {
    name: 'Video016',
    url: '../assets/videos/spirals-and-zigzags-20210121-153913shadow_scope1.mp4',
  },
  {
    name: 'Video017',
    url: '../assets/videos/super-spin-20210121-082703shadow_scope1.mp4',
  },
  {
    name: 'Video018',
    url: '../assets/videos/waterflea-great-20201026-223810shadow_scope1.mp4',
  },
  {
    name: 'Video019',
    url: '../assets/videos/wormy-worms-20210121-151600shadow_scope1.mp4',
  },
  {
    name: 'Video020',
    url: '../assets/videos/zip-and-tiny-spirals-20210120-235145shadow_scope1.mp4',
  },
];

const searchInput = document.querySelector('.input');
const searchButton = document.getElementById('search-button');

// Initially load the videos by default
renderVideos(videos);

// Injects the videos into the grid based on the array of `videosToRender`

function renderVideos(videosToRender) {
  var videoGrid = document.getElementById('videos-grid')[0];

  if (videoGrid !== null) {
    videoGrid.innerHTML = '';

    // Loop through each video and add the html element to the grid
    videosToRender.forEach((video) => {
      videoGrid.innerHTML += `
        <div class="video-card">
          <h2>${video.name}</a></h2>
          <video conrols>
            <source src="${video.url}" />
          </video>
        </div>
      `;
    });
  }
}

searchButton.addEventListener('click', (e) => {
  // inside, we will need to achieve a few things:
  // 1. declare and assign the value of the event's target to a variable AKA whatever is typed into the search bar
  let searchInputValue = searchInput.value;

  // 2. check: if input exists and if input is larger than 0
  if (searchInputValue && searchInputValue.trim().length > 0) {
    // 3. redefine 'value' to exclude white space and change input to all lowercase
    searchInputValue = searchInputValue.trim().toLowerCase();
    // 4. return the results only if the value of the search is included in the video's name
    // we need to write code (a function for filtering through our data to include the search input value)
    filterVideosByName(searchInputValue);
  } else {
    // 5. return nothing
    // input is invalid -- show an error message or show no results
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
      filterVideosByName(searchInputValue);
    } else {
      // 5. return nothing
      // input is invalid -- show an error message or show no results
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
