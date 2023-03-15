class Card {
  constructor($container, $idx, $data) {
    this.$container = $container;
    this.$idx = $idx;
    this.$data = $data;
  }

  render() {
    let cardStatus = JSON.parse(localStorage.getItem('cardStatus'));
    const thisCardStatus = cardStatus[this.$idx].status;

    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('idx', this.$idx);
    cardDiv.setAttribute('class', thisCardStatus);

    const frontPlaneDiv = document.createElement('div');
    frontPlaneDiv.setAttribute('class', 'card_plane card_plane--front');
    frontPlaneDiv.appendChild(document.createTextNode(this.$data.nickname));

    const backPlaneDiv = document.createElement('div');
    backPlaneDiv.setAttribute('class', 'card_plane card_plane--back');
    backPlaneDiv.appendChild(document.createTextNode(this.$data.mbti));

    cardDiv.appendChild(frontPlaneDiv);
    cardDiv.appendChild(backPlaneDiv);

    this.$container.appendChild(cardDiv);

    cardDiv.addEventListener('click', (e) => {
      cardDiv.classList.toggle('is-flipped');
      cardStatus = JSON.parse(localStorage.getItem('cardStatus'));
      cardStatus[this.$idx].status = cardDiv.getAttribute('class');
      localStorage.setItem('cardStatus', JSON.stringify(cardStatus));
    });
  }
}

export default Card;
