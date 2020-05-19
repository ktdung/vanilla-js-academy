// Could do with DRYing this, but not really worth it right now.
var charCounter = document.querySelector('[data-count-for]');
var wordCounter = document.querySelector('[data-wordcount-for]');
var charCountTarget = document.querySelector(
  charCounter.getAttribute('data-count-for')
);
var wordCountTarget = document.querySelector(
  wordCounter.getAttribute('data-wordcount-for')
);

function updateCharacterCount() {
  if (!charCountTarget.type === 'textarea') return;

  var charCount = charCountTarget.value.length;
  charCounter.textContent = charCount;
}

function updateWordCount() {
  if (!wordCountTarget.type === 'textarea') return;

  // Build an array of words, including words with apostrophes.
  // See this regex: https://regex101.com/r/PM7lwE/1/
  var wordsArray = wordCountTarget.value.trim().match(/\w+('\w+)*/g) || [];
  wordCounter.textContent = wordsArray.length;
}

// REGISTER EVENT LISTENERS ----------------------------------------------------
function registerEventListeners(func) {
  listen.forEach(function(event) {
    window.addEventListener(event, func, false);
  });
}

var listen = ['input', 'pageshow'];
registerEventListeners(updateCharacterCount);
registerEventListeners(updateWordCount);
