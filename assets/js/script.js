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
    url: 'https://youtu.be/7N5xh8Ekil0',
  },
  {
    name: '20873',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/G7bR6dLkzuA',
  },
  {
    name: '20133',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/zkHxoT03pps',
  },
  {
    name: '19959',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/P3byuL2qpGc',
  },
  {
    name: '21248',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/FQKvB_TOQ8w',
  },
  {
    name: '10154',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/oYbI7zzSJdE',
  },
  {
    name: '10999',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/tzY03leKxGc',
  },
  {
    name: '11222',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/PPBAZPu1SMg',
  },
  {
    name: '11654',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/9aIk4SFJLWs',
  },
  {
    name: '11880',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/CrCCpl5r36o',
  },
  {
    name: '12102',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'hhttps://youtu.be/SCdXV-JqgDo',
  },
  {
    name: '14991',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/k1MX0jU9Jic',
  },
  {
    name: '15033',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/HfS2CLB2p1I',
  },
  {
    name: '16757',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'hhttps://youtu.be/iEEVvaezZ_Q',
  },
  {
    name: '24322',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/43AMIIb1_LE',
  },
  {
    name: '24732',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/abtlGwahoGg',
  },
  {
    name: '25165',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/IKaQnSBnfck',
  },
  {
    name: '25543',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/ZrMPV86Ua-k',
  },
  {
    name: '21359',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/uTAksYBobTo',
  },
  {
    name: '22108',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/FOmp52_2pHM',
  },
  {
    name: '22487',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/uyqNRmH2ed8',
  },
  {
    name: '22660',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/ugIn_ZW9eGc',
  },
  {
    name: '22743',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/3LRiFqGIb9o',
  },
  {
    name: '22998',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/FabgVJ2NVm8',
  },
  {
    name: '23151',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/2mDhEubg1VU',
  },
  {
    name: '23671',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/CXHWIIJOAmQ',
  },
  {
    name: '23833',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/NLLomMmQN8A',
  },
  {
    name: '24167',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/14oTLIUzX5o',
  },
  {
    name: '24285',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/Hb2lcGCjRSY',
  },
  {
    name: '28039',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/haoq48HhPfY',
  },
  {
    name: '28248',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/s34D4yx8nRs',
  },
  {
    name: '28364',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/sf8dOKM_ip0',
  },
  {
    name: '28746',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/8LvpCXyyYmk',
  },
  {
    name: '30087',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/SLTtVkabpTc',
  },
  {
    name: '30273',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/YJBnzN1Lteg',
  },
  {
    name: '30389',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/0uMh1jGDU4w',
  },
  {
    name: '31510',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/EJ5FTOU9DTw',
  },
  {
    name: '31656',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/cPY_w8a4ysU',
  },
  {
    name: '31813',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/vHkvGN9OgKg',
  },
  {
    name: '25991',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/j9tAtEWcIuU',
  },
  {
    name: '26070',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/A5hIqT_iCi4',
  },
  {
    name: '26434',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/Sl18VE3_euU',
  },
  {
    name: '26771',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/klbKl0R8SNI',
  },
  {
    name: '27920',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/Cq26j9turik',
  },
  {
    name: '36753',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/_DvQ-D05UPs',
  },
  {
    name: '37157',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/toVxRDKrwBk',
  },
  {
    name: '37256',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/ONodfkKKxI8',
  },
  {
    name: '38001',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/t5u1WDKu2vU',
  },
  {
    name: '38116',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/L3i8JpQfuKA',
  },
  {
    name: '38473',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/ut_b78EDsrA',
  },
  {
    name: '40457',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/odKOzcFkzTc',
  },
  {
    name: '39593',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/rskr8vDogA0',
  },
  {
    name: '32238',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/cQX1sCiyWi8',
  },
  {
    name: '32300',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/0BBp-ygluac',
  },
  {
    name: '19204',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/FWEnAvKQhHk',
  },
  {
    name: '36070',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/BrnrobB7bYc',
  },
  {
    name: '35932',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/jK04oj7GbSk',
  },
  {
    name: '34344',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/veQ7F68HzRE',
  },
  {
    name: '34058',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/YcQAjBCerVI',
  },
  {
    name: '32910',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/hqqJbFmo9Gk',
  },
  {
    name: '44320',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/hCf0lsC0cF0',
  },
  {
    name: '44365',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/Vkf5P1KfSPk',
  },
  {
    name: '45979',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/fIOdBJ8OPUk',
  },
  {
    name: '46300',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/9zNf_Jev2Oc',
  },
  {
    name: '46784',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/P0Q4tPWfXuU',
  },
  {
    name: '47465',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/oa4vg0uHk7s',
  },
  {
    name: '47445',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/yPRJc5Alqmo',
  },
  {
    name: '47898',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/xnkvvD-RAR4',
  },
  {
    name: '40764',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/GzWChCPelPE',
  },
  {
    name: '40926',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/3K460NWXvfw',
  },
  {
    name: '41033',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/a_Et9OIdqcw',
  },
  {
    name: '41829',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/CKATyz56_04',
  },
  {
    name: '42200',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/ltEiZMXtmSY',
  },
  {
    name: '42677',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/1Y_TKKFQX0s',
  },
  {
    name: '44079',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/fz6-wK19e9M',
  },
  {
    name: '55238',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/OCQJWRkXSFA',
  },
  {
    name: '55343',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/qma2ImeZZd8',
  },
  {
    name: '55977',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/dknGBLCXEIs',
  },
  {
    name: '57327',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/LvDIM_TwWCY',
  },
  {
    name: '57726',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/AzEGhN_y-D4',
  },
  {
    name: '59924',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/iEk5DFeqelI',
  },
  {
    name: '60260',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/JstannRxXNE',
  },
  {
    name: '49173',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/fzRTNWqRSZo',
  },
  {
    name: '51633',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/XkEUMNEp-dk',
  },
  {
    name: '51872',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/8W_-5cwNKkA',
  },
  {
    name: '52316',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/VOVXta4PhNY',
  },
  {
    name: '52602',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/eydSPOrVp5k',
  },
  {
    name: '52900',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/mVjdQfvRjpM',
  },
  {
    name: '53802',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/EqTH82Ra-gE',
  },
  {
    name: '54064',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/JkYILdoH57w',
  },
  {
    name: '66244',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/3bDJjdz06nI',
  },
  {
    name: '66327',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/wC9Pc4ZxgX8',
  },
  {
    name: '66583',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/IpQUWk8_8b8',
  },
  {
    name: '67081',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/wEvg8_1q4jQ',
  },
  {
    name: '67843',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/Envq6pkL6Ao',
  },
  {
    name: '68151',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/PS_QVDu-Lx4',
  },
  {
    name: '68786',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/wqGB33BBUNo',
  },
  {
    name: '72194',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/2x238zOsvpA',
  },
  {
    name: '60604',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/MSluTg6WfGI',
  },
  {
    name: '61030',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/MrqHmKKlOqM',
  },
  {
    name: '61829',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/VVcMw6T-MGs',
  },
  {
    name: '64227',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/fryYSs_jT9I',
  },
  {
    name: '64357',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/tLt6yfSsAqw',
  },
  {
    name: '65172',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/TdkHrbNUA14',
  },
  {
    name: '65195',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/40KVYF9zFTU',
  },
  {
    name: '78778',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/cupiNvYcpjk',
  },
  {
    name: '78837',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/1hcpObe5GHs',
  },
  {
    name: '79300',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/0g6sXPB2Quc',
  },
  {
    name: '79776',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/8JLntZAwaKU',
  },
  {
    name: '79861',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/jA62ly88zfQ',
  },
  {
    name: '73200',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/tfI8-KIZr3M',
  },
  {
    name: '74681',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/s4cbASucbHE',
  },
  {
    name: '77187',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/o1j8LDo0tzc',
  },
  {
    name: '78567',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/AeTxPejoxsM',
  },
  {
    name: '78579',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/a1Ypqqu9ljc',
  },
  {
    name: '83039',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/8HkNc2V-zrE',
  },
  {
    name: '83281',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/pk03k3XBQjs',
  },
  {
    name: '83807',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/7qlENtQqMAI',
  },
  {
    name: '84590',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/q_aSe_-OKRc',
  },
  {
    name: '85491',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/c0yDUVoPxcs',
  },
  {
    name: '76134',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/waaKhFDk640',
  },
  {
    name: '74966',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/zdmGEPzm-yM',
  },
  {
    name: '76243',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/tZLpVifJ0XM',
  },
  {
    name: '76283',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/PRsn1sgKcO4',
  },
  {
    name: '83004',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/GGnEFl5AUAc',
  },
  {
    name: '81717',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/dnt9g2TG3-U',
  },
  {
    name: '81130',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/Zp1K8RELnGU',
  },
  {
    name: '80228',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/59DSMh0m1dQ',
  },
  {
    name: '79900',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/-00iq09TOfw',
  },
  {
    name: '90237',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/__9c5VYjqsw',
  },
  {
    name: '91175',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/GaPPnpn2hfs',
  },
  {
    name: '91467',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/GDn6TsmwYn4',
  },
  {
    name: '92540',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/ykYe4lib1V4',
  },
  {
    name: '93437',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/yDKL8xXb09M',
  },
  {
    name: '93473',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/Go2Qsvzcmcs',
  },
  {
    name: '85699',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/ml_o5_ase3E',
  },
  {
    name: '85891',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/njmmEG51A4o',
  },
  {
    name: '86103',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/hwuWNtfu1Sg',
  },
  {
    name: '88987',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/sDChLsmy8Bg',
  },
  {
    name: '88774',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/BYra3vix_-w',
  },
  {
    name: '88773',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/5I4BJMjDN7w',
  },
  {
    name: '88664',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/N2qo98HCPNY',
  },
  {
    name: '87927',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/ZxyOsTHXw7c',
  },
  {
    name: '86912',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/GR_uhSwN_No',
  },
  {
    name: '95568',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/5M8pzQRB5ME',
  },
  {
    name: '95622',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/DK4XT_H3bvc',
  },
  {
    name: '96685',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/s_L8a2Uvbvg',
  },
  {
    name: '99732',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/7KTRfrh7D14',
  },
  {
    name: '99884',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/W20YpPNspsg',
  },
  {
    name: '93973',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/fpaX6hqdL7A',
  },
  {
    name: '94657',
    event: 'Curfman Gallery Art & Science Exhibit',
    url: 'https://youtu.be/wO2l8dDLlDA',
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
