document.getElementById("add").addEventListener("click", () => {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let res = document.getElementById("res");

    const sum = first + second;
    console.log(sum);
    console.log(first);
    console.log(second);
    res.innerHTML = sum;
});
document.getElementById("sub").addEventListener("click", () => {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let res = document.getElementById("res");

    const sub = first - second;
    console.log(sub);
    console.log(first);
    console.log(second);
    res.innerHTML = sub;
});
document.getElementById("mul").addEventListener("click", () => {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let res = document.getElementById("res");

    const mul = first * second;
    console.log(mul);
    console.log(first);
    console.log(second);
    res.innerHTML = mul;
});
document.getElementById("div").addEventListener("click", () => {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let res = document.getElementById("res");

    const div = first / second;
    console.log(div);
    console.log(first);
    console.log(second);
    res.innerHTML = div;
});