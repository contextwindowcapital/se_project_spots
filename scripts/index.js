const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");

const editProfileBtn = document.querySelector(".profile__edit-btn");
const newPostbtn = document.querySelector(".profile__new-post-btn");

const editProfilecloseBtn = editProfileModal.querySelector(".modal__close-btn");
const newPostcloseBtn = newPostModal.querySelector(".modal__close-btn");

//preview functionality
const previewImage = document.querySelector(".modal__image-preview");
const descriptionPreviewText = document.querySelector(
  ".modal__description-preview-text"
);

//open profile modal
editProfileBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  prefillEditProfileFields();
});
//open new post modal
newPostbtn.addEventListener("click", function () {
  openModal(newPostModal);
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

//open modal function
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

//edit post
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameFieldPrefill.textContent = nameField.value;
  descriptionFieldPrefill.textContent = descriptionField.value;
  closeModal(editProfileModal);
}
//new post w/ new card modal
function handleNewpostFormsubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: captionInput.value,
    link: imageLinkInput.value,
  };
  const cardElement = getCardElement(newCardData);
  cardList.prepend(cardElement);
  evt.target.reset();
  closeModal(newPostModal);
}

editProfileform.addEventListener("submit", handleProfileFormSubmit);

newPostForm.addEventListener("submit", handleNewpostFormsubmit);

//Generating card dynamically from a template element.
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = document
    .querySelector("#card-template")
    .content.cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");

  cardTitleElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;

  //like button function code
  const cardLikeButton = cardElement.querySelector(".card__like-icon");

  //toggle like button
  function toggleLikeBtn(cardLikeButton) {
    cardLikeButton.classList.toggle("card__like-icon_active");
  }

  cardLikeButton.addEventListener("click", function () {
    toggleLikeBtn(cardLikeButton);
  });

  //delete button functionality
  const cardDeleteBtn = cardElement.querySelector(".card__delete-icon");

  cardDeleteBtn.addEventListener("click", function (evt) {
    evt.target.closest(".card").remove();
    cardElement.remove();
  });

  //open preview modal
  cardImageElement.addEventListener("click", function () {
    openModal(previewModal);
    previewImage.src = data.link;
    previewImage.alt = data.name;
    descriptionPreviewText.textContent = data.name;
  });

  return cardElement;
}

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardList.append(cardElement);
});

//close preview modal
const previewModal = document.querySelector("#preview-modal");

const previewModalCloseBtn = document.querySelector(
  ".modal__close-btn-preview"
);

previewModalCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});
