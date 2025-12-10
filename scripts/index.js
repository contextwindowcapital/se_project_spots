const editProfilemodal = document.querySelector("#edit-profile-modal");
const newPostmodal = document.querySelector("#new-post-modal");

const editProfilebtn = document.querySelector(".profile__edit-btn");
const newPostbtn = document.querySelector(".profile__new-post-btn");

const editProfilecloseBtn = editProfilemodal.querySelector(".modal__close-btn");
const newPostcloseBtn = newPostmodal.querySelector(".modal__close-btn");

//open profile modal
editProfilebtn.addEventListener("click", function () {
  editProfilemodal.classList.add("modal_is-opened");
  prefillEditprofileFields();
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

//Edit Profile Pre-filling its form fields with the current user’s data.
const nameField = editProfilemodal.querySelector("#name-input-field");
const descriptionField = editProfilemodal.querySelector(
  "#description-input-field"
);

const nameFieldPrefill = document.querySelector("#profile-name-textarea");
const descriptionFieldprefill = document.querySelector(
  "#profile-description-textarea"
);

const imageLinkinput = document.querySelector("#image-link");
const captionInput = document.querySelector("#caption");

function prefillEditprofileFields() {
  nameField.value = nameFieldPrefill.textContent;
  descriptionField.value = descriptionFieldprefill.textContent;
}

//Submission listeners and handlers for each form.
const editProfileform = editProfilemodal.querySelector(".modal__form");
const newPostFrom = newPostmodal.querySelector(".modal__form");

//edit post
function handleProfileformSubmit(evt) {
  evt.preventDefault();
  nameFieldPrefill.textContent = nameField.value;
  descriptionFieldprefill.textContent = descriptionField.value;
  editProfilemodal.classList.remove("modal_is-opened");
}
//new post
function handleNewpostFormsubmit(evt) {
  evt.preventDefault();
  console.log(imageLinkinput.value);
  console.log(captionInput.value);
  newPostmodal.classList.remove("modal_is-opened");
}

editProfileform.addEventListener("submit", handleProfileformSubmit);

newPostFrom.addEventListener("submit", handleNewpostFormsubmit);

//Edits save to profile

//1.add ids for edit profile fields in modal and then add ids for textareas on page
//2.figured out prefill - text is wierd centerd location vs expected CSS?
//3.figured out working edit profile and saving input valuies
//4.figured out console logs for new post
//5.need to do: CSS styling ( smooth transitions, css that matchs figma, )
