import ContentTitle from '../components/ContentTitle.js';
import FormContainer from '../components/FormContainer.js';
class SignupPage {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const title = new ContentTitle(this.$main, 'Sign Up, GreatPeoPle!');
    title.render();
    const formContainer = new FormContainer(this.$main);
    formContainer.render();
  }
}

export default SignupPage;
