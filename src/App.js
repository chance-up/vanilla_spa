import Header from './components/Header.js';
import HomePage from './pages/HomePage.js';
import SignupPage from './pages/SignupPage.js';
import { setPersonalInfo } from './data/data.js';

class App {
  constructor($body) {
    this.$body = $body;
  }

  async render() {
    await setPersonalInfo();

    const header = new Header(this.$body);
    header.render();

    // main tag 추가
    const main = document.createElement('main');
    main.setAttribute('class', 'page_content');
    this.$body.appendChild(main);

    // page 객체 선언
    const homePage = new HomePage(main);
    const signupPage = new SignupPage(main);

    document.addEventListener('urlChange', (e) => {
      main.innerHTML = '';
      switch (e.detail.href) {
        case '/web/':
          homePage.render();
          break;

        case '/web/signup':
          signupPage.render();
          break;

        default:
          homePage.render();
          break;
      }
    });
  }
}

export default App;
