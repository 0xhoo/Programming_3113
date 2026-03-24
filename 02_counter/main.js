let count = 0;

// const total = document.getElementsByTagName("h1")[0];
// const plus_btn = document.getElementsByTagName("button")[0];
// const resultH1 = document.getElementById("result");
resultH1.innerHTML = count;

// plus_btn.addEventListener("click", function () {
//     count++;
//     total.innerHTML = count;
// });
// plus_btn.onclick = () => {
//     count++;
//     total.innerHTML = count;
// };

function plus() {
    count++;
    resultH1.innerHTML = count;
}
function two_plus() {
    count+=2;
    resultH1.innerHTML = count;
}
function minus() {
    count--;
    resultH1.innerHTML = count;
}