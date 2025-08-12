let friendsArray = [];
let drawBtn = document.querySelector(".button-draw");
let nameInput = document.querySelector(".input-name");
let addBtn = document.querySelector(".button-add");
let errorMessage = document.querySelector(".errorMessage");
let friendsList = document.querySelector(".friends-list");
let nameBtn = document.querySelector(".button-name");
let hideBtn = document.querySelector(".button-hide");
let resetBtn = document.querySelector(".button-reset");
let resultList = document.querySelector(".result-List");
let resultMessage = document.querySelector("#secretFriend");
let hiddenIcon = document.querySelector("#hiddenIcon");

/* Updates and shows the current list of names */
function screenList() {
  friendsList.innerHTML = "";
  friendsArray.forEach(friend => {
    friendsList.innerHTML += `<li><button active class="button-name" onclick="eraseFriend('${friend}')">${friend}<i class="fa-solid fa-circle-xmark"></i></button></li>`;
  });
  if (friendsArray == "") {
    resetBtn.disabled = true;
    drawBtn.disabled = true;
  } else {
    resetBtn.disabled = false;
  }
}

/* Allows to confirm the input pressing Enter */
nameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addBtn.classList.add("keyboard");
    addFriend();
    setTimeout(() => {
      addBtn.classList.remove("keyboard");
    }, 150);
  }
});

/* Pushes the input to an array */
function addFriend() {
  let secretName = nameInput.value.trim();

  if (secretName !== "") {
    friendsArray.push(secretName);
    errorMessage.hidden = true;
    nameInput.value = "";
    drawBtn.disabled = false;
    screenList();
  } else {
    errorMessage.hidden = false;
  }
}

/* Erases a name when pressing it's button */
function eraseFriend(nameToRemove) {
  friendsArray = friendsArray.filter(friend => friend !== nameToRemove);
  screenList();
}

/* Picks a random name to be the Secret Friend */
function drawFriend() {
  let sortedFriend = friendsArray[parseInt(Math.random() * friendsArray.length + 1) - 1];
  resultMessage.innerHTML = `<h3>${sortedFriend}!</h3>`;
  resultMessage.hidden = false;
  hideBtn.disabled = false;
  hiddenIcon.hidden = true;
}

/* Hides or shows sorted name */
function hideName() {
  if (hiddenIcon.hidden == false && resultMessage.hidden == true) {
    hiddenIcon.hidden = true;
    resultMessage.hidden = false;
    hideBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i><span class="button-text">Hide secret name</span>`;
  } else {
    resultMessage.hidden = true;
    hiddenIcon.hidden = false;
    hideBtn.innerHTML = `<i class="fa-solid fa-eye"></i><span class="button-text">Show secret name</span>`;
  }
  hideBtn.active = true;
}

/* Wipes everything and start a fresh new game */
function newGame() {
  friendsArray = [];
  drawBtn.disabled = true;
  hideBtn.disabled = true;
  resetBtn.disabled = true;
  hiddenIcon.hidden = true;
  resultMessage.hidden = true;
  resultMessage.innerHTML = "";
  screenList();
}
