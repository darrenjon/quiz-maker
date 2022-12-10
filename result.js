const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScoreBtn')
const finalScore = document.getElementById('finalScore')
const recentScore = localStorage.getItem('recentScore')

finalScore.innerText = recentScore

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value
})

saveHighScore = (e) => {
  e.preventDefault();
}