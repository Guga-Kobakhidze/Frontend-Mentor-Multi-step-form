// For Radio select --->>>
const monthResult = [
  { title: "Arcade (Monthly)", price: 9, duration: "mo" },
  { title: "Advanced (Monthly)", price: 12, duration: "mo" },
  { title: "Pro (Monthly)", price: 15, duration: "mo" },
];

const yearResult = [
  { title: "Arcade (Yearly)", price: 90, duration: "yr" },
  { title: "Advanced (Yearly)", price: 120, duration: "yr" },
  { title: "Pro (Yearly)", price: 150, duration: "yr" },
];

const monthlyRadio = document.querySelectorAll(
  '.monthly_cards input[name="card-select"]'
);
const yearlyRadio = document.querySelectorAll(
  '.yearly_cards input[name="card-select"]'
);
const putName = document.querySelector(".put_name");
const putPrice = document.querySelector(".put_price");
const lastPrice = document.querySelector(".last_price");

const resultPrice = (selectedCard, result) => {
  selectedCard.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        putName.textContent = result[index].title;
        putPrice.textContent = `$${result[index].price}/${result[index].duration}`;
      }
    });
  });
};

resultPrice(monthlyRadio, monthResult);
resultPrice(yearlyRadio, yearResult);

// For Checkbox select -->>>

const checkboxes = document.querySelectorAll(".checkbox");
const spans = document.querySelectorAll(".span");

const targets = ["service", "storage", "profile"];
const spanNumbers = [1, 2, 2, 10, 20, 20];

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    const isChecked = checkbox.checked;
    const target = targets[index % 3];

    const checkItems = document.querySelectorAll(`.add_${target}`);
    const priceItems = document.querySelectorAll(`.${target}_price`);
    console.log(priceItems);

    spans.forEach((span, spanIndex) => {
      span.textContent = spanNumbers[spanIndex];
    });

    checkItems.forEach((item) => {
      item.style.display = isChecked ? "flex" : "none";
    });

    priceItems.forEach((item) => {
      item.style.display = isChecked ? "flex" : "none";
    });
  });
});

// Calculate for radio price + checkbox price

const totalPriceElement = document.getElementById("last_price");
const goBackBtn = document.getElementById("go-back");
const changingBtn = document.getElementById("change-btn");

const updateTotalPrice = () => {
  let total = 0;
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const price = parseFloat(checkbox.getAttribute("data-price"));
      total += price;
    }
  });
  const selectedRadio = Array.from(monthlyRadio)
    .concat(Array.from(yearlyRadio))
    .find((radio) => radio.checked);
  if (selectedRadio) {
    const radioPrice = parseFloat(selectedRadio.getAttribute("data-price"));
    total += radioPrice;
  }
  totalPriceElement.textContent = `$${total}/`;
};

const resetTotalPrice = () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  setTimeout(() => {
    updateTotalPrice();
  }, 2000);
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTotalPrice);
});
[...monthlyRadio, ...yearlyRadio].forEach((radio) => {
  radio.addEventListener("change", updateTotalPrice);
});

updateTotalPrice();

// Reset the total when "go back" or "changing" button is clicked
goBackBtn.addEventListener("click", resetTotalPrice);
changingBtn.addEventListener("click", resetTotalPrice);
