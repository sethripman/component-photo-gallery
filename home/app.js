import Component from '../Component.js';
import Header from './Header.js';
import ImageList from './CatList.js';
import images from '../data/images.js';

class App extends Component {

    onRender(dom) {
        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);
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