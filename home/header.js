import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <img class="logo" src="https://p7.hiclipart.com/preview/878/465/223/overwatch-d-va-bit-roadhog.jpg" alt="Component Unicorns by Seth">
                <h1>'Corn Stash - Now with Components!</h1>
            </header>
        `;
    }
}

export default Header;