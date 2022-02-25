var videos = [
  {
    name: 'Video001',
    url: 'https://youtu.be/tx-0LNf7nLw',
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
  {
    name: '165630986',
    url: '../assets/videos/165630986_shadow_scope1-cool-twirler.mp4',
  },
  {
    name: '325211119',
    url: '../assets/videos/325211119_shadow_scope1-twirl-no-art.mp4',
  },
  {
    name: '396658953',
    url: '../assets/videos/396658953_shadow_scope1-clean-art-tinyflipper.mp4',
  },
  {
    name: '409856315',
    url: '../assets/videos/409856315_shadow_scope1-twirler2.mp4',
  },
  {
    name: '441121359',
    url: '../assets/videos/441121359_shadow_scope1-letter-o.mp4',
  },
  {
    name: '588718730',
    url: '../assets/videos/588718730_shadow_scope1-best-twirl-no-art.mp4',
  },
  {
    name: '719834883',
    url: '../assets/videos/719834883_shadow_scope1-twirler3-art.mp4',
  },
  {
    name: '752028009',
    url: '../assets/videos/752028009_shadow_scope1-twirler4.mp4',
  },
  {
    name: '820976329',
    url: '../assets/videos/820976329_shadow_scope1-clearntwirler-noart.mp4',
  },
  {
    name: '834630658',
    url: '../assets/videos/834630658_shadow_scope1-cleantwirler-2.mp4',
  },
  {
    name: '906913564',
    url: '../assets/videos/906913564_shadow_scope1-twirler4-art.mp4',
  },
];

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

// Injects the videos into the grid based on the array of `videosToRender`

function renderVideos(videosToRender) {
  var videoGrid = document.getElementById('videos-grid');

  if (videoGrid !== null) {
    videoGrid.innerHTML = '';

    // Loop through each video and add the html element to the grid
    videosToRender.forEach((video) => {
      videoGrid.innerHTML += `
        <div class="video-card">
          <h2><a href="./video.html">${video.name}</a></h2>
       
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