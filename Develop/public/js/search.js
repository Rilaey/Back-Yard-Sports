const searchFormHandler = async (event) => {
  event.preventDefault();

  const state = document.querySelector('#search-state').value.trim();
  const zip = document.querySelector('#search-zip').value.trim();
  const city = document.querySelector('#search-city').value.trim();
  const sport = document.querySelector('#search-sport').value.trim();

  document.location.assign(
    `/?state=${state}&zip=${zip}&city=${city}&sport=${sport}`
  );
};

document
  .querySelector('.search-form')
  .addEventListener('submit', searchFormHandler);

console.log(document.location.search);
document.querySelector('#search-state').value(document.location.search.state);