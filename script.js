document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('form')
    const tableBody=document.getElementById('tableBody')

    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        const firstname=document.getElementById(firstname).value;
        const lastname=document.getElementById(lastname).value;
        const address=document.getElementById(address).value;
        const pincode=document.getElementById(pincode).value;
        const gender=document.querySelector('input[name="gender"]:checked').value;
        const foods = document.querySelectorAll('input[name="food"]:checked');
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        if (foods.length < 2) {
            alert('Please select at least 2 food options.');
            return;
        }
        const foodArray = Array.from(foods).map(food => food.value).join(', ');

        const row = tableBody.insertRow();
            const cells = [
                firstname,
                lastname,
                address,
                pincode,
                foodArray,
                state,
                country
            ];
            cells.forEach(cellData => {
                const cell = row.insertCell();
                cell.textContent = cellData;
            });
            form.reset();
        });
    });
    