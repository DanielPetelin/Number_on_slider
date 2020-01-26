var range = document.querySelector('.number');
var rangeNum = document.querySelector('.range-num');
range.oninput = function() {
    rangeNum.style.left = this.value - 10 + 'px';
    rangeNum.innerHTML = this.value;
};