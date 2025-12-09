const editProfilemodal = document.querySelector("#edit-profile-modal");
const newPostmodal = document.querySelector("#new-post-modal");

const editProfilebtn = document.querySelector(".profile__edit-btn");
const newPostbtn = document.querySelector(".profile__new-post-btn");

const editProfilecloseBtn = editProfilemodal.querySelector(".modal__close-btn");
const newPostcloseBtn = newPostmodal.querySelector(".modal__close-btn");

//open profile modal
editProfilebtn.addEventListener("click", function () {
  editProfilemodal.classList.add("modal_is-opened");
});
//open new post modal
newPostbtn.addEventListener("click", function () {
  newPostmodal.classList.add("modal_is-opened");
});

//close profile modal
editProfilecloseBtn.addEventListener("click", function () {
  editProfilemodal.classList.remove("modal_is-opened");
});

//close new post modal
newPostcloseBtn.addEventListener("click", function () {
  newPostmodal.classList.remove("modal_is-opened");
});
