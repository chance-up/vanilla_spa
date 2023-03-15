class Button {
  constructor($container, $text) {
    this.$container = $container;
    this.$text = $text;
  }

  render() {
    const span = document.createElement('span');
    span.setAttribute('class', 'form_elem');

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.appendChild(document.createTextNode(this.$text));

    span.appendChild(button);
    this.$container.appendChild(span);
  }
}

export default Button;
