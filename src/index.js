import './style.css';
import api from './modules/api.js';
import render from './modules/render.js';

// Game with ID: n3TDdyviIOPfr7WPDVjB

class Leaderboard {
  constructor() {
    this.array = [];
    this.name = document.querySelector('.p-name');
    this.scores = document.querySelector('.p-score');
    this.button = document.querySelector('.submit-btn');
  }

  getData = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n3TDdyviIOPfr7WPDVjB/scores/');
    const data = await response.json();
    const scores = data.result;
    this.array = scores;
    render(this.array);
  };

  addScores = () => {
    const nameValue = this.name.value;
    const scoreValue = this.scores.value;
    const obj = { user: nameValue, score: scoreValue };
    api(JSON.stringify(obj), this.getData);
  }

  bindEvent = () => {
    this.button.addEventListener('click', this.addScores);
    this.getData();
  }
}

const myleaderboard = new Leaderboard();
myleaderboard.bindEvent();
