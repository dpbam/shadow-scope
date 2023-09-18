// import videos from './videosArray';

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

// Selected Video
var selectedVideoString = localStorage.getItem('selectedVideo');
var selectedVideo =
  selectedVideoString != null ? JSON.parse(selectedVideoString) : null;
var selectedVideoContainer =
  document.getElementsByClassName('video-container')[0];
if (selectedVideoContainer != null) {
  selectedVideoContainer.innerHTML = `
  <h1 name="video-name">${selectedVideo.name}</h1>
  <iframe src="${selectedVideo.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>/>
  `;
}

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

// url is from YouTube Embed. Click Share then copy-paste url from inside embed
var videos = [
  {
    name: 'Video001',
    event: 'event1',
    tags: ['event1', 'featured'],
    url: 'https://www.youtube.com/embed/tx-0LNf7nLw',
  },
  {
    name: 'Video002',
    event: 'event1',
    url: 'https://www.youtube.com/embed/ENqn4gUsH1o',
  },
  {
    name: 'Video003',
    event: 'event1',
    url: 'https://www.youtube.com/embed/DCj1K84IkLw',
  },
  {
    name: 'Video004',
    event: 'event1',
    url: 'https://www.youtube.com/embed/L75V2Qnz80w',
  },
  {
    name: 'Video005',
    event: 'event1',
    url: 'https://www.youtube.com/embed/1Z7YHfkDKr8',
  },
  {
    name: 'Video006',
    event: 'event1',
    url: 'https://www.youtube.com/embed/4NmNGORCi3I',
  },
  {
    name: 'Video007',
    event: 'event1',
    url: 'https://www.youtube.com/embed/cXKY_r6UGxk',
  },
  {
    name: 'Video008',
    event: 'event1',
    url: 'https://www.youtube.com/embed/6D9vTvk-gSc',
  },
  {
    name: 'Video009',
    event: 'event1',
    url: 'https://www.youtube.com/embed/EmVRDp6aTN4',
  },
  {
    name: 'Video010',
    event: 'event1',
    url: 'https://www.youtube.com/embed/XtlfKk5SxDA',
  },
  {
    name: 'Video011',
    event: 'event1',
    url: 'https://www.youtube.com/embed/ZomlIUn4Bm4',
  },
  {
    name: 'Video012',
    event: 'event1',
    tags: ['event1', 'featured'],
    url: 'https://www.youtube.com/embed/QcKVCuRgp4s',
  },
  {
    name: 'Video013',
    event: 'event1',
    url: 'https://www.youtube.com/embed/nxyZzSgKKXU',
  },
  {
    name: 'Video014',
    event: 'event1',
    url: 'https://www.youtube.com/embed/mwR3JC4MfaE',
  },
  {
    name: 'Video015',
    event: 'event1',
    url: 'https://www.youtube.com/embed/e1Q_uCbw9qY',
  },
  {
    name: 'Video016',
    event: 'event1',
    url: 'https://www.youtube.com/embed/T_obeZvgypI',
  },
  {
    name: 'Video017',
    event: 'event1',
    url: 'https://www.youtube.com/embed/cWFsKFaFv_A',
  },
  {
    name: 'Video018',
    event: 'event1',
    url: 'https://www.youtube.com/embed/kyhRDZmZrZI',
  },
  {
    name: 'Video019',
    event: 'event1',
    url: 'https://www.youtube.com/embed/lLeiPrxFAV8',
  },
  {
    name: 'Video020',
    event: 'event1',
    url: 'https://www.youtube.com/embed/3oyKoztr9xY',
  },
  {
    name: '165630986',
    event: 'event2',
    url: 'https://www.youtube.com/embed/1TCxm4qMmWY',
  },
  {
    name: '325211119',
    event: 'event2',
    url: 'https://www.youtube.com/embed/QIG58eo_7L0',
  },
  {
    name: '396658953',
    event: 'event2',
    url: 'https://www.youtube.com/embed/2Td48rux3A4',
  },
  {
    name: '409856315',
    event: 'event2',
    url: 'https://www.youtube.com/embed/k_85umJemqw',
  },
  {
    name: '441121359',
    event: 'event2',
    url: 'https://www.youtube.com/embed/kZ1y24nfFDo',
  },
  {
    name: '588718730',
    event: 'event2',
    url: 'https://www.youtube.com/embed/y-ZABdnuBhA',
  },
  {
    name: '719834883',
    event: 'event2',
    url: 'https://www.youtube.com/embed/gf70FtVeEEg',
  },
  {
    name: '752028009',
    event: 'event2',
    url: 'https://www.youtube.com/embed/BpZnonBm9Nw',
  },
  {
    name: '820976329',
    event: 'event2',
    url: 'https://www.youtube.com/embed/yr7S8lv0EQI',
  },
  {
    name: '834630658',
    event: 'event2',
    url: 'https://www.youtube.com/embed/tGBE2R3QA-Y',
  },
  {
    name: '906913564',
    event: 'event2',
    url: 'https://www.youtube.com/embed/-872LNe35-s',
  },
  {
    name: '19796',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/7N5xh8Ekil0',
  },
  {
    name: '20873',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/G7bR6dLkzuA',
  },
  {
    name: '20133',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/zkHxoT03pps',
  },
  {
    name: '19959',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/P3byuL2qpGc',
  },
  {
    name: '21248',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/FQKvB_TOQ8w',
  },
  {
    name: '10154',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/oYbI7zzSJdE',
  },
  {
    name: '10999',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/tzY03leKxGc',
  },
  {
    name: '11222',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/PPBAZPu1SMg',
  },
  {
    name: '11654',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/9aIk4SFJLWs',
  },
  {
    name: '11880',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/CrCCpl5r36o',
  },
  {
    name: '12102',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/SCdXV-JqgDo',
  },
  {
    name: '14991',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/k1MX0jU9Jic',
  },
  {
    name: '15033',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/HfS2CLB2p1I',
  },
  {
    name: '16757',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/iEEVvaezZ_Q',
  },
  {
    name: '24322',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/43AMIIb1_LE',
  },
  {
    name: '24732',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/abtlGwahoGg',
  },
  {
    name: '25165',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/IKaQnSBnfck',
  },
  {
    name: '25543',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/ZrMPV86Ua-k',
  },
  {
    name: '21359',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/uTAksYBobTo',
  },
  {
    name: '22108',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/FOmp52_2pHM',
  },
  {
    name: '22487',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/uyqNRmH2ed8',
  },
  {
    name: '22660',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/ugIn_ZW9eGc',
  },
  {
    name: '22743',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/3LRiFqGIb9o',
  },
  {
    name: '22998',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/FabgVJ2NVm8',
  },
  {
    name: '23151',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/2mDhEubg1VU',
  },
  {
    name: '23671',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/CXHWIIJOAmQ',
  },
  {
    name: '23833',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/NLLomMmQN8A',
  },
  {
    name: '24167',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/14oTLIUzX5o',
  },
  {
    name: '24285',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/Hb2lcGCjRSY',
  },
  {
    name: '28039',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/haoq48HhPfY',
  },
  {
    name: '28248',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/s34D4yx8nRs',
  },
  {
    name: '28364',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/sf8dOKM_ip0',
  },
  {
    name: '28746',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/8LvpCXyyYmk',
  },
  {
    name: '30087',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/SLTtVkabpTc',
  },
  {
    name: '30273',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/YJBnzN1Lteg',
  },
  {
    name: '30389',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/0uMh1jGDU4w',
  },
  {
    name: '31510',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/EJ5FTOU9DTw',
  },
  {
    name: '31656',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/cPY_w8a4ysU',
  },
  {
    name: '31813',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/vHkvGN9OgKg',
  },
  {
    name: '25991',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/j9tAtEWcIuU',
  },
  {
    name: '26070',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/A5hIqT_iCi4',
  },
  {
    name: '26434',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/Sl18VE3_euU',
  },
  {
    name: '26771',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/klbKl0R8SNI',
  },
  {
    name: '27920',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/Cq26j9turik',
  },
  {
    name: '36753',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/_DvQ-D05UPs',
  },
  {
    name: '37157',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/toVxRDKrwBk',
  },
  {
    name: '37256',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/ONodfkKKxI8',
  },
  {
    name: '38001',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/t5u1WDKu2vU',
  },
  {
    name: '38116',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/L3i8JpQfuKA',
  },
  {
    name: '38473',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/ut_b78EDsrA',
  },
  {
    name: '40457',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/odKOzcFkzTc',
  },
  {
    name: '39593',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/rskr8vDogA0',
  },
  {
    name: '32238',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/cQX1sCiyWi8',
  },
  {
    name: '32300',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/0BBp-ygluac',
  },
  {
    name: '19204',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/FWEnAvKQhHk',
  },
  {
    name: '36070',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/BrnrobB7bYc',
  },
  {
    name: '35932',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/jK04oj7GbSk',
  },
  {
    name: '34344',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/veQ7F68HzRE',
  },
  {
    name: '34058',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/YcQAjBCerVI',
  },
  {
    name: '32910',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/hqqJbFmo9Gk',
  },
  {
    name: '44320',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/hCf0lsC0cF0',
  },
  {
    name: '44365',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/Vkf5P1KfSPk',
  },
  {
    name: '45979',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/fIOdBJ8OPUk',
  },
  {
    name: '46300',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/9zNf_Jev2Oc',
  },
  {
    name: '46784',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/P0Q4tPWfXuU',
  },
  {
    name: '47465',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/oa4vg0uHk7s',
  },
  {
    name: '47445',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/yPRJc5Alqmo',
  },
  {
    name: '47898',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/xnkvvD-RAR4',
  },
  {
    name: '40764',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/GzWChCPelPE',
  },
  {
    name: '40926',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/3K460NWXvfw',
  },
  {
    name: '41033',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/a_Et9OIdqcw',
  },
  {
    name: '41829',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/CKATyz56_04',
  },
  {
    name: '42200',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/ltEiZMXtmSY',
  },
  {
    name: '42677',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/1Y_TKKFQX0s',
  },
  {
    name: '44079',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/fz6-wK19e9M',
  },
  {
    name: '55238',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/OCQJWRkXSFA',
  },
  {
    name: '55343',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/qma2ImeZZd8',
  },
  {
    name: '55977',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/dknGBLCXEIs',
  },
  {
    name: '57327',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/LvDIM_TwWCY',
  },
  {
    name: '57726',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/AzEGhN_y-D4',
  },
  {
    name: '59924',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/iEk5DFeqelI',
  },
  {
    name: '60260',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/JstannRxXNE',
  },
  {
    name: '49173',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/fzRTNWqRSZo',
  },
  {
    name: '51633',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/XkEUMNEp-dk',
  },
  {
    name: '51872',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/8W_-5cwNKkA',
  },
  {
    name: '52316',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/VOVXta4PhNY',
  },
  {
    name: '52602',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/eydSPOrVp5k',
  },
  {
    name: '52900',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/mVjdQfvRjpM',
  },
  {
    name: '53802',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/EqTH82Ra-gE',
  },
  {
    name: '54064',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/JkYILdoH57w',
  },
  {
    name: '66244',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/3bDJjdz06nI',
  },
  {
    name: '66327',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/wC9Pc4ZxgX8',
  },
  {
    name: '66583',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/IpQUWk8_8b8',
  },
  {
    name: '67081',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/wEvg8_1q4jQ',
  },
  {
    name: '67843',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/Envq6pkL6Ao',
  },
  {
    name: '68151',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/PS_QVDu-Lx4',
  },
  {
    name: '68786',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/wqGB33BBUNo',
  },
  {
    name: '72194',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/2x238zOsvpA',
  },
  {
    name: '60604',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/MSluTg6WfGI',
  },
  {
    name: '61030',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/MrqHmKKlOqM',
  },
  {
    name: '61829',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/VVcMw6T-MGs',
  },
  {
    name: '64227',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/fryYSs_jT9I',
  },
  {
    name: '64357',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/tLt6yfSsAqw',
  },
  {
    name: '65172',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/TdkHrbNUA14',
  },
  {
    name: '65195',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/40KVYF9zFTU',
  },
  {
    name: '78778',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/cupiNvYcpjk',
  },
  {
    name: '78837',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/1hcpObe5GHs',
  },
  {
    name: '79300',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/0g6sXPB2Quc',
  },
  {
    name: '79776',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/8JLntZAwaKU',
  },
  {
    name: '79861',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/jA62ly88zfQ',
  },
  {
    name: '73200',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/tfI8-KIZr3M',
  },
  {
    name: '74681',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/s4cbASucbHE',
  },
  {
    name: '77187',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/o1j8LDo0tzc',
  },
  {
    name: '78567',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/AeTxPejoxsM',
  },
  {
    name: '78579',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/a1Ypqqu9ljc',
  },
  {
    name: '83039',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/8HkNc2V-zrE',
  },
  {
    name: '83281',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/pk03k3XBQjs',
  },
  {
    name: '83807',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/7qlENtQqMAI',
  },
  {
    name: '84590',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/q_aSe_-OKRc',
  },
  {
    name: '85491',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/c0yDUVoPxcs',
  },
  {
    name: '76134',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/waaKhFDk640',
  },
  {
    name: '74966',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/zdmGEPzm-yM',
  },
  {
    name: '76243',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/tZLpVifJ0XM',
  },
  {
    name: '76283',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/PRsn1sgKcO4',
  },
  {
    name: '83004',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/GGnEFl5AUAc',
  },
  {
    name: '81717',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/dnt9g2TG3-U',
  },
  {
    name: '81130',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/Zp1K8RELnGU',
  },
  {
    name: '80228',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/59DSMh0m1dQ',
  },
  {
    name: '79900',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/-00iq09TOfw',
  },
  {
    name: '90237',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/__9c5VYjqsw',
  },
  {
    name: '91175',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/GaPPnpn2hfs',
  },
  {
    name: '91467',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/GDn6TsmwYn4',
  },
  {
    name: '92540',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/ykYe4lib1V4',
  },
  {
    name: '93437',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/yDKL8xXb09M',
  },
  {
    name: '93473',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/Go2Qsvzcmcs',
  },
  {
    name: '85699',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/ml_o5_ase3E',
  },
  {
    name: '85891',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/njmmEG51A4o',
  },
  {
    name: '86103',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/hwuWNtfu1Sg',
  },
  {
    name: '88987',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/sDChLsmy8Bg',
  },
  {
    name: '88774',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/BYra3vix_-w',
  },
  {
    name: '88773',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/5I4BJMjDN7w',
  },
  {
    name: '88664',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/N2qo98HCPNY',
  },
  {
    name: '87927',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/ZxyOsTHXw7c',
  },
  {
    name: '86912',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/GR_uhSwN_No',
  },
  {
    name: '95568',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/5M8pzQRB5ME',
  },
  {
    name: '95622',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/DK4XT_H3bvc',
  },
  {
    name: '96685',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/s_L8a2Uvbvg',
  },
  {
    name: '99732',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/7KTRfrh7D14',
  },
  {
    name: ' ',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/W20YpPNspsg',
  },
  {
    name: '93973',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/fpaX6hqdL7A',
  },
  {
    name: '94657',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://www.youtube.com/embed/wO2l8dDLlDA',
  },
  {
    name: '21205',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/JCffblwOPLE',
  },
  {
    name: '21513',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/_l10xdknHQc',
  },
  {
    name: '23023',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/OUsZSN2hFfo',
  },
  {
    name: '23106',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/9VHAfe-ZLOw',
  },
  {
    name: '25537',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/XaZ7IDNK2Qk',
  },
  {
    name: '26849',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/eq9MvHv53Pg',
  },
  {
    name: '27282',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/4x_hoYKG_EI',
  },
  {
    name: '11111',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/R7VUBabLQxQ',
  },
  {
    name: '12764',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/FaclCGlGG8Q',
  },
  {
    name: '15129',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/UTtc0Ivky5A',
  },
  {
    name: '16947',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/8n98DSUQ9hA',
  },
  {
    name: '18817',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/90ZcZ2KAL4w',
  },
  {
    name: '17999',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/PU2z0BCBcV4',
  },
  {
    name: '20196',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/bXxeEtNQuvs',
  },
  {
    name: '19376',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/-rbDNlF9jsE',
  },
  {
    name: '29922',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/qeK1oB9sllc',
  },
  {
    name: '34498',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/crvBMMeBJPg',
  },
  {
    name: '34576',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/vs9FsAIqk_U',
  },
  {
    name: '34605',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/0gLG9fLWZUI',
  },
  {
    name: '34841',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/HxBlPS4YQ_Q',
  },
  {
    name: '35369',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/2KXl8D4jSfU',
  },
  {
    name: '27823',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/4prck0tdsFI',
  },
  {
    name: '27958',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/m8d0KRphQU4',
  },
  {
    name: '30837',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/NBRzz-wERMs',
  },
  {
    name: '32665',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/sSbY2Nv6TK4',
  },
  {
    name: '32760',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/wWxkUZTEtX0',
  },
  {
    name: '33083',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/kXvGuUa1TNI',
  },
  {
    name: '40756',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/QgTRtMu2Yes',
  },
  {
    name: '41129',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/AIN4QPI3hjY',
  },
  {
    name: '41473',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/8aZhDeU16YY',
  },
  {
    name: '37408',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/6CLJbjiW3_k',
  },
  {
    name: '38711',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/KZFbAG5Vy30',
  },
  {
    name: '42619',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/eMey_Vbs4aM',
  },
  {
    name: '43928',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/nc-AnPrTgx4',
  },
  {
    name: '36117',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/sY8DiAgjSD8',
  },
  {
    name: '36291',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/HZkuQAYvQZY',
  },
  {
    name: '36615',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/2TeaFqRjj9Y',
  },
  {
    name: '28715',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/YSUEkavkAiI',
  },
  {
    name: '28987',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/rvcMkfFPwPI',
  },
  {
    name: '29448',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/h4VE8vMdZw0',
  },
  {
    name: '50515',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/A4g00Jn7Chw',
  },
  {
    name: '53830',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/EKcbzIKUjdI',
  },
  {
    name: '54617',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/UcnrhdgGq5U',
  },
  {
    name: '54835',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/W-OKepq67lU',
  },
  {
    name: '56199',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/AKiHekOcIIs',
  },
  {
    name: '56332',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/ANLhENeEwcs',
  },
  {
    name: '56349',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/CkXgoW1k2_k',
  },
  {
    name: '56475',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/p7gjk1PESZ0',
  },
  {
    name: '44518',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/UIwbHlGVqd4',
  },
  {
    name: '46889',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/nr9RWP6kXE8',
  },
  {
    name: '48170',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/XjOl8LksZn8',
  },
  {
    name: '49399',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/2WDp4-qhNFo',
  },
  {
    name: '50442',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/EMzqrsi5jNY',
  },
  {
    name: '44658',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/-272JQBpjvk',
  },
  {
    name: '46285',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/S25KaeqG_So',
  },
  {
    name: '62539',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/6-Kr5VxFK10',
  },
  {
    name: '62868',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/MqiHgBxyWHU',
  },
  {
    name: '64125',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/yJokeHgo9qc',
  },
  {
    name: '65033',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/3ab28svUQ9U',
  },
  {
    name: '65242',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/v57mcrT1IeM',
  },
  {
    name: '65683',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/1W9YLux7c2w',
  },
  {
    name: '66965',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/0CnlXxmNfnk',
  },
  {
    name: '56872',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/N0lttcPIU-w',
  },
  {
    name: '57524',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/AAK2ShZNbtY',
  },
  {
    name: '58262',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/oyKeNk9bKps',
  },
  {
    name: '58715',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/rhV7JjMWAOg',
  },
  {
    name: '60274',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/jEwQceOTKqk',
  },
  {
    name: '61547',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/YlXdYcHRKDs',
  },
  {
    name: '62135',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/NkuA3Y5ticM',
  },
  {
    name: '62386',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/NSc8U6pQfB0',
  },
  {
    name: '73567',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/faky3xb9uv0',
  },
  {
    name: '74631',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/yXksTkcIQmM',
  },
  {
    name: '79320',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/vaAVHL7eomk',
  },
  {
    name: '67687',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/LIBbtZVicpM',
  },
  {
    name: '69300',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/RyVsSAMYzbk',
  },
  {
    name: '72862',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/OFOCRPoaVII',
  },
  {
    name: '71076',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/jgBqG6c4wmw',
  },
  {
    name: '73199',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/w7_Xblxa0RE',
  },
  {
    name: '73369',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/8spY3HdErsc',
  },
  {
    name: '70235',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/8wjuGVsu65g',
  },
  {
    name: '70484',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/fna65XL26t0',
  },
  {
    name: '70989',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/Rf2wL6HQxaM',
  },
  {
    name: '70650',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/iMoS4MUJTOc',
  },
  {
    name: '91441',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/8qrHCJb0bLI',
  },
  {
    name: '92311',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/OJQtnrsMSC4',
  },
  {
    name: '94720',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/GsxZOUw3uFs',
  },
  {
    name: '95197',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/n1dW25JTFbE',
  },
  {
    name: '81134',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/YKjFP5O0fm0',
  },
  {
    name: '81430',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/fiZ8c6whgPU',
  },
  {
    name: '81693',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/F7EUUHnbGIY',
  },
  {
    name: '82314',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/n9w7-nvYyLg',
  },
  {
    name: '83550',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/yWLQmg4GbG4',
  },
  {
    name: '83727',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/NzUi5Wr1sOY',
  },
  {
    name: '84855',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/XefUfUGy63Y',
  },
  {
    name: '85603',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/YR4Dy3aWEDA',
  },
  {
    name: '85801',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/yvAIAd308xQ',
  },
  {
    name: '89058',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/O3azhcvyZOI',
  },
  {
    name: '97595',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/x1vzQMCruuU',
  },
  {
    name: '97597',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/Ok4e9utY8XE',
  },
  {
    name: '96285',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/A2oKuyjos3I',
  },
  {
    name: '98146',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/Mf19F4OF0nE',
  },
  {
    name: '97387',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/_d02hIpN1Xk',
  },
  {
    name: '97326',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/KPt0iz8Hqg4',
  },
  {
    name: '97324',
    event: 'Bennett Elementary Mr. Sweeney Apr 22, 2022',
    url: 'https://www.youtube.com/embed/-qRjdkGDFeU',
  },
  {
    name: '19796',
    event: 'Irish Elementary Poudre River Investigation May 2, 2022',
    url: 'https://www.youtube.com/embed/5NVLv_pDk2Y',
  },
  {
    name: '62429',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/TH5FFeVZrbg',
  },
  {
    name: '63120',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/7ZF8HjsHccc',
  },
  {
    name: '63990',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/DxH9ZEWOCQc',
  },
  {
    name: '64513',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/gGnaJvQZWT0',
  },
  {
    name: '62087',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/3jBCvtJjKLY',
  },
  {
    name: '59641',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/WJaDzbE0CuU',
  },
  {
    name: '61432',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/iHpgElMEeIE',
  },
  {
    name: '61759',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/dpS8vjuJanw',
  },
  {
    name: '58882',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nnIOraHcV-M',
  },
  {
    name: '58892',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/sRWSik234zg',
  },
  {
    name: '59595',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/BrHFmq9dDUM',
  },
  {
    name: '57840',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/xhOwkdZxIpM',
  },
  {
    name: '58275',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/v8YItH2IPrU',
  },
  {
    name: '58797',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/hCHRWL6Es04',
  },
  {
    name: '54953',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/iQjEi3zyFn4',
  },
  {
    name: '55253',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/e0GJG2Bh4Js',
  },
  {
    name: '56596',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/3wmwmAk62TM',
  },
  {
    name: '53633',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/KEoHtxwXUxk',
  },
  {
    name: '54260',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/4dKcicDh0zs',
  },
  {
    name: '54419',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ghzKUP8PgIQ',
  },
  {
    name: '54872',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/UP0BTXv9sCY',
  },
  {
    name: '53304',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/9dJjZ5FDloI',
  },
  {
    name: '53403',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/LdVATuvWIy8',
  },
  {
    name: '50397',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/pq47fTbVUZ0',
  },
  {
    name: '50848',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/L1sNGtAxDHw',
  },
  {
    name: '52605',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/0w-j55oweAY',
  },
  {
    name: '52698',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nyT9Uk5mEoE',
  },
  {
    name: '49835',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Le9N6NK1g-c',
  },
  {
    name: '49905',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/gpGeE5_Neeo',
  },
  {
    name: '49011',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/e-h8ZKfz_EE',
  },
  {
    name: '49265',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/RpZTSx4wU2A',
  },
  {
    name: '49732',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/3pHshIl2Fdo',
  },
  {
    name: '47071',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/IQUFCIbwj48',
  },
  {
    name: '47818',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/66YJvyieBUE',
  },
  {
    name: '48127',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Jd_G7t0j1xQ',
  },
  {
    name: '44591',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ydbdebl0G0I',
  },
  {
    name: '45256',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ukVQvGXmF_4',
  },
  {
    name: '45711',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/KQnMNQPcm40',
  },
  {
    name: '46620',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ac1EgNMlA0k',
  },
  {
    name: '47001',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/71iY9VjEtRw',
  },
  {
    name: '44524',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/HuxVieMBZUI',
  },
  {
    name: '43541',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/WbxL7VEY-mQ',
  },
  {
    name: '44059',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/qo2AQQ5GHek',
  },
  {
    name: '44088',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/K81JHWrRdkU',
  },
  {
    name: '44303',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Gj7Ku7NWeTM',
  },
  {
    name: '43073',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/RZgSLR6XDMU',
  },
  {
    name: '43405',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/mYe086EUg7c',
  },
  {
    name: '41198',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/vJflpfabOM4',
  },
  {
    name: '42173',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/p7WMUkhjAR8',
  },
  {
    name: '42694',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/x1BRkNzwl3k',
  },
  {
    name: '40844',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/GT8loKnd4y8',
  },
  {
    name: '40890',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/3Ra_rRQMRp4',
  },
  {
    name: '41196',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/zgCC-y3Ho6Y',
  },
  {
    name: '38096',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/wRTo9GEPFI0',
  },
  {
    name: '38354',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/2y2yB3RZPcw',
  },
  {
    name: '40076',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/e8b4uX1-GWM',
  },
  {
    name: '37235',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/cJmEJ5Goq4c',
  },
  {
    name: '37492',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/WQmNvsb5ajw',
  },
  {
    name: '37618',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/rzciG27MBGs',
  },
  {
    name: '36402',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/0dcSMtZFcQU',
  },
  {
    name: '36982',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ybsvLuZULyc',
  },
  {
    name: '37164',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/OHziz4jRW5U',
  },
  {
    name: '33892',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/SPsPbrQARrk',
  },
  {
    name: '35514',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/edcAj6jkpvI',
  },
  {
    name: '36225',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/B3--QWz576Y',
  },
  {
    name: '33447',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/g-JLZAKM1rQ',
  },
  {
    name: '33645',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/1esCQiWJM2k',
  },
  {
    name: '32791',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/sUDnhPfKLCw',
  },
  {
    name: '32895',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/3f5xYdqycDY',
  },
  {
    name: '33155',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ZSjgUBrB5Fs',
  },
  {
    name: '33155',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ZSjgUBrB5Fs',
  },
  {
    name: '32916',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/u0OiYV_lG6k',
  },
  {
    name: '30766',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/0wpXTvV9jJs',
  },
  {
    name: '32699',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/LAHTb6SDrh4',
  },
  {
    name: '32718',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/5TW0wHzDosI',
  },
  {
    name: '27322',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/j0DGnfFhYZU',
  },
  {
    name: '28737',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/_MC02xKRG0k',
  },
  {
    name: '29797',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/V9jBaDLIzKg',
  },
  {
    name: '26183',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/QTigs057jb8',
  },
  {
    name: '26912',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/vjREXWM67jQ',
  },
  {
    name: '27139',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/LiErNtuxV84',
  },
  {
    name: '22548',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/3me5k7nPiHo',
  },
  {
    name: '25170',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/qXtnMmxh5bM',
  },
  {
    name: '25297',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/-k61LiOvEkg',
  },
  {
    name: '17123',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/fXfj-cTesjY',
  },
  {
    name: '18737',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/sRchaAuizfE',
  },
  {
    name: '19332',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/XGMsNELbUGA',
  },
  {
    name: '21875',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/7iWgkfB7ly',
  },
  {
    name: '15963',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/tT7R9SF0dsI',
  },
  {
    name: '16216',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/8yVigHxkOg8',
  },
  {
    name: '14693',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/XOsrRqxBzxQ',
  },
  {
    name: '14363',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/qlO_srfgKgI',
  },
  {
    name: '14034',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/O7A0qxcsypA',
  },
  {
    name: '14736',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/dAsjlGBH_Ic',
  },
  {
    name: '14947',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/fl5D5P6rXr8',
  },
  {
    name: '15426',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/qhrS6QxnVMc',
  },
  {
    name: '11797',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/gOPZGGzX9sE',
  },
  {
    name: '11797',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/gOPZGGzX9sE',
  },
  {
    name: '12187',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/NQncNeDo3RA',
  },
  {
    name: '12485',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/CqXCmWAIeeo',
  },
  {
    name: '13803',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/_fALfCFYNlI',
  },
  {
    name: '10618',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/pKth2T1N4h8',
  },
  {
    name: '10763',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/FA78FTBj0yk',
  },
  {
    name: '98131',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/KL9WIaCdUgs',
  },
  {
    name: '99379',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/1joDvwnPBAo',
  },
  {
    name: '99572',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/KD3cZwNDrvo',
  },
  {
    name: '99596',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/kKhds1kr0GI',
  },
  {
    name: '99772',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/jMiChuK8_qE',
  },
  {
    name: '99802',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Hm9R7ue25DM',
  },
  {
    name: '92897',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/PIFFt50xvK8',
  },
  {
    name: '93044',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/m9jo93HLiHQ',
  },
  {
    name: '93275',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/h5xezBE7lik',
  },
  {
    name: '93293',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/UkrRpsi9GSc',
  },
  {
    name: '94656',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/u5diEZcpQNE',
  },
  {
    name: '95651',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nBncpdQKNCU',
  },
  {
    name: '96551',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nVBd8gR4rXs',
  },
  {
    name: '96619',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/KjLF4LQSdiw',
  },
  {
    name: '96969',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Izr3pB5t17w',
  },
  {
    name: '97565',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/-MXByx-pmsQ',
  },
  {
    name: '88300',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/_PEKErPKsgs',
  },
  {
    name: '88471',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/MbeYDty6-Gk',
  },
  {
    name: '88495',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/HdBodT_4d6M',
  },
  {
    name: '89096',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/hrRKgra3Mlo',
  },
  {
    name: '89173',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Lk96qcTaO4w',
  },
  {
    name: '89523',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ITDVd5lz4aM',
  },
  {
    name: '90638',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/e5Dr-3e8emc',
  },
  {
    name: '91976',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nEDEccxrtzA',
  },
  {
    name: '92226',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/9z6dWt8mnAc',
  },
  {
    name: '92488',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/qECDmTsdnu0',
  },
  {
    name: '82060',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/8LTrV5Rt-Ak',
  },
  {
    name: '82060',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/8LTrV5Rt-Ak',
  },
  {
    name: '82102',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/A2Jr8wUjXso',
  },
  {
    name: '82102',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/A2Jr8wUjXso',
  },
  {
    name: '83406',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/_xowdCD6pPI',
  },
  {
    name: '83406',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/_xowdCD6pPI',
  },
  {
    name: '83747',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/xTLwP0nafrs',
  },
  {
    name: '83747',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/xTLwP0nafrs',
  },
  {
    name: '84306',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/dS2EQadpswI',
  },
  {
    name: '84306',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/dS2EQadpswI',
  },
  {
    name: '87113',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/osty5KkSiV8',
  },
  {
    name: '87229',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/camMdnaNjR4',
  },
  {
    name: '87567',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/JBBrVzu4J5s',
  },
  {
    name: '87567',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/JBBrVzu4J5s',
  },
  {
    name: '87602',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ab-SNpJce2k',
  },
  {
    name: '87607',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/sOkjv8MQYps',
  },
  {
    name: '76218',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/lgP7kKsovjY',
  },
  {
    name: '76288',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/XwJQ5Kn9TKc',
  },
  {
    name: '76585',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Uw6zZmDCWdY',
  },
  {
    name: '76814',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/RISJ71dLi_s',
  },
  {
    name: '77030',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/H8AdirMeHQE',
  },
  {
    name: '78317',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/5GNB4Y7lvuw',
  },
  {
    name: '78331',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/N0tumIraRBQ',
  },
  {
    name: '79958',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/N9TSQDptfrc',
  },
  {
    name: '80522',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/29ChL1_59rY',
  },
  {
    name: '81411',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/9bl_Ug0vGik',
  },
  {
    name: '68236',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/sn-C87y_Eo8',
  },
  {
    name: '68295',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/_Iu4Mh1U02U',
  },
  {
    name: '68786',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/EKx7QG3dL70',
  },
  {
    name: '69228',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/0bRcgekV4t0',
  },
  {
    name: '69804',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/j0Lx-pCU7oI',
  },
  {
    name: '71232',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Wj7_n7wbrI0',
  },
  {
    name: '73755',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/2qrQyIC5NGg',
  },
  {
    name: '73449',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/pDom1aNO_Ho',
  },
  {
    name: '73938',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/kEfU0X2HCnY',
  },
  {
    name: '74217',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/KBjv0htCDF4',
  },
  {
    name: '63455',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/-sH9NKrTlyc',
  },
  {
    name: '63710',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/rR3SDQcG_os',
  },
  {
    name: '64323',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/cwzXyt6ys-k',
  },
  {
    name: '65120',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nnnotCV1MHw',
  },
  {
    name: '65291',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nDsvLwFw45A',
  },
  {
    name: '65608',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/MdROeuo1nds',
  },
  {
    name: '65952',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/NwrvNRrohls',
  },
  {
    name: '66205',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/tvGdrxqGbOU',
  },
  {
    name: '66894',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/6rletsX-G-k',
  },
  {
    name: '67889',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/P9XRUcpXRbU',
  },
  {
    name: '59272',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/14sRFFLJ94w',
  },
  {
    name: '59736',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/kIpc_W2f4GM',
  },
  {
    name: '60005',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/zL2MoNJrzHg',
  },
  {
    name: '60497',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/H-bovcjzbQY',
  },
  {
    name: '60648',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/b7UpzsuPuT0',
  },
  {
    name: '61500',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/EXYb34q6YPc',
  },
  {
    name: '61665',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ZKiKY-0Nczg',
  },
  {
    name: '62398',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/qhmJrrlFPvE',
  },
  {
    name: '62508',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/XpLPL0Bmw4M',
  },
  {
    name: '63447',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/YXfu1HUbgh4',
  },
  {
    name: '55181',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/taVI6_kuOYY',
  },
  {
    name: '55583',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/iSS48zt8nMQ',
  },
  {
    name: '55628',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ngRJ9zS0yJs',
  },
  {
    name: '56585',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/cdMKIbJnx0U',
  },
  {
    name: '56738',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Hel52Y74e8A',
  },
  {
    name: '57177',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/LAHBN4CpPgE',
  },
  {
    name: '57218',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Sa2ASiGjItA',
  },
  {
    name: '58274',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/YcSVXUlyp-U',
  },
  {
    name: '58378',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/bW-bfbmTdLQ',
  },
  {
    name: '58634',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/PoZgAXax8DQ',
  },
  {
    name: '48724',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/7x8Swuc5bQM',
  },
  {
    name: '48803',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Ajrp6C_Aakg',
  },
  {
    name: '49080',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/GkGeJnWOtnc',
  },
  {
    name: '50543',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/w65gmRq4vCo',
  },
  {
    name: '50689',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/V5YJPyUjxdM',
  },
  {
    name: '51423',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/SvoMtQMz5DI',
  },
  {
    name: '51505',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/knIPP56L6CE',
  },
  {
    name: '53418',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/e9VxQ9xU1D4',
  },
  {
    name: '53954',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/kTW2AigXfHY',
  },
  {
    name: '54094',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/3r93LrpTz74',
  },
  {
    name: '44285',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/uALpuyRfErM',
  },
  {
    name: '45158',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/RhxvSSE5lLM',
  },
  {
    name: '45641',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/TdUPO3QhGW0',
  },
  {
    name: '46113',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/lfmOVNufaok',
  },
  {
    name: '46474',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/IKlPRCEgnx0',
  },
  {
    name: '46488',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/vy7Cfdt9zGA',
  },
  {
    name: '47211',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/DCSuwD1JTIY',
  },
  {
    name: '47225',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/pjtGHpQEA3A',
  },
  {
    name: '48271',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/8Sw-E0z2GGQ',
  },
  {
    name: '48272',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/mxNB4aAPISo',
  },
  {
    name: '39936',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/k9_pe7grinA',
  },
  {
    name: '40267',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ZkPoY8LGg2o',
  },
  {
    name: '40532',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/9WVnlTYodG4',
  },
  {
    name: '40630',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/F_Pu2KdfWGE',
  },
  {
    name: '40933',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/YFfPIQ0MrNE',
  },
  {
    name: '41221',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/txbPPxvtLhU',
  },
  {
    name: '42205',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nhDZeZHxFac',
  },
  {
    name: '42217',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/bgPk1M8ecOM',
  },
  {
    name: '42503',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/sMjSce0tOso',
  },
  {
    name: '43891',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/knXsaxSYZZw',
  },
  {
    name: '35745',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/db_sqCEu3fM',
  },
  {
    name: '36263',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/3NCXxXgVBn4',
  },
  {
    name: '36949',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nLTNmfsZppY',
  },
  {
    name: '37115',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/RWTEeKidJ2g',
  },
  {
    name: '37257',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/B7EvpTcxRW8',
  },
  {
    name: '38197',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/bChTnvwzYEA',
  },
  {
    name: '38433',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ljEYaDpqnlQ',
  },
  {
    name: '38694',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/C-qIZdmNfTk',
  },
  {
    name: '38783',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/aoXG4VLhxOQ',
  },
  {
    name: '39584',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Fq2SrlctguU',
  },
  {
    name: '31950',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ZUj6h9wG6dI',
  },
  {
    name: '32740',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/0o0LDCE2r-s',
  },
  {
    name: '32897',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/I3PbCr7LAE4',
  },
  {
    name: '33526',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/3dTJLu6kbkE',
  },
  {
    name: '33664',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/-ygISAQP7J4',
  },
  {
    name: '33833',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/oFkPlfW974I',
  },
  {
    name: '34042',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/mF9pu-RkseY',
  },
  {
    name: '34620',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/UpNM364fZY4',
  },
  {
    name: '34670',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/aAKfQg_2WgM',
  },
  {
    name: '35056',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/oK_LRpC8rmk',
  },
  {
    name: '26967',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/kZX_Xy-R8_k',
  },
  {
    name: '28032',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/7QvFT-C7uMU',
  },
  {
    name: '29845',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/2Rfe_cZ__aU',
  },
  {
    name: '31157',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nR0LKWwjSc0',
  },
  {
    name: '30322',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/pelmGZiggTQ',
  },
  {
    name: '31217',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/OUSZRU2KG9g',
  },
  {
    name: '31607',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/K0SD_THXq1k',
  },
  {
    name: '31643',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/c-8dgGONxbw',
  },
  {
    name: '31752',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/-NdrUVA8HxI',
  },
  {
    name: '31766',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/_HOtMH7ZF5E',
  },
  {
    name: '24002',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/STr8QJjnceo',
  },
  {
    name: '24237',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/JS8pguCTqG8',
  },
  {
    name: '24913',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/P0cvCtMgSMo',
  },
  {
    name: '25072',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/1saOQCE36DI',
  },
  {
    name: '25339',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/AS0wpXmlIKA',
  },
  {
    name: '26227',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/pb6C1QS5SlU',
  },
  {
    name: '26227',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/pb6C1QS5SlU',
  },
  {
    name: '26425',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/fE1JDX41CZk',
  },
  {
    name: '26710',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/GQIyds2_Nbo',
  },
  {
    name: '26710',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/GQIyds2_Nbo',
  },
  {
    name: '26783',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/aEG7eKo8fX4',
  },
  {
    name: '26787',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/rVfmAy_4DFM',
  },
  {
    name: '26787',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/rVfmAy_4DFM',
  },
  {
    name: '18272',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/x5MofaFcyuU',
  },
  {
    name: '19388',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/s4b1Jgk3k3Q',
  },
  {
    name: '20219',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/4fu-GGEtOXA',
  },
  {
    name: '20276',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/q0ik5jjOG3I',
  },
  {
    name: '21197',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/8OpHvsMFTAY',
  },
  {
    name: '21647',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/5-xxQ6kxQKQ',
  },
  {
    name: '21785',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/rfawhbu6cQo',
  },
  {
    name: '22019',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ylb4mkghGxs',
  },
  {
    name: '23162',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/YSAeXVYZnLs',
  },
  {
    name: '10181',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/6D2_2vtzlo0',
  },
  {
    name: '10915',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/MMhOSODf_zs',
  },
  {
    name: '11371',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/zE2VseibkkY',
  },
  {
    name: '11755',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/h_JTAN6uSqw',
  },
  {
    name: '13826',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/j-DCqh45NSk',
  },
  {
    name: '14041',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/P1Pv75RoVVI',
  },
  {
    name: '14706',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/GMsmtDjKWRY',
  },
  {
    name: '15171',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/1g1XNkzvvUs',
  },
  {
    name: '16915',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/bdD_S6tnnEA',
  },
  {
    name: '17047',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/QI5vYUPRhwI',
  },
  {
    name: '25064',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/GJGXLrvx1yY',
  },
  {
    name: '22466',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Gc31mUWJAPs',
  },
  {
    name: '22291',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/S1cKMU3RBoI',
  },
  {
    name: '23680',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/tm75QM4RYxE',
  },
  {
    name: '23662',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/g9gzbcoEClw',
  },
  {
    name: '23228',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/FjtlEVmSAhc',
  },
  {
    name: '19423',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/08aIxNRfv0c',
  },
  {
    name: '18697',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/yVh6VdYNklc',
  },
  {
    name: '21758',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/zfUxonULkh8',
  },
  {
    name: '21317',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/TNtUR7r7HZ4',
  },
  {
    name: '19998',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/i0q456PmA9c',
  },
  {
    name: '18082',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/fCIi1a1mEX8',
  },
  {
    name: '17558',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/xkqIZqsW5kE',
  },
  {
    name: '18545',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/rtkB8hjJdzk',
  },
  {
    name: '18495',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/6LMWadhxdQw',
  },
  {
    name: '18244',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/-Ppddft8GAc',
  },
  {
    name: '16593',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/6GOvM6ij_ic',
  },
  {
    name: '16444',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/XLERC9x8yAc',
  },
  {
    name: '16016',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/omVZsT2zay4',
  },
  {
    name: '17513',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/0fYXSZTFIgE',
  },
  {
    name: '16755',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/m0pGrRmBiKo',
  },
  {
    name: '14409',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ELDc_Eoegy8',
  },
  {
    name: '13249',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/4XyhZwsfX98',
  },
  {
    name: '12880',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/h6_0yfh9bFc',
  },
  {
    name: '15342',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/QRp8TtZhGCE',
  },
  {
    name: '14530',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/dc7t2KRCGUk',
  },
  {
    name: '11312',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/R3lyX63zm_c',
  },
  {
    name: '11001',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/dKNb_XWG09c',
  },
  {
    name: '12876',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/hXETYpTxH1c',
  },
  {
    name: '12745',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/txva04UD_IA',
  },
  {
    name: '11398',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/pYm7ga4QUwQ',
  },
  {
    name: '99821',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/IbLQ-j6F_hA',
  },
  {
    name: '99653',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/cGPnNAIghN0',
  },
  {
    name: '99576',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/EBYunW1jAUM',
  },
  {
    name: '99890',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/YTJqfALawkY',
  },
  {
    name: '96758',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/-4Qm-JEElvg',
  },
  {
    name: '96550',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/vYyAeHiEF-M',
  },
  {
    name: '98841',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/84fCxUMrLL8',
  },
  {
    name: '97685',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/WMVUswwYSyg',
  },
  {
    name: '96927',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/LJ7GzKMeFy0',
  },
  {
    name: '95202',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/XQg5QE8ufbM',
  },
  {
    name: '94849',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/1ttHri0YYis',
  },
  {
    name: '94534',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/lWkyghUPd28',
  },
  {
    name: '95761',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/GFhZeC_K57w',
  },
  {
    name: '95603',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/KYe5KWGssZI',
  },
  {
    name: '93481',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/TNpUn4C_rHE',
  },
  {
    name: '92571',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/DYeKTPhvkPE',
  },
  {
    name: '93855',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/IMSXAmM6xtQ',
  },
  {
    name: '93698',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/LKeuwC6OLys',
  },
  {
    name: '93691',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/NlDl8p2H-eE',
  },
  {
    name: '88848',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/BNMw0557RuI',
  },
  {
    name: '88746',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/JXWL7uF7ovo',
  },
  {
    name: '91717',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/MYYUALZD0I4',
  },
  {
    name: '91240',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/3SzuzqzhRS8',
  },
  {
    name: '88856',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/jx-QlX4QbVY',
  },
  {
    name: '87850',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/bE1BlLFG0SY',
  },
  {
    name: '87707',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/SWxVmGLxInk',
  },
  {
    name: '87450',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/_9HW_p3vngA',
  },
  {
    name: '88644',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ESfRf8KlJOQ',
  },
  {
    name: '88447',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/NYNmkfSHJeo',
  },
  {
    name: '85306',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/er5EjlC2yV0',
  },
  {
    name: '84694',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/HCYSq-ga7sY',
  },
  {
    name: '86754',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Ei5f6VUhs9k',
  },
  {
    name: '86623',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/5j97y3hQNOA',
  },
  {
    name: '85624',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/GX40YZBQbXg',
  },
  {
    name: '83467',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/d6GsqEc8-gU',
  },
  {
    name: '83127',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/nbtvk4Ak5Lo',
  },
  {
    name: '81230',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ycBeWNMhVio',
  },
  {
    name: '83818',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/EhiKXq8y0sI',
  },
  {
    name: '83508',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/T7DBBKRsEhw',
  },
  {
    name: '80004',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/jg0xjLNyK3w',
  },
  {
    name: '79385',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/CHXPk6jGSko',
  },
  {
    name: '80995',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/6AlkUYxm0EA',
  },
  {
    name: '80910',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/wKAeqesvUrI',
  },
  {
    name: '80471',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/6fJA8lydL44',
  },
  {
    name: '76912',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/AIgaSH273Xw',
  },
  {
    name: '76405',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/D8tX-EqUU_E',
  },
  {
    name: '77986',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/2Ocy2FXGnFU',
  },
  {
    name: '77449',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/DJ_qNW_SX3I',
  },
  {
    name: '76966',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/_mAz5yVq9uM',
  },
  {
    name: '75207',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/cvTI5FsxrJs',
  },
  {
    name: '75206',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/rxEFtp09T88',
  },
  {
    name: '75124',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/9eHGX9EOgWA',
  },
  {
    name: '74414',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/yzOYNCKGYC4',
  },
  {
    name: '76322',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Sivly4SYjM0',
  },
  {
    name: '72142',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/gu3PchEtHDw',
  },
  {
    name: '72127',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/_RwAKf5k8U8',
  },
  {
    name: '72024',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/aL44w65fwnU',
  },
  {
    name: '74200',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/MCSunVhg9IY',
  },
  {
    name: '73965',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/WEjBAlq9zrU',
  },
  {
    name: '70098',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/J0x0-LmmHzI',
  },
  {
    name: '68185',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/dPilO7aWps8',
  },
  {
    name: '67689',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/z4zZdure4kI',
  },
  {
    name: '70614',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ikRPu-PqhC0',
  },
  {
    name: '70455',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/ardrs4Bi-og',
  },
  {
    name: '65653',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/HMd1HIOTL8k',
  },
  {
    name: '65507',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/9Es1xQwyfwo',
  },
  {
    name: '62392',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/MXX5hE7vHHo',
  },
  {
    name: '66829',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/Q0ycmSzjsNA',
  },
  {
    name: '66635',
    event: 'Campus Middle School May 23, 2022 and May 24, 2022',
    url: 'https://www.youtube.com/embed/CAx-6r4Qpf8',
  },
  {
    name: '15254',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/6OChaJFDJBw',
  },
  {
    name: '12078',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/4BbViVotB6s',
  },
  {
    name: '14164',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/7McxDqL2uh4',
  },
  {
    name: '18912',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/YTyqphYTYio',
  },
  {
    name: '20696',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/U9m81n_mnYc',
  },
  {
    name: '13747',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/A6o30eOLRS8',
  },
  {
    name: '13347',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/DVuHufZPKQE',
  },
  {
    name: '13914',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/D1MedDA0L8g',
  },
  {
    name: '11067',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/D1MedDA0L8g',
  },
  {
    name: '17893',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/eLj9NSVtsx0',
  },
  {
    name: '98963',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/lW5lgcGeWiI',
  },
  {
    name: '15849',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/o47pkJAM4gg',
  },
  {
    name: '15050',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/JpS4nDJXRmY',
  },
  {
    name: '10549',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/pMsd12EbVoo',
  },
  {
    name: '15383',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/toE5AGZeRVI',
  },
  {
    name: '20722',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/aesxGeEaG9Y',
  },
  {
    name: '21849',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/5pQSXfUzlcs',
  },
  {
    name: '29304',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/3IkqqFki2YI',
  },
  {
    name: '30687',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/yUoJKNFk4kc',
  },
  {
    name: '23403',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/2gXjZSGo2jY',
  },
  {
    name: '30182',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/0808WJy7OZ8',
  },
  {
    name: '23938',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/7v3eexUgp68',
  },
  {
    name: '27299',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/K8yTD1Ahjv8',
  },
  {
    name: '24985',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/Q660XiT7nVg',
  },
  {
    name: '23371',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/QvwNJWyAGD8',
  },
  {
    name: '26740',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/TfTRDKArgUI',
  },
  {
    name: '27818',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/YQcP0LKSV8s',
  },
  {
    name: '31245',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/cb4-cikoFvE',
  },
  {
    name: '23430',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/q1FOiCj0aFI',
  },
  {
    name: '35949',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/xrvJbynuNA8',
  },
  {
    name: '40025',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/-9L0L2Bw7Bw',
  },
  {
    name: '36640',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/5FpVxIupxAE',
  },
  {
    name: '40412',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/zC534LbzM2k',
  },
  {
    name: '34187',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/8sHJKPqQt7Y',
  },
  {
    name: '36721',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/M74H2FxXvLU',
  },
  {
    name: '39802',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/NU7defsWnew',
  },
  {
    name: '35932',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/NV-V_Dh6-MU',
  },
  {
    name: '37402',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/Q1FikL5ZBRY',
  },
  {
    name: '39208',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/aDA7NnTX3Zo',
  },
  {
    name: '40383',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/f3RswIRPKHk',
  },
  {
    name: '40594',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/ijs-3799-sM',
  },
  {
    name: '33335',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/lpumHhnenGg',
  },
  {
    name: '37604',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/rzVrUzJdYRc',
  },
  {
    name: '33693',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/osnUd1Hd3tg',
  },
  {
    name: '48460',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/YotQmaEDQNg',
  },
  {
    name: '44767',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/alF8zORpV_M',
  },
  {
    name: '43424',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/ektZEzwkoyQ',
  },
  {
    name: '44649',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/0nc5u3IKHdY',
  },
  {
    name: '45952',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/DwaTzFlXUUY',
  },
  {
    name: '44914',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/G1L4QVCBzw4',
  },
  {
    name: '46461',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/HH309hO9b5w',
  },
  {
    name: '43903',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/jGdh4lcC6MM',
  },
  {
    name: '44837',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/mcVjM86o8oE',
  },
  {
    name: '48462',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/r7wnL0C9FIE',
  },
  {
    name: '42119',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/rLmUIm3Vq-E',
  },
  {
    name: '46298',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/sl44pwabJM0',
  },
  {
    name: '45499',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/udWsvBlBpJI',
  },
  {
    name: '59414',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/ZLgpFB1DCw8',
  },
  {
    name: '61763',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/_N8GOnvORVM',
  },
  {
    name: '55468',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/aT8TLiU4lv8',
  },
  {
    name: '53309',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/jzbdjEJFaUQ',
  },
  {
    name: '66559',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/mVqA6O02Y_E',
  },
  {
    name: '73987',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/txJdPsq5pVs',
  },
  {
    name: '73797',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/w5qdXWUv3yM',
  },
  {
    name: '68567',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/EuprmaUJTIo',
  },
  {
    name: '70471',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/mPFPsq4HCvg',
  },
  {
    name: '82175',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/63dytiIu-F8',
  },
  {
    name: '77872',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/8nUjIo7AD0k',
  },
  {
    name: '79536',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/9FPS6T43778',
  },
  {
    name: '74854',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/BD7O6DTZ0P0',
  },
  {
    name: '77459',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/GLwcMJWlqks',
  },
  {
    name: '77754',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/HQuuI6Z0LEs',
  },
  {
    name: '75902',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/YTUhv8jvrI4',
  },
  {
    name: '83591',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/a2gP6ujmZH8',
  },
  {
    name: '74085',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/hFrUamgFnVM',
  },
  {
    name: '75345',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/sjO-tIOBZ6o',
  },
  {
    name: '83411',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/uWSPA4XSqko',
  },
  {
    name: '84507',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/xQV9iscFJm8',
  },
  {
    name: '77352',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/TPxWg6E-JgY',
  },
  {
    name: '76740',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/hjmq3BgJqk8',
  },
  {
    name: '92531',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/2IUnpu6YLMc',
  },
  {
    name: '92282',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/9ayqNAcOays',
  },
  {
    name: '93045',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/AYwyeAVL6a4',
  },
  {
    name: '86775',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/EpmLke41Vb8',
  },
  {
    name: '90426',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/FKVBx_7zhWM',
  },
  {
    name: '91901',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/JsYrzL7SPUs',
  },
  {
    name: '92463',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/ObrA572TPCE',
  },
  {
    name: '86907',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/P8xpblUljD4',
  },
  {
    name: '86468',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/gXGFMwHyxI8',
  },
  {
    name: '88581',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/iqOTLSgGOHU',
  },
  {
    name: '87373',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/k6i3CtkpLM8',
  },
  {
    name: '87222',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/xFb90XOOFfY',
  },
  {
    name: '91314',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/HIT5KKXU3Ho',
  },
  {
    name: '90430',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/j8OQoiLSj6s',
  },
  {
    name: '91548',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/kpqzDSxHCGI',
  },
  {
    name: '99455',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/UuLb7gSH7PI',
  },
  {
    name: '98784',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/0BHZtbEg578',
  },
  {
    name: '93755',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/TNUnL8cqYAg',
  },
  {
    name: '99500',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/hhrawG9lf58',
  },
  {
    name: '96113',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/qP04HGo_6hQ',
  },
  {
    name: '98963',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/xNDiBOyHtQ8',
  },
  {
    name: '93374',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/JTGj8axOw5E',
  },
  {
    name: '14782',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/eGXkJVvrs0c',
  },
  {
    name: '10823',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/qEQvbi_ccQY',
  },
  {
    name: '13785',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/w2jjk5LQlLg',
  },
  {
    name: '14545',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/-EPKIHNX7n4',
  },
  {
    name: '10651',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/69kOgcj1w2E',
  },
  {
    name: '10858',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/6ZHqWk21s28',
  },
  {
    name: '11085',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/Ej9_WHTriBM',
  },
  {
    name: '12775',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/Hyx213N9sak',
  },
  {
    name: '10221',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/JwzcQmQSJ70',
  },
  {
    name: '13136',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/Nc2NaeBkX7E',
  },
  {
    name: '10048',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/P4UrrrzqHh4',
  },
  {
    name: '11423',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/QfJ1r2L_pdY',
  },
  {
    name: '12050',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/8_VpNZIeoYc',
  },
  {
    name: '11943',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/d2HMOHAnEzI',
  },
  {
    name: '11520',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/q_sdpgoSvtY',
  },
  {
    name: '20633',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/Xzr_vZMjfVo',
  },
  {
    name: '15306',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/BF2IsmFWoEw',
  },
  {
    name: '15077',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/I--q-EJhKxw',
  },
  {
    name: '15605',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/OYoNhkAEJ6s',
  },
  {
    name: '24451',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/R0LMVy9PW8w',
  },
  {
    name: '17379',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/RN39afAQwy4',
  },
  {
    name: '16772',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/XWRVufKNfMQ',
  },
  {
    name: '18390',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/XsKM-5wFvck',
  },
  {
    name: '15987',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/YTWlwZcM6J8',
  },
  {
    name: '15545',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/_jout-RvZoQ',
  },
  {
    name: '16011',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/h0O62m06tWo',
  },
  {
    name: '18090',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/iNFe84ptnMc',
  },
  {
    name: '18014',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/w1oDqQYY6Vg',
  },
  {
    name: '19459',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/-w6VMUHM9cw',
  },
  {
    name: '18706',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/0ckoz-G_rT4',
  },
  {
    name: '13591',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/0U_KXo_dvAc',
  },
  {
    name: '52463',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/3drYlyRrkO4',
  },
  {
    name: '13461',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/3jfD5dvr73A',
  },
  {
    name: '36933',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/FTuTV_xJ3Ls',
  },
  {
    name: '48865',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/FqxAqvNPN7M',
  },
  {
    name: '24767',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/Hh7J0RLgzKo',
  },
  {
    name: '58924',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/cKeSQkzX4RQ',
  },
  {
    name: '24451',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/gIyPE2SXvq4',
  },
  {
    name: '25550',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/ouy6pH-SiAo',
  },
  {
    name: '38533',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/qAxudfRwIj0',
  },
  {
    name: '25693',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/waB5sc0x85g',
  },
  {
    name: '67509',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/ziyphni2bjY',
  },
  {
    name: '60838',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/OqBp1xJDne4',
  },
  {
    name: '55340',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/UGwGTvgZIa4',
  },
  {
    name: '62601',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/UKuXLVPv4po',
  },
  {
    name: '21376',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/7Dsvr726FKo',
  },
  {
    name: '21446',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/dOEU_4PVnMM',
  },
  {
    name: '34581',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/egOdmj7Awiw',
  },
  {
    name: '20357',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/jlIcyNiHniw',
  },
  {
    name: '79044',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/0CJ1YO7rxh0',
  },
  {
    name: '86254',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/0HNrU2m2EfA',
  },
  {
    name: '82479',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/TNSfVvaBmUE',
  },
  {
    name: '69394',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/ZMCkb15F31Q',
  },
  {
    name: '86710',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/3ZiWz3tcJsI',
  },
  {
    name: '74521',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/XtaAaAJiHyM',
  },
  {
    name: '94690',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/nO2TehZs6VM',
  },
  {
    name: '84411',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/rvYNspR_0Oc',
  },
  {
    name: '13009',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/1Zi26G6uui4',
  },
  {
    name: '13252',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/2J2GsEij6tk',
  },
  {
    name: '31410',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/38zJQxuY3c4',
  },
  {
    name: '13249',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/9BuT16E8U6M',
  },
  {
    name: '39091',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/j9yGyhj8H3c',
  },
  {
    name: '41262',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/0wDjrB8Mubk',
  },
  {
    name: '13817',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/762vPMVh_8g',
  },
  {
    name: '38111',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/Hwh3dAzfoLc',
  },
  {
    name: '23492',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/Tcxj0un_CZo',
  },
  {
    name: '31278',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/VUg5Qt3Zt9M',
  },
  {
    name: '95623',
    event: 'Wade River Event Sept 2, 2023',
    url: 'https://youtube.com/embed/xAGJQX884Sc',
  },
];

// for (let i = 0; i < videos.length; i++) {
//   console.log(videos[i]);
// }

// videos.forEach(function (value, index, videos) {
//   console.log(value, index, videos);
// });

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
      const newVideoCard = document.createElement('div');
      newVideoCard.className = 'video-name-card';
      newVideoCard.innerHTML = `<h2>${video.name}<h2>`;
      newVideoCard.dataset.videoName = video.name;
      newVideoCard.addEventListener('click', (event) => {
        setSelectedVideo(event);
      });

      videoResults.appendChild(newVideoCard);
    });
  }
}

function setSelectedVideo(event) {
  var videoName = event?.currentTarget?.dataset?.videoName;
  if (videoName != null) {
    selectedVideo = videos.find((v) => v.name === videoName);
    if (selectedVideo != null) {
      var jsonSelectedVideo = JSON.stringify(selectedVideo);
      localStorage.setItem('selectedVideo', jsonSelectedVideo);
    }

    location.href = './video.html';
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
  console.log('value', value);
  let filteredVideos = videos.filter(
    (v) =>
      v.name.toLocaleLowerCase().includes(value) ||
      v.event.toLocaleLowerCase().includes(value) ||
      (Array.isArray(value) && v.tags?.length > 0
        ? value.every((val) => v.tags.includes(val))
        : false)

    // || v.teacher.toLocaleLowerCase().includes(value)
    // || v.basic.toLocaleLowerCase().includes(value)
    // || v.shape.toLocaleLowerCase().includes(value)
    // || v.movement.toLocaleLowerCase().includes(value)
    // || v.size.toLocaleLowerCase().includes(value)
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
      alert('Try your search again');
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

// video page radio button selection submit
function submitFunction() {
  let radioPlantBtn = document.getElementById('radio-plant-btn');
  let radioAnimalBtn = document.getElementById('radio-animal-btn');
  let radioProtistBtn = document.getElementById('radio-protist-btn');
  let radioUnknownBtn = document.getElementById('radio-unknown-btn');
  let radioWormBtn = document.getElementById('radio-worm-btn');
  let radioRoundBtn = document.getElementById('radio-round-btn');
  let radioDonutBtn = document.getElementById('radio-donut-btn');
  let radioThinBtn = document.getElementById('radio-thin-btn');
  let radioLongBtn = document.getElementById('radio-long-btn');
  let radioBeetleBtn = document.getElementById('radio-beetle-btn');
  let radioBlobBtn = document.getElementById('radio-blob-btn');
  let radioStickBtn = document.getElementById('radio-stick-btn');
  let radioLeggyBtn = document.getElementById('radio-leggy-btn');
  let radioFastBtn = document.getElementById('radio-fast-btn');
  let radioErraticBtn = document.getElementById('radio-erratic-btn');
  let radioStraightBtn = document.getElementById('radio-straight-btn');
  let radioSpinningBtn = document.getElementById('radio-spinning-btn');
  let radioCircularBtn = document.getElementById('radio-circular-btn');
  let sizeInput = document.getElementById('size-input');
  let commentInput = document.getElementById('comment-input');
  // let submitBtn = document.getElementById('submit-btn');

  if (radioPlantBtn.checked == true)
    alert('The Basic button selected is: ' + radioPlantBtn.value);
  else if (radioAnimalBtn.checked == true)
    alert('The Basic button selected is: ' + radioAnimalBtn.value);
  else if (radioProtistBtn.checked == true)
    alert('The Basic button selected is: ' + radioProtistBtn.value);
  else if (radioUnknownBtn.checked == true)
    alert('The Basic button selected is: ' + radioUnknownBtn.value);
  else alert('No Basic button selected.');

  if (radioWormBtn.checked == true)
    alert('The Shape button selected is: ' + radioWormBtn.value);
  else if (radioRoundBtn.checked == true)
    alert('The Shape button selected is: ' + radioRoundBtn.value);
  else if (radioDonutBtn.checked == true)
    alert('The Shape button selected is: ' + radioDonutBtn.value);
  else if (radioThinBtn.checked == true)
    alert('The Shape button selected is: ' + radioThinBtn.value);
  else if (radioLongBtn.checked == true)
    alert('The Shape button selected is: ' + radioLongBtn.value);
  else if (radioBeetleBtn.checked == true)
    alert('The Shape button selected is: ' + radioBeetleBtn.value);
  else if (radioBlobBtn.checked == true)
    alert('The Shape button selected is: ' + radioBlobBtn.value);
  else if (radioStickBtn.checked == true)
    alert('The Shape button selected is: ' + radioStickBtn.value);
  else if (radioLeggyBtn.checked == true)
    alert('The Shape button selected is: ' + radioLeggyBtn.value);
  else alert('No Shape button selected.');

  if (radioFastBtn.checked == true)
    alert('The Motion button selected is: ' + radioFastBtn.value);
  else if (radioErraticBtn.checked == true)
    alert('The Motion button selected is: ' + radioErraticBtn.value);
  else if (radioStraightBtn.checked == true)
    alert('The Motion button selected is: ' + radioStraightBtn.value);
  else if (radioSpinningBtn.checked == true)
    alert('The Motion button selected is: ' + radioSpinningBtn.value);
  else if (radioCircularBtn.checked == true)
    alert('The Motion button selected is: ' + radioCircularBtn.value);
  else alert('No Motion button selected.');

  if (sizeInput.value) {
    alert('Your estimated size of the organism is ' + sizeInput.value + '.');
  } else {
    alert('Please enter a number for how long you think the organism is.');
  }
  if (commentInput.value) {
    alert('Your comment is "' + commentInput.value + '"');
  } else {
    alert('Please enter a comment, any additional observations you have.');
  }
}

function SubForm(video) {
  var dataList = [
    {
      name: 'video-name',
      value: selectedVideo?.name,
    },
    ...$('#myForm').serializeArray(),
  ];
  $.ajax({
    url: 'https://api.apispreadsheets.com/data/sgEAZi7Pix3ehgpG/',
    type: 'post',
    data: dataList,
    success: function () {
      alert('Form Data Submitted :)');
    },
    error: function () {
      alert('There was an error :(');
    },
  });
}

// pagination

// const list_element = document.getElementById('list');
// const list_element = document.getElementById('videos-results');
// const pagination_element = document.getElementById('pagination');

// let current_page = 1;
// let rows = 5;

// // displaylist function
// function DisplayList(items, wrapper, rows_per_page, page) {
//   wrapper.innerHTML = '';
//   page--;

//   let start = rows_per_page * page;
//   let end = start + rows_per_page;
//   let paginatedItems = items.slice(start, end);

//   for (let i = 0; i < paginatedItems.length + rows_per_page; i++) {
//     let item = paginatedItems[i];

//     let item_element = document.createElement('div');
//     item_element.classList.add('item');
//     item_element.innerText = item;

//     wrapper.appendChild(item_element);
//   }
// }

// function SetupPagination(items, wrapper, rows_per_page) {
//   wrapper.innerHTML = '';

//   let page_count = Math.ceil(items.length / rows_per_page);
//   for (let i = 1; i < page_count + 1; i++) {
//     let btn = PaginationButton(i, items);
//     wrapper.appendChild(btn);
//   }
// }

// function PaginationButton(page, items) {
//   let button = document.createElement('button');
//   button.innerText = page;

//   if (current_page == page) button.classList.add('active');

//   button.addEventListener('click', function () {
//     current_page = page;
//     DisplayList(items, list_element, rows, current_page);

//     let current_btn = document.querySelector('.pagenumbers button.active');
//     current_btn.classList.remove('active');

//     button.classList.add('active');
//   });

//   return button;
// }

// DisplayList(videos, list_element, rows, current_page);
// SetupPagination(videos, pagination_element, rows);
const featuredDiv = document.getElementById('featured-videos');
const event1Div = document.getElementById('event1-videos');
const event2Div = document.getElementById('event2-videos');
const artandscienceDiv = document.getElementById('artandscience-videos');
const bennettDiv = document.getElementById('bennett-videos');
const irishDiv = document.getElementById('irish-videos');
const campusDiv = document.getElementById('campus-videos');

featuredDiv.addEventListener('click', (event) => {
  filterVideos(['featured']);
});
event1Div.addEventListener('click', (event) => {
  filterVideos('event1');
});
event2Div.addEventListener('click', (event) => {
  filterVideos('event2');
});
artandscienceDiv.addEventListener('click', (event) => {
  filterVideos('curfman');
});
bennettDiv.addEventListener('click', (event) => {
  filterVideos('bennett');
});
irishDiv.addEventListener('click', (event) => {
  filterVideos('irish');
});
campusDiv.addEventListener('click', (event) => {
  filterVideos('campus');
});
