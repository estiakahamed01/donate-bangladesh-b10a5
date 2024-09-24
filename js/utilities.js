function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}

function getAvailableBalance(id){
    const availableValue = document.getElementById(id).innerText;
    const availableAmount = parseFloat(availableValue)
    return availableAmount;
}


function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

document.getElementById('donate-human3').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('my_modal_5').classList.add('hidden');
})
document.getElementById('donate-human2').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('my_modal_5').classList.add('hidden');
})
document.getElementById('donate-human1').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('my_modal_5').classList.add('hidden');
})

