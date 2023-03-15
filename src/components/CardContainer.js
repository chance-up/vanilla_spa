import Card from './Card.js';

class CardContainer {
  constructor($main) {
    this.$main = $main;
  }

  infiniteScroll(container, localStroage) {
    let lastChild = document.getElementById('cards_container').lastChild;
    const io = new IntersectionObserver(
      (entry, observer) => {
        if (entry[0].isIntersecting) {
          io.unobserve(entry[0].target);
          if (Number(lastChild.getAttribute('idx')) + 1 === localStroage.length) {
            return;
          }
          const start = Number(lastChild.getAttribute('idx')) + 1;
          const end = start + 4 > localStroage.length ? localStroage.length : start + 4;
          for (let i = start; i < end; i++) {
            new Card(container, i, localStroage[i]).render();
          }
          lastChild = document.getElementById('cards_container').lastChild;
          io.observe(lastChild);
        }
      },
      {
        threshold: 0.7,
      }
    );

    io.observe(lastChild);
  }

  render() {
    const containerDiv = document.createElement('div');
    containerDiv.setAttribute('id', 'cards_container');
    this.$main.appendChild(containerDiv);

    const person = JSON.parse(localStorage.getItem('personalInfo'));

    // localStorage 에 cardStatus가 없을 경우
    if (!localStorage.getItem('cardStatus')) {
      let cardStatusList = [];
      for (let i = 0; i < person.length; i++) {
        const cardStatus = {
          idx: i,
          status: 'card',
        };
        cardStatusList.push(cardStatus);
      }
      localStorage.setItem('cardStatus', JSON.stringify(cardStatusList));
    }

    for (let i = 0; i < 4; i++) {
      new Card(containerDiv, i, person[i]).render();
    }

    this.infiniteScroll(containerDiv, person);
  }
}

export default CardContainer;
