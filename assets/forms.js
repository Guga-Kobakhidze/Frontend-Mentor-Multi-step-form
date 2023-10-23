// Buttons and Sections

const section = document.querySelector(".personal_section");

section.style.display = "flex";

const allSections = document.querySelectorAll(".main_section");
const buttons = document.querySelectorAll(".go_next");
const goBackButtons = document.querySelectorAll(".go_back");
const loadIcon = document.querySelector(".lds-ellipsis");

let currentSectionIndex = 0;

allSections.forEach((section, index) => {
  if (index !== currentSectionIndex) {
    section.style.display = "none";
  }
});

// Change Btn

const changeBtn = document.querySelector(".change_btn");

changeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  loadIcon.style.display = "block";
  setTimeout(() => {
    if (currentSectionIndex > 0) {
      allSections[currentSectionIndex].style.display = "none";
      currentSectionIndex -= 2;
      allSections[currentSectionIndex].style.display = "flex";
    }
    loadIcon.style.display = "none";
  }, 1000);
});

// GO Next button for all Sections

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const radios = document.querySelectorAll('input[type="radio"]:checked');
    if (radios.length === 0) {
      alert("You have to choose one!");
      return;
    }

    loadIcon.style.display = "block";
    setTimeout(() => {
      allSections[currentSectionIndex].style.display = "none";
      if (currentSectionIndex < allSections.length - 1) {
        currentSectionIndex++;
        allSections[currentSectionIndex].style.display = "flex";
      }
      loadIcon.style.display = "none";
    }, 1500);
  });
});

//  Go Back Button for all Section

goBackButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    loadIcon.style.display = "block";
    setTimeout(() => {
      if (currentSectionIndex > 0) {
        allSections[currentSectionIndex].style.display = "none";
        currentSectionIndex--;
        allSections[currentSectionIndex].style.display = "flex";
      }
      loadIcon.style.display = "none";
    }, 1000);
  });
});

// Form Section ->>

const personalForm = document.querySelector(".personal_forms");

personalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = personalForm.querySelector('input[name="name"]');
  const emailInput = personalForm.querySelector('input[name="email"]');
  const numberInput = personalForm.querySelector('input[name="number"]');

  const setFieldError = (input, fieldName) => {
    input.style.border = "1px solid hsl(354, 84%, 57%)";
    personalForm.querySelector(`label[for="${fieldName}"].alert`).textContent =
      "This field is required";
  };

  const clearFieldError = (input, fieldName) => {
    input.style.border = "";
    personalForm.querySelector(`label[for="${fieldName}"].alert`).textContent =
      "";
  };

  if (nameInput.value === "") {
    setFieldError(nameInput, "name");
  } else if (!emailInput.value || !emailInput.value.includes("@")) {
    setFieldError(emailInput, "email");
    clearFieldError(nameInput, "name");
  } else if (numberInput.value === "" || isNaN(numberInput.value)) {
    setFieldError(numberInput, "number");
    clearFieldError(emailInput, "email");
  } else {
    clearFieldError(emailInput, "number");
    loadIcon.style.display = "block";

    setTimeout(() => {
      allSections[currentSectionIndex].style.display = "none";
      if (currentSectionIndex < allSections.length - 1) {
        currentSectionIndex++;
        allSections[currentSectionIndex].style.display = "flex";
      }
      loadIcon.style.display = "none";
    }, 1500);
  }
});

// Finishing submit

const submitBtn = document.querySelector(".confirm");
const finishingContent = document.querySelector(".finishing_content");
const finishedSubmit = document.querySelector(".finished_submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  loadIcon.style.display = "block";
  setTimeout(() => {
    finishingContent.style.display = "none";
    finishedSubmit.style.display = "flex";
    loadIcon.style.display = "none";
  }, 1500);
});
