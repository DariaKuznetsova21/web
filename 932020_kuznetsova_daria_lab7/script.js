function createSquare(inputId) {
    const amount = document.getElementById(inputId).value;
    
    for (let i = 0; i < amount; i++) {
        let sq = document.createElement('div');

        sq.style.backgroundColor = '#ff0000';
        sq.style.opacity = '0.9';
        sq.style.border = '3px solid #000000';
        
        let size = Math.random() * 500; 
        sq.style.height = size;
        sq.style.width = size;

        sq.style.position = 'absolute';
        sq.style.left = Math.random() * (window.innerWidth - size);
        sq.style.top = Math.random() * (window.innerHeight - size);

        let sqId = `r-${Date.now() + Math.floor(Math.random() * 100)}`;
        sq.id = sqId;

        sq.ondblclick = function () {
            document.getElementById('shapes').removeChild(sq);
        };

        sq.onclick = function () {
            document.getElementById(sqId).style.backgroundColor = 'yellow';
        };
        
        let parent = document.getElementById('shapes');
        parent.appendChild(sq);
    }
}

function createTriangle(inputId) {
    const amount = document.getElementById(inputId).value;
    
    for (let i = 0; i < amount; i++) {
        let tr = document.createElement('div');

        tr.style.opacity = '0.9';
        let size = Math.random() * 500;
        tr.style.border = `${size}px solid transparent`;
        tr.style.borderBottom = `${size}px solid #0000ff`
        tr.style.boxSizing = 'border-box';

        tr.style.position = 'absolute';
        tr.style.left = Math.random() * (window.innerWidth - size * 2);
        tr.style.top = Math.random() * (window.innerHeight - size * 2);

        let trId = `t-${Date.now() + Math.floor(Math.random() * 100)}`;
        tr.id = trId;

        tr.ondblclick = function () {
            document.getElementById('shapes').removeChild(tr);
        };
        tr.onclick = function () {
            let el = document.getElementById(trId);
            el.style.borderBottomColor = 'yellow';
        }

        let parent = document.getElementById('shapes');
        parent.appendChild(tr);
    }
}

function createCircle(inputId) {
    const amount = document.getElementById(inputId).value;

    for (let i = 0; i < amount; i++) {
        let circle = document.createElement('div');

        circle.style.backgroundColor = '#00ff00';
        circle.style.opacity = '0.9';
        circle.style.border = '3px solid #000000';
        
        let size = Math.random() * 500;
        circle.style.height = size;
        circle.style.width = size;
        circle.style.borderRadius = '100%';

        circle.style.position = 'absolute';
        circle.style.left = Math.random() * (window.innerWidth - size);
        circle.style.top = Math.random() * (window.innerHeight - size);

        let circleId = `c-${Date.now() + Math.floor(Math.random() * 100)}`; 
        circle.id = circleId;

        circle.ondblclick = function () {
            document.getElementById('shapes').removeChild(circle);
        };
        circle.onclick = function () {
            document.getElementById(circleId).style.backgroundColor = 'yellow';
        };
        
        let parent = document.getElementById('shapes');
        parent.appendChild(circle);
    }
}