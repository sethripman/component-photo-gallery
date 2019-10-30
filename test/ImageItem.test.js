import ImageItem from '../home/ImageItem.js';
const test = QUnit.test;

QUnit.module('Render Cat Item');

test('renders html from data', assert => {
    // arrange
    const input = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
    <li>
        <div class="info-container">
            <h2>UniWhal</h2>
            <p class="horns">1 Horn</p>
        </div>

        <div class="image-container">
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title="A unicorn and a narwhal nuzzling their horns">
        </div>
    </li>
    `;

    // act
    const props = { image: image };
    const ImageItem = new ImageItem(props);
    const html = ImageItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});