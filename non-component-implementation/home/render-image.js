export default function renderImage(item) {
    const html = /*html*/`
    <li>
        <div class="info-container">
            <h2>${item.title}</h2>
            <p class="horns">${item.horns} Horn</p>
        </div>

        <div class="image-container">
            <img src="${item.url}" title="${item.description}">
        </div>
    </li>
    `;

    return html;
}