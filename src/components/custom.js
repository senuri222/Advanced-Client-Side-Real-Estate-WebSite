// Get current year
(function () {
  var year = new Date().getFullYear();
  const currentYearElement = document.querySelector("#currentYear");
  if (currentYearElement) {
    currentYearElement.innerHTML = year;
  }
})();

