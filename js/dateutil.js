document.addEventListener("DOMContentLoaded", function() {
  let dateDiffNode = document.getElementById('lastJobExperience');
  let hireDate = new Date(dateDiffNode.dataset.hireDate).getTime();
  // Get the timestamp for the start of the current month
  let startOfCurrentMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
  ).getTime();
  dateDiffNode.innerText = humanizeDuration(
      startOfCurrentMonth - hireDate,
      { language: "ru", delimiter: " ", units: ["y", "mo"], round: true}
  );
});