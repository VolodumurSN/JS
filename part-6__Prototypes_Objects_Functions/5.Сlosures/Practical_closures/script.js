function makeSizer(size) {
    return function () {
        document.body.style.fontSize = size + 'px';
    };
}

let size12 = makeSizer(12);
let size14 = makeSizer(14);
let size16 = makeSizer(16);

document.querySelector('#size-12').addEventListener('click', size12);
document.querySelector('#size-14').addEventListener('click', size14);
document.querySelector('#size-16').addEventListener('click', size16);