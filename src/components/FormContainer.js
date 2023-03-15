import Input from './Input.js';
import Select from './Select.js';
import Button from './Button.js';

class FormContainer {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const formContainerDiv = document.createElement('div');
    formContainerDiv.setAttribute('id', 'form_container');

    const nameInput = new Input(formContainerDiv, 'name', '이름', true).render();
    const emailInput = new Input(formContainerDiv, 'email', '이메일', true).render();
    const roleSelect = new Select(
      formContainerDiv,
      'role',
      '직군',
      ['직군을 선택해주세요', '프론트엔드', '백엔드', '풀스택'],
      true
    ).render();
    const mbtiSelect = new Select(
      formContainerDiv,
      'mbti',
      'MBTI',
      [
        'MBTI를 선택해주세요',
        'ENFJ',
        'ENTJ',
        'ENFP',
        'ENTP',
        'ESFJ',
        'ESTJ',
        'ESFP',
        'ESTP',
        'INFJ',
        'INTJ',
        'INFP',
        'INTP',
        'ISFJ',
        'ISTJ',
        'ISFP',
        'ISTP',
      ],
      false
    ).render();

    const registerButton = new Button(formContainerDiv, '등록').render();

    this.$main.appendChild(formContainerDiv);

    // const nameSpan = document.createElement('span');
    // nameSpan.setAttribute('class', 'form_elem');

    // const nameLabel = document.createElement('label');
    // nameLabel.appendChild(document.createTextNode('이름'));

    // const nameLabelSpan = document.createElement('span');
    // nameLabelSpan.setAttribute('class', 'mark');
    // nameLabelSpan.appendChild(document.createTextNode('(필수*)'));

    // const nameInput = document.createElement('input');
    // nameInput.setAttribute('id', 'name');
    // nameInput.setAttribute('placeholder', '이름');

    // nameLabel.appendChild(nameLabelSpan);
    // nameSpan.appendChild(nameLabel);
    // nameSpan.appendChild(nameInput);
    // formContainerDiv.appendChild(nameSpan);

    // <div id="form_container">
    //         <span class="form_elem">
    //             <input id="name" placeholder="이름">
    //         </span>
    //         <span class="form_elem">
    //             <input id="email" placeholder="이메일">
    //         </span>
    //         <span class="form_elem">
    //             <select id="role" name="role">
    //                 <option value="">직군을 선택해주세요</option>
    //                 <option value="backend">백엔드</option>
    //                 <option value="frontend">프론트엔드</option>
    //                 <option value="fullstack">풀스택</option>
    //             </select>
    //         </span>
    //         <span class="form_elem">
    //             <button type="submit">등록</button>
    //         </span>
    //     </div>
  }
}

export default FormContainer;
