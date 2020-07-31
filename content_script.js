var element = document.querySelector('div#siteNotice');
if(element !== null && element !== '') {
   element.parentElement.removeChild(element);
}


element = document.querySelector('div#frb-inline');
if(element !== null && element !== '') {
   element.parentElement.removeChild(element);
}