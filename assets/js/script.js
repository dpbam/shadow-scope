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
var selectedVideoHeader = document.getElementById('selected-video-header');
if (selectedVideoHeader != null) {
  selectedVideoHeader.innerHTML = selectedVideo?.name ?? 'Video Not Found...';
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

var videos = [
  {
    name: 'Video001',
    event: 'event1',
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

// Injects the videos into the videos-results div based on the array of `videosToRender`

function renderVideos(videosToRender) {
  var videoResults = document.getElementById('videos-results');

  if (videoResults !== null) {
    videoResults.innerHTML = '';

    // Loop through each video and add the html element to the videos-results div
    videosToRender.forEach((video) => {
      videoResults.innerHTML += `
        <div class="video-card">
          <h2 onClick="setSelectedVideo(event)" data-video-name="${video.name}">${video.name}</h2>
       
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

function setSelectedVideo(event) {
  var videoName = event.srcElement.dataset.videoName;
  if (videoName != null) {
    selectedVideo = videos.find((v) => v.name === videoName);
    if (selectedVideo != null) {
      var jsonSelectedVideo = JSON.stringify(selectedVideo);
      localStorage.setItem('selectedVideo', jsonSelectedVideo);
    }

    location.href = '/html/video.html';
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

var selectedVideo = {}; // TODO: assign the selected video to this variable

function SubForm(video) {
  $.ajax({
    url: 'https://api.apispreadsheets.com/data/pd5qEOIclKcTu7E3//',
    type: 'post',
    data: {
      video: selectedVideo,
      form: $('#myForm').serializeArray(),
    },
    success: function () {
      alert('Form Data Submitted :)');
    },
    error: function () {
      alert('There was an error :(');
    },
  });
}
