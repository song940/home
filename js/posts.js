

export const posts = () => {
  return Promise
    .resolve()
    .then(() => fetch(`https://blog.lsong.org/feed.xml`))
    .then(res => res.text())
};

export const render = () => {
  return Promise
    .resolve()
    .then(() => posts())
    .then(xml => {
      const doc = document.createDocumentFragment()
      const dom = document.createElement('div');
      dom.innerHTML = xml;
      doc.append(dom);
      return doc;
    })
    .then(doc => console.log(doc))
};