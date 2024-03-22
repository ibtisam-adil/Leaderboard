const leaderboard = document.querySelector('.leaderboard');

const render = (array) => {
  leaderboard.innerHTML = array.map((arr) => (
    `
    <div class="data">
      <p class="name">${arr.user}</p>
      <p class=" score">: ${arr.score}</p>
    </div>
    `)).join('');
};

export default render;