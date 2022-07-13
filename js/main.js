const gridDom = document.getElementById('grid');

for (let i = 0; i < 100; i++) {
    
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');

    currentElement.addEventListener('click',
        function () {
            if (this.classList.contains('clicked')) {
                this.classList.remove('clicked');
            }else{
                this.classList.add('clicked');
            }
        }
    );
    
    gridDom.append(currentElement);
}