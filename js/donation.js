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
      document.getElementById('my_modal_1').classList.add('hidden')
      return 1
    } else {
      const availableBalance = getAvailableBalance("available-balance");
      const availableNoakhali = getAvailableBalance("noakhali-available");

      const newTotalBalance = availableBalance - donateNoakhaliAmount;
      const newNoakhaliBalance = availableNoakhali + donateNoakhaliAmount;

      document.getElementById("available-balance").innerText = newTotalBalance;
      document.getElementById("noakhali-available").innerText =
        newNoakhaliBalance;

      //History
      const div = document.createElement('div');
      const time = new Date();
      div.classList.add('py-3', 'px-5' , 'border-2','border-solid','border-gray-600','rounded-xl')
      div.innerHTML= `
      <h3 class="font-bold text-xl text-black">${donateNoakhaliAmount} Taka Donated for Flood at Noakhali, Bangladesh</h3>
      <p class="font-medium text-gray-500">${time}</p>
      
      `

      document.getElementById('history-container').appendChild(div)
      document.getElementById('my_modal_1').classList.remove('hidden')
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
      document.getElementById('my_modal_3').classList.add('hidden')
    } else {
      const availableBalance2 = getAvailableBalance("available-balance");
      const availableFeni = getAvailableBalance("feni-available");

      const newTotalBalance = availableBalance2 - donateFeniAmount;
      const newFeniBalance = availableFeni + donateFeniAmount;

      document.getElementById("available-balance").innerText = newTotalBalance;
      document.getElementById("feni-available").innerText = newFeniBalance;

      
      //History
      const div = document.createElement('div');
      const time = new Date();
      div.classList.add('py-3', 'px-5' , 'border-2','border-solid','border-gray-600','rounded-xl')
      div.innerHTML= `
      <h3 class="font-bold text-xl text-black">${donateFeniAmount} Taka Donated for Flood Relief in Feni,Bangladesh</h3>
      <p class="font-medium text-gray-500">${time}</p>
      
      `

      document.getElementById('history-container').appendChild(div)
      document.getElementById('my_modal_3').classList.remove('hidden')

      document.getElementById('close2').addEventListener('click',function(){
        document.getElementById('my_modal_3').close()
      })

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
      document.getElementById('my_modal_5').classList.add('hidden')
    } else {
      const availableBalance3 = getAvailableBalance("available-balance");
      const availableMovement = getAvailableBalance("movement-available");

      const newTotalBalance = availableBalance3 - donateMovementAmount;
      const newMovementBalance = availableMovement + donateMovementAmount;

      document.getElementById("available-balance").innerText = newTotalBalance;
      document.getElementById("movement-available").innerText =
        newMovementBalance;

        //History
        const div = document.createElement('div');
      const time = new Date();
      div.classList.add('py-3', 'px-5' , 'border-2','border-solid','border-gray-600','rounded-xl')
      div.innerHTML= `
      <h3 class="font-bold text-xl text-black">${donateMovementAmount} Taka Donated for Injured in the Quota Movement</h3>
      <p class="font-medium text-gray-500">${time}</p>
      
      `

      document.getElementById('history-container').appendChild(div)

      document.getElementById('my_modal_5').classList.remove('hidden')

    
    }
  });

 