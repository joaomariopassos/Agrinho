const plantButton = document.getElementById('plant-button');
const waterButton = document.getElementById('water-button');
const fertilizeButton = document.getElementById('fertilize-button');
const seed = document.getElementById('seed');
const sprout = document.getElementById('sprout');
const sapling = document.getElementById('sapling');
const tree = document.getElementById('tree');
const messageDiv = document.getElementById('message');

let stage = 0; // 0: semente, 1: broto, 2: muda, 3: árvore

plantButton.addEventListener('click', () => {
    if (stage === 0) {
        seed.classList.add('hidden');
        sprout.classList.remove('hidden');
        messageDiv.textContent = 'A semente foi plantada!';
        waterButton.disabled = false;
        stage = 1;
    }
});

waterButton.addEventListener('click', () => {
    if (stage === 1) {
        sprout.classList.add('hidden');
        sapling.classList.remove('hidden');
        messageDiv.textContent = 'O broto foi regado e cresceu!';
        fertilizeButton.disabled = false;
        stage = 2;
    } else if (stage === 2) {
        sapling.classList.add('hidden');
        tree.classList.remove('hidden');
        messageDiv.textContent = 'A muda foi regada e se tornou uma árvore!';
        waterButton.disabled = true;
    } else if (stage > 2) {
        messageDiv.textContent = 'A árvore já está grande e saudável!';
    } else {
        messageDiv.textContent = 'Plante a semente primeiro!';
    }
});

fertilizeButton.addEventListener('click', () => {
    if (stage === 2) {
        sapling.classList.add('hidden');
        tree.classList.remove('hidden');
        messageDiv.textContent = 'A muda foi fertilizada e se tornou uma árvore!';
        fertilizeButton.disabled = true;
    } else if (stage > 2) {
        messageDiv.textContent = 'A árvore já está forte!';
    } else {
        messageDiv.textContent = 'Aguarde a muda crescer para fertilizar.';
    }
});