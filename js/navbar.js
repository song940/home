
export const getNavbarItems = () =>
  Promise
    .resolve()
    .then(() => fetch('/data/navbar.json'))
    .then(res => res.json())

export const createLink = ({ text, href }) => {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = text;
  return link;
};

export const render = el => {
  if (typeof el === 'string')
    el = document.querySelector(el);

  if (!el) return;

  return Promise
    .resolve()
    .then(() => getNavbarItems())
    .then(items => items.map(createLink))
    .then(links => {
      el.innerHTML = '';
      links.forEach(link => el.appendChild(link))
    });
};