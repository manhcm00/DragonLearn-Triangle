const listShapes = document.querySelectorAll('.shapes');
const targets = document.querySelectorAll('.targets');
console.log(targets);

let draggedShape = null;

for (let i = 0; i < listShapes.length; i++) {
    const shape = listShapes[i];
    shape.addEventListener('dragstart', function () {
        console.log('dragged');
        draggedShape = shape;
        setTimeout(function() {
            shape.style.display = 'none';
        }, 0);
        
    });

    shape.addEventListener('dragend', function () {
        console.log('dragend');
        setTimeout(function() {
            draggedShape.style.display = 'block';
            draggedShape = null;
        }, 0);   
    });

    for (let j = 0; j < targets.length; j ++) {
        const target = targets[j];

        target.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
        });
    
        target.addEventListener('draggener', function(e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });
    
        target.addEventListener('dragleave', function(e) {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        })
    
        target.addEventListener('drop', function (e) {
            console.log(draggedShape.getAttribute("type"));
            if (draggedShape.getAttribute("type") == 'rectangle') {
                
            }
        });
    }

    
}
