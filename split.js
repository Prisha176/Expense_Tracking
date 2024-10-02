let totalExpenses = 0;
let membersList = [];

// Event listener for adding members
document.getElementById('addMemberBtn').addEventListener('click', function() {
    // Reset input fields
    document.getElementById('memberName').value = '';
    document.getElementById('memberContact').value = '';
    
    document.getElementById('memberPopup').style.display = 'flex';
});

// Event listener for adding expenses
document.getElementById('addExpenseBtn').addEventListener('click', function() {
    // Reset input fields
    document.getElementById('expenseAmount').value = '';
    
    document.getElementById('expensePopup').style.display = 'flex';
});

// Event listener for splitting expenses
document.getElementById('splitExpenseBtn').addEventListener('click', function() {
    if (membersList.length === 0) {
        alert('No members available to split the expenses.');
        return;
    }

    if (totalExpenses === 0) {
        alert('No expenses to split.');
        return;
    }

    const perPersonExpense = totalExpenses / membersList.length;

    let splitDetails = '<ul>';
    membersList.forEach(member => {
        splitDetails += `<li>${member.name}: ₹${perPersonExpense.toFixed(2)}</li>`;
    });
    splitDetails += '</ul>';

    // Set the split details in the popup
    document.getElementById('splitDetails').innerHTML = splitDetails;

    // Show the split popup
    document.getElementById('splitPopup').style.display = 'flex';
});

// Close popups
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Save member
document.getElementById('saveMemberBtn').addEventListener('click', function() {
    const name = document.getElementById('memberName').value.trim();
    const contact = document.getElementById('memberContact').value.trim();

    if (name && contact) {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${name}, Contact: ${contact}`;
        document.getElementById('members').appendChild(listItem);

        // Add member to the members list
        membersList.push({ name: name, contact: contact });

        closePopup('memberPopup');
    } else {
        alert('Please enter both name and contact.');
    }
});

// Save expense
document.getElementById('saveExpenseBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    
    if (amount && amount > 0) {
        totalExpenses += amount;

        const listItem = document.createElement('li');
        listItem.textContent = `Amount: ₹${amount.toFixed(2)}`;
        document.getElementById('expenses').appendChild(listItem);
        closePopup('expensePopup');
    } else {
        alert('Please enter a valid amount.');
    }
});
