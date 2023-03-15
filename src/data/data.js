export const setPersonalInfo = async () => {
  const response = await fetch('./src/data/new_data.json');
  const data = await response.json();

  if (!localStorage.getItem('personalInfo')) {
    localStorage.setItem('personalInfo', JSON.stringify(data));
  }
};
