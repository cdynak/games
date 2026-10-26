(function () {
  var box = document.getElementById('games');
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  fetch('games.json')
    .then(function (r) { return r.json(); })
    .then(function (games) {
      box.textContent = '';
      games.forEach(function (g) {
        var card = el('article', 'card');
        var head = el('div', 'card-head');
        head.appendChild(el('h2', null, g.title));
        head.appendChild(el('span', 'badge ' + (g.statusKind || ''), g.status));
        card.appendChild(head);
        if ((g.images || []).length) {
          var gal = el('div', 'gallery');
          g.images.forEach(function (src, i) {
            var im = el('img');
            im.src = src; im.alt = g.title + ' - zrzut ekranu ' + (i + 1); im.loading = 'lazy';
            gal.appendChild(im);
          });
          card.appendChild(gal);
        }
        card.appendChild(el('p', 'desc', g.description));
        var tech = el('ul', 'tech');
        (g.tech || []).forEach(function (t) { tech.appendChild(el('li', null, t)); });
        card.appendChild(tech);
        var links = el('div', 'links');
        (g.links || []).forEach(function (l, i) {
          var a = el('a', i === 0 ? 'btn primary' : 'btn', l.label);
          a.href = l.url;
          a.target = '_blank';
          a.rel = 'noopener';
          links.appendChild(a);
        });
        if (!(g.links || []).length) links.appendChild(el('span', 'muted', 'Projekt prywatny, bez publicznego linku'));
        card.appendChild(links);
        box.appendChild(card);
      });
    })
    .catch(function () {
      box.textContent = '';
      box.appendChild(el('p', 'loading', 'Nie udało się wczytać listy gier.'));
    });
})();
