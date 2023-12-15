window.addEventListener("load", solve);

function solve() {
    const playerNameInput = document.getElementById('player');
    const playerScoreInput = document.getElementById('score');
    const playerRoundInput = document.getElementById('round');
    const addBtn = document.getElementById('add-btn');
    const sureList = document.getElementById('sure-list');
    const scoreBoardList = document.getElementById('scoreboard-list');
    const clearBtn = document.querySelector('.clear');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const playerName = playerNameInput.value;
        const playerScore = playerScoreInput.value;
        const playerRound = playerRoundInput.value;

        if (!playerName || !playerScore || !playerRound) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'dart-item';

        const article = document.createElement('article');

        const pName = document.createElement('p');
        pName.textContent = playerName
        const pScore = document.createElement('p');
        pScore.textContent = `Score: ${playerScore}`;
        const pRound = document.createElement('p');
        pRound.textContent = `Round: ${playerRound}`;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'edit';
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');

        const okBtn = document.createElement('button');
        okBtn.textContent = 'ok';
        okBtn.classList.add('btn');
        okBtn.classList.add('ok');

        article.appendChild(pName);
        article.appendChild(pScore);
        article.appendChild(pRound);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(okBtn);

        sureList.appendChild(li);

        clear();

        addBtn.disabled = true;

        editBtn.addEventListener('click', (e) => {

          playerNameInput.value = pName.textContent;
          playerScoreInput.value = pScore.textContent.split(': ')[1];
          playerRoundInput.value = pRound.textContent.split(': ')[1];

          sureList.innerHTML = '';

          addBtn.disabled = false;
        })

        okBtn.addEventListener('click', (e) => {

          editBtn.remove();
          okBtn.remove();

          scoreBoardList.appendChild(li);

          addBtn.disabled = false;
        })

        clearBtn.addEventListener('click', (e) => {
          location.reload();
        })
    });

    function clear() {
      playerNameInput.value = '';
      playerScoreInput.value = '';
      playerRoundInput.value = '';
      
    }

}
  