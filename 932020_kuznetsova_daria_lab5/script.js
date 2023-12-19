function showModal(props) {
    const parent = document.getElementById('main');
    const child = document.createElement('div');
    child.className = 'modal';
    
    child.onclick = function() { removeModal() };
    
    const modal = document.createElement('div');
    modal.className = 'modal-inner';
        
    child.appendChild(modal);
    modal.innerHTML =  (`<h2>${props.header}</h2> <p>${props.text}</p>`);
    
    parent.appendChild(child);
}

function removeModal() {
    const modal = document.getElementsByClassName('modal')[0];
    modal.remove();
}