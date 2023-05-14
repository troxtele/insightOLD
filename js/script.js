const option = document.querySelector(".label");
const options = document.querySelector(".options ul");
const lists = [...options.querySelectorAll("li")];
const sections = [...document.querySelectorAll("section")];
const dates = [...document.querySelectorAll(".date")];
const strategy = [...document.querySelectorAll(".strategy .items .item")];

option.addEventListener("click", () => {
  option.querySelector(".arrow svg").classList.toggle("rotate");
  options.classList.toggle("heightwidth");
});

// Active option
lists.map((list) =>
  list.addEventListener("click", () => {
    lists.forEach((list) => list.classList.remove("active"));
    list.classList.add("active");

    sections.map((section) => {
      const string = section.className.toLowerCase();
      section.classList.add("hidden");
      if (string.includes(list.id.toLocaleLowerCase())) {
        section.classList.remove("hidden");
      }
    });
  })
);

// const date = new Date();

// const dateObj = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
// const todaysDate = date.toLocaleString("en-IN", dateObj);
// dates.map((date) => );

// Strategy

strategy.map((item) => {
  // Star
  const stars = [...item.querySelectorAll(".star svg")];
  stars.map((star) => {
    star.addEventListener("click", () => {
      stars[0].classList.toggle("hidden");
      stars[1].classList.toggle("hidden");
    });
  });

  // plus
  const plus = item.querySelector(".plus svg");
  const form = item.querySelector(".form");
  plus.addEventListener("click", () => {
    plus.classList.toggle("rotate");
    form.classList.toggle("height");
  });
  // Arrow
  const arrow = item.querySelector(".arrow svg");
  const bottom = item.querySelector(".bottom");
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("rotate");
    bottom.classList.toggle("height");
  });

  // Forms
  const cross = form.querySelector(".cross");
  cross.addEventListener("click", () => {
    form.classList.toggle("height");
    plus.classList.remove("rotate");
  });
});

const ranges = [...document.querySelectorAll(".ranges .item")];

console.log(ranges);

ranges.map((range) => {
  const rangeInput = range.querySelectorAll(".range-input input");
  const progress = range.querySelector(".slider .progress");

  let priceGap = 300;
  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

        console.log(
          (minVal / rangeInput[0].max) * 100,
          100 - (maxVal / rangeInput[1].max) * 100
        );
      }
    });
  });
});
