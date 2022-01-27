function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}
function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

$(function() {
  $('#headerDIV').load('../html/header.html');
  $('#footerDIV').load('../html/footer.html');
  $('#html-headerDIV').load('../html/html-header.html');
  $('#html-footerDIV').load('../html/html-footer.html');
});
$(function() {
  $('#html-header').load('..html/html-header.html');
  $('#html-footer').load('../html/html-footer.html');
});

