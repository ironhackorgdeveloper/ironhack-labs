const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function printCharacters() {
    const charArr = charactersAPI.getFullList();
    document.querySelector('.characters-container').innerHTML = '';
    charArr
      .then((result) => {
        result.data.forEach((e) => {
          document.querySelector('.characters-container').innerHTML += `<div class="character-info">
          <div class="id">id: ${e.id}</div>
        <div class="name">Character Name: ${e.name}</div>
        <div class="occupation">Character Occupation: ${e.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${e.cartoon}</div>
        <div class="weapon">Character Weapon: ${e.weapon}</div>
      </div>`;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  document.getElementById('fetch-one').onclick = function printOneCharacter() {
    const id = document.getElementById('find-one-id').value;
    const char = charactersAPI.getOneRegister(id);
    document.querySelector('.characters-container').innerHTML = '';
    char
      .then((result) => {
        const character = result.data;
        document.querySelector('.characters-container').innerHTML = `<div class="character-info">
          <div class="id">id: ${character.id}</div>
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`;
      });
  };

  document.getElementById('delete-one').onclick = function deleteCharacter() {
    const id = document.getElementById('delete-char-id').value;
    charactersAPI.deleteOneRegister(id)
      .then(() => {
        document.querySelector('.characters-container').innerHTML = 'Character deleted';
      });
  };

  document.getElementById('edit-character-form').onsubmit = function editCharacter(ev) {
    ev.preventDefault();
    const id = document.getElementById('edit-char-id').value;
    const form = document.getElementById('edit-character-form');
    const charValues = {
      name: form.querySelector('.character-name').value,
      occupation: form.querySelector('.character-occup').value,
      weapon: form.querySelector('.character-weapon').value,
      cartoon: form.querySelector('.character-cartoon').checked,
    };
    charactersAPI.updateOneRegister(id, charValues);
  };

  document.getElementById('new-character-form').onsubmit = function () {
    charactersAPI.createOneRegister();
  };
});
