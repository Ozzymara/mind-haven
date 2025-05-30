var titleText = "💚Mind Haven";
var position = 0;
function scrollTitle() {
  document.title =
    titleText.substring(position) + titleText.substring(0, position);
  position++;
  if (position > titleText.length) position = 0;
  setTimeout(scrollTitle, 300);
}
scrollTitle();

