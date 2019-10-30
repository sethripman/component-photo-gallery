import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import renderImage from './render-image.js';

const list = document.querySelector('.horns');
const hornTypeFilter = document.querySelector('.corn-type-filter');
const hornsFilter = document.querySelector('.horns-filter');

hornTypeFilter.addEventListener('change', () => {
    const filter = hornTypeFilter.value;
    let filteredHorns = null;

    if (!filter) {
        filteredHorns = images;
    }
    else {
        filteredHorns = images.filter(horn => {
            return horn.keyword === filter;
        });
    }

    render(filteredHorns);
});

hornsFilter.addEventListener('change', () => {
    const filter = hornsFilter.value;
    let filteredHorns = null;

    if (!filter) {
        filteredHorns = images;
    }
    else {
        filteredHorns = images.filter(image => {
            return image.horns >= filter;
        });
    }
    render(filteredHorns);
});

// kick off initial render on load with all cats
render(images);

// put render functionality into function as
// we want to call repetitively when list is filtered
function render(imagesToRender) {
    // remove any existing list items
    while (list.lastElementChild) {
        list.lastElementChild.remove();
    }

    // render new list items
    imagesToRender.forEach(horn => {
        const html = renderImage(horn);
        const dom = htmlToDOM(html);
        list.appendChild(dom);
    });
}