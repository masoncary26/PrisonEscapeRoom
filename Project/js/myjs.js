function openModal(id) {
  var modal = document.getElementById(id);
  modal.style.display = 'block';
}

function closeModal(id) {
  var modal = document.getElementById(id);
  modal.style.display = 'none';
}

var inventory = [];

function addToInventory(n) {
    
    if (inventory.indexOf(n) === -1) {
        inventory.push(n);
        document.getElementById("displayMyInventory").innerHTML += n + "<br>";
    }
}