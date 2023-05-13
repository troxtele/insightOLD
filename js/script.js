const option = document.querySelector(".label");
const options = document.querySelector(".options ul");
const lists = [...options.querySelectorAll("li")];
const dates = [...document.querySelectorAll(".date")];
const forms = [...document.querySelectorAll(".form")];
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

  const arrow = item.querySelector(".arrow svg")
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("rotate")
    const form = item.querySelector(".form")
    form.classList.toggle("height")
  })
})

// Forms
forms.map((form) => {
  const cross = form.querySelector(".cross");
  cross.addEventListener("click", () => {
    form.classList.toggle("height");
  });
});

//-----JS for Price Range slider-----
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 130,
    max: 500,
    values: [130, 250],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
});
