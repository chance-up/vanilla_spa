import ContentTitle from '../components/ContentTitle.js';

class SignupPage {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const title = new ContentTitle(this.$main, 'Sign Up, GreatPeoPle!');
    title.render();
  }
}

export default SignupPage;
