
document.addEventListener("DOMContentLoaded", function () {
  const serviceHeaders = document.querySelectorAll("#services h4");

  serviceHeaders.forEach(header => {
    header.addEventListener("click", function () {
      alert("You clicked on " + this.innerText + " service!");
    });
  });
});
