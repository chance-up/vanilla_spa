import ContentTitle from '../components/ContentTitle.js';
import CardContainer from '../components/CardContainer.js';
class HomePage {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const title = new ContentTitle(this.$main, 'Great PeoPle');
    title.render();

    const cardContainer = new CardContainer(this.$main);
    cardContainer.render();
  }
}

export default HomePage;
