const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScoreBtn')
const finalScore = document.getElementById('finalScore')
const recentScore = localStorage.getItem('recentScore')
// only store 5 scores
const MAX_HIGH_SCORES = 5

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

finalScore.innerText = recentScore

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value
})

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: recentScore,
    name: username.value,
  }
  // arrange score ranking and store only 5
  highScores.push(score)
  highScores.sort((a, b) => b.score - a.score)
  highScores.splice(5)
  console.log(highScores)

  // store in localStorage
  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('/')
}