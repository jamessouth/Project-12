// import './loadSW.mjs';

const projectDivs = document.querySelectorAll('.projects div');
const cdivs = document.querySelectorAll('.contact div');
const sections = document.querySelectorAll('section:not(#about)');
const contactDivs = [...cdivs].slice(0, cdivs.length - 2);

fetch('./src/images/resume.pdf')
.then(b => {
  const resLink = document.querySelector('li:last-of-type a');
  resLink.href = b.url;
  resLink.download = 'james_south_res.pdf';
})
.catch(e => console.log('failed to fetch: ', e));

if (CSS.paintWorklet) {
  CSS.paintWorklet.addModule('./src/js/ButtonPaint.js');
}

function ioOpts(dist) {
  return {
    root: null,
    rootMargin: `0px 0px ${dist}px 0px`,
    threshold: 0.1,
  };
}

const idObserver = new IntersectionObserver((ents, obs) => {
  ents.filter((entry) => entry.isIntersecting).forEach(({ target }) => {
    if (target.id == 'port') {

      Promise.all([
        import('./projects.mjs'),
        import('./panelFactory.mjs'),
      ])
        .then(([projects, panFact]) => {
          const observer = new IntersectionObserver((entries, observer) => {
            entries.filter((ent) => ent.isIntersecting).forEach(({ target, target: { id } }) => {
              panFact.default(target, projects.default[id]);
              observer.unobserve(target);
            });
          }, ioOpts(400));
          [...projectDivs].forEach((el) => observer.observe(el));
        })
        .catch((err) => console.log(err));


      if (CSS.paintWorklet) {
        CSS.paintWorklet.addModule('./src/js/BorderPaint.js');
      }
    } else if (target.id == 'articles') {

      fetch(`./src/images/jpgsprite.jpg`)
        .then(i => {
          const link = document.createElement('link');
          link.href = s.url;
          link.rel = 'stylesheet';
          link.type = 'text/css';
          document.head.appendChild(link);
        })
        .catch(e => console.log('failed to fetch: ', e));

      

    } else if (target.id == 'cont') {
      Promise.all([
        import('./links.mjs'),
        import('./linkFactory.mjs'),
      ])
        .then(([links, linkFact]) => {
          [...contactDivs].forEach((el, i) => linkFact.default(el, links.default[i]));
        })
        .catch((err) => console.log(err));
    }

    fetch(`./src/css/${target.id}.css`)
      .then(s => {
        const link = document.createElement('link');
        link.href = s.url;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        document.head.appendChild(link);
      })
      .catch(e => console.log('failed to fetch: ', e));

    obs.unobserve(target);
  });
}, ioOpts(200));

sections.forEach(s => idObserver.observe(s));
