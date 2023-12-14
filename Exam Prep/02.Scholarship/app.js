window.addEventListener("load", solve);

function solve() {
  const nextBtn = document.getElementById("next-btn");
  const inputName = document.getElementById("student");
  const inputUny = document.getElementById("university");
  const inputScore = document.getElementById("score");
  const previewList = document.getElementById("preview-list");
  const candidateList = document.getElementById("candidates-list");

  nextBtn.addEventListener("click", next);
  function next(e) {
    e.preventDefault();

    if (
      inputName.value == "" ||
      inputUny.value == "" ||
      inputScore.value == ""
    ) {
      return;
    }

    const newItem = createElement(inputName.value, inputUny.value, inputScore.value);
    previewList.appendChild(newItem);

    inputName.value = "";
    inputUny.value = "";
    inputScore.value = "";

    nextBtn.disabled = true;

    editBtn = newItem.querySelector(".edit");
    applyBtn = newItem.querySelector(".apply");

    editBtn.addEventListener("click", function (e) {

      const name = newItem.querySelector("h4");
      const uny = newItem.querySelector("p:nth-child(2)");
      const score = newItem.querySelector("p:nth-child(3)");

      inputName.value = name.textContent;
      inputUny.value = uny.textContent.split(": ")[1];
      inputScore.value = score.textContent.split(": ")[1];

      nextBtn.disabled = false;

      newItem.innerHTML = "";

    });

    applyBtn.addEventListener("click", function (e) {

      const name = newItem.querySelector("h4");
      const uny = newItem.querySelector("p:nth-child(2)");
      const score = newItem.querySelector("p:nth-child(3)");

      const li = createElement(
        name.textContent, 
        uny.textContent.split(": ")[1], 
        score.textContent.split(": ")[1]
      );

      const editBtn = li.querySelector(".edit");
      const applyBtn = li.querySelector(".apply");

      li.removeChild(editBtn);
      li.removeChild(applyBtn);

      candidateList.appendChild(li);
      newItem.innerHTML = "";
      nextBtn.disabled = false;

    });
  }

  function createElement(name, uny, score) {

    const li = document.createElement("li");
    li.className = "application";

    const article = document.createElement("article");

    const h4 = document.createElement("h4");
    h4.textContent = name;

    const p1 = document.createElement("p");
    p1.textContent = `University: ${uny}`;

    const p2 = document.createElement("p");
    p2.textContent = `Score: ${score}`;

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");

    const applyBtn = document.createElement("button");
    applyBtn.textContent = "apply";
    applyBtn.classList.add("action-btn");
    applyBtn.classList.add("apply");

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(applyBtn);

    return li;
  }
}
