// Animation
AOS.init({
  duration: 1000,
  once: true,
  offset: 200,
});
//Project Filters
document.addEventListener("DOMContentLoaded", function () {
  let projectFilters = document.querySelectorAll("#project-filters li");
  let projectItems = document.querySelectorAll(".project-item");

  projectFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // Remove active class from all filters
      projectFilters.forEach((filter) =>
        filter.classList.remove("filter-active")
      );

      // Add active class to the clicked filter
      this.classList.add("filter-active");

      let filterValue = this.getAttribute("data-filter");

      // Show/Hide project items based on filter
      projectItems.forEach((item) => {
        if (
          filterValue === "*" ||
          item.classList.contains(filterValue.slice(1))
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
//
