const option = document.querySelector(".label");
const options = document.querySelector(".options ul");
const lists = [...options.querySelectorAll(".sidenav a")];

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


