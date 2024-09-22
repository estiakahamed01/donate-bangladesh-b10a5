//Noakhali Donation
document
  .getElementById("donate-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateNoakhaliAmount = getInputFieldValueById(
      "noakhali-donate-amount"
    );
    if (isNaN(donateNoakhaliAmount)) {
      alert("Failed!! Please Try Again");
    } else {
      const availableBalance = getAvailableBalance("available-balance");
      const availableNoakhali = getAvailableBalance("noakhali-available");

      const newTotalBalance = availableBalance - donateNoakhaliAmount;
      const newNoakhaliBalance = availableNoakhali + donateNoakhaliAmount;

      document.getElementById("available-balance").innerText = newTotalBalance;
      document.getElementById("noakhali-available").innerText =
        newNoakhaliBalance;
    }
  });

//Feni Donation

document
  .getElementById("donate-feni")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateFeniAmount = getInputFieldValueById("feni-donate-amount");
    if (isNaN(donateFeniAmount)) {
      alert("Failed!! Please Try Again");
    } else {
      const availableBalance2 = getAvailableBalance("available-balance");
      const availableFeni = getAvailableBalance("feni-available");

      const newTotalBalance = availableBalance2 - donateFeniAmount;
      const newFeniBalance = availableFeni + donateFeniAmount;

      document.getElementById("available-balance").innerText = newTotalBalance;
      document.getElementById("feni-available").innerText = newFeniBalance;
    }
  });

//Quota Movement

document
  .getElementById("donate-movement")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMovementAmount = getInputFieldValueById(
      "movement-donate-amount"
    );

    if (isNaN(donateMovementAmount)) {
      alert("Failed!! Please Try Again");
    } else {
      const availableBalance3 = getAvailableBalance("available-balance");
      const availableMovement = getAvailableBalance("movement-available");

      const newTotalBalance = availableBalance3 - donateMovementAmount;
      const newMovementBalance = availableMovement + donateMovementAmount;

      document.getElementById("available-balance").innerText = newTotalBalance;
      document.getElementById("movement-available").innerText =
        newMovementBalance;
    }
  });
