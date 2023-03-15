class Select {
  constructor($container, $id, $label, $arr, $require) {
    this.$container = $container;
    this.$id = $id;
    this.$label = $label;

    this.$arr = $arr;
    this.$require = $require;
  }

  render() {
    const span = document.createElement('span');
    span.setAttribute('class', 'form_elem');

    const label = document.createElement('label');
    label.appendChild(document.createTextNode(this.$label));

    if (this.$require === true) {
      const requireSpan = document.createElement('span');
      requireSpan.setAttribute('class', 'mark');
      requireSpan.appendChild(document.createTextNode('(필수*)'));
      label.appendChild(requireSpan);
    }

    const select = document.createElement('select');
    select.setAttribute('id', this.$id);
    select.setAttribute('name', this.$id);

    this.$arr.forEach((element) => {
      const option = document.createElement('option');
      option.setAttribute('value', element);
      option.appendChild(document.createTextNode(element));
      select.appendChild(option);
    });

    span.appendChild(label);
    span.appendChild(select);
    this.$container.appendChild(span);
  }
}

export default Select;
