import Component from '../Component.js';
import Header from './Header.js';
import ImageList from './CatList.js';
import FilterImages from './FilterImages.js';
import images from '../data/images.js';

class App extends Component {

    onRender(dom) {
        const header = new Header({
            person: 'Little Piglet',
            sayHello: (name) => { console.log(`Hello, ${name}`); }
        });
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);


        const filterImages = new FilterImages({
            images: images,
            onFilter: (imageType) => {
                let filteredImages;
                if (!imageType) {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.keyword === imageType;
                    });
                }

                const updateProps = { cats: filteredImages };
                imageList.update(updateProps);
            }
        });

        const filterImagesDOM = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterImagesDOM);

    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
        
                <main>
                    <section class="options-section">
                        <!-- FilterCats goes here -->
                    </section>

                    <section class="list-section">
                        <!-- CatList goes here -->
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;