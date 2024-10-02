// Show popups
document.getElementById('addMemberBtn').addEventListener('click', function() {
    document.getElementById('memberPopup').style.display = 'flex';
});

document.getElementById('addExpenseBtn').addEventListener('click', function() {
    document.getElementById('expensePopup').style.display = 'flex';
});

// Close popups
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.getElementById('expenseAmount').value='';
}

// Save member
document.getElementById('saveMemberBtn').addEventListener('click', function() {
    const name = document.getElementById('memberName').value;
    const contact = document.getElementById('memberContact').value;
    const inputcontact = contact.length;
  //  const contact1 = parseFloat(contact);
  if(inputcontact==10)
  {
    if (name && contact) {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${name}, Contact: ${contact}`;
        document.getElementById('members').appendChild(listItem);
        closePopup('memberPopup');
    } else {
        alert('Please enter valid name and contact.');
    }
  }
  else{
    alert('Enter valid contact number');
  }

    
});

// Save expense
document.getElementById('saveExpenseBtn').addEventListener('click', function() {
    const amount = document.getElementById('expenseAmount').value;
   // const amount1 = parseFloat(amount);

    if (!isNaN(amount) && amount!=0) {
        const listItem = document.createElement('li');
        listItem.textContent = `Amount:  ₹${amount}`;
        document.getElementById('expenses').appendChild(listItem);
        
        closePopup('expensePopup');

    } else {
        alert('Please enter the amount.');
    }
});

