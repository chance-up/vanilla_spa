class Input {
  constructor($container, $name, $place, $require) {
    this.$container = $container;
    this.$name = $name;
    this.$place = $place;
    this.$require = $require;
  }

  render() {
    const span = document.createElement('span');
    span.setAttribute('class', 'form_elem');

    const label = document.createElement('label');
    label.appendChild(document.createTextNode(this.$place));

    if (this.$require === true) {
      const requireSpan = document.createElement('span');
      requireSpan.setAttribute('class', 'mark');
      requireSpan.appendChild(document.createTextNode('(필수*)'));
      label.appendChild(requireSpan);
    }

    const input = document.createElement('input');
    input.setAttribute('id', this.$name);
    input.setAttribute('placeholder', this.$place);

    span.appendChild(label);
    span.appendChild(input);
    this.$container.appendChild(span);
  }
}

export default Input;
