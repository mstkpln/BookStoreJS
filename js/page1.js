const endpoint = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';

const titles = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => titles.push(...data));

function findMatches(wordToMatch, titles) {
  return titles.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.title.match(regex) || place.author.match(regex)
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, titles);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const titleName = place.title.replace(regex, `<span class="hl">${this.value}</span>`);
    const authorName = place.author.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${titleName}, ${authorName}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
