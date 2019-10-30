import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
        <li>
            <div class="info-container">
                <h2>${image.title}</h2>
                <p class="horns">${image.horns} Horn</p>
            </div>
    
            <div class="image-container">
                <img src="${image.url}" title="${image.description}">
            </div>
        </li>
        `;
    }
}

export default ImageItem;