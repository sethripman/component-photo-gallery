import Component from '../Component.js';

class FilterImages extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;
        
        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }
    
    renderHTML() {
        const images = this.props.images;
        // Using spread operator to take the individual keywords out of a set of unique keywords
        const uniqueKeywords = [...new Set(images.map(image => image.keyword))];

        
        let returnHTML = /*html*/`
        <select class="corn-type-filter">
        <option value="" selected>All Varieties</option>

            uniqueKeywords.forEach((keyword) => {
                const option = document.createElement("option")
                option.value = keyword;
                option.text = keyword.charAt(0).toUpperCase() + keyword.substring(1);
            });

        </select>
        `;
            
        return returnHTML;
    }
}
    
export default FilterImages;