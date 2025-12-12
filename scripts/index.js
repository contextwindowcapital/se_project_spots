const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");

const editProfilebtn = document.querySelector(".profile__edit-btn");
const newPostbtn = document.querySelector(".profile__new-post-btn");

const editProfilecloseBtn = editProfileModal.querySelector(".modal__close-btn");
const newPostcloseBtn = newPostModal.querySelector(".modal__close-btn");

//open profile modal
editProfilebtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  prefillEditProfileFields();
});
//open new post modal
newPostbtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

//close profile modal
editProfilecloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

//close new post modal
newPostcloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

//Edit Profile Pre-filling its form fields with the current user’s data.
const nameField = editProfileModal.querySelector("#name-input-field");
const descriptionField = editProfileModal.querySelector(
  "#description-input-field"
);

const nameFieldPrefill = document.querySelector("#profile-name-textarea");
const descriptionFieldPrefill = document.querySelector(
  "#profile-description-textarea"
);

const imageLinkInput = document.querySelector("#image-link-input-field");
const captionInput = document.querySelector("#caption-input-field");

function prefillEditProfileFields() {
  nameField.value = nameFieldPrefill.textContent.trim();
  descriptionField.value = descriptionFieldPrefill.textContent.trim();
}

//Submission listeners and handlers for each form
const editProfileform = editProfileModal.querySelector(".modal__form");
const newPostForm = newPostModal.querySelector(".modal__form");

//close modal function
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

//edit post
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameFieldPrefill.textContent = nameField.value;
  descriptionFieldPrefill.textContent = descriptionField.value;
  closeModal(editProfileModal);
}
//new post
function handleNewpostFormsubmit(evt) {
  evt.preventDefault();
  console.log(imageLinkInput.value);
  console.log(captionInput.value);
  closeModal(newPostModal);
}

editProfileform.addEventListener("submit", handleProfileFormSubmit);

newPostForm.addEventListener("submit", handleNewpostFormsubmit);
