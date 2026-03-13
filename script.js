function mockcase(str) {
    const arr = [...str];
    const letters = arr
        .map((c, i) => c !== " " ? i : null)
        .filter(i => i !== null);

    for (let i = 1; i < letters.length;) {
        arr[letters[i]] = arr[letters[i]].toUpperCase();
        i += Math.floor(Math.random() * 2) + 2;
    }

    return arr.join("");
}
const output = document.querySelector("#out");
const button = document.querySelector("#submitBtn");
const input = document.querySelector("#textInp");
const copyBtn = document.querySelector("#copyBtn");

document.addEventListener("DOMContentLoaded", () => {
    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            button.click();
        }
    })
})
button.addEventListener("click", (event) => {
    event.preventDefault();
    const text = input.value.toLowerCase();
    output.innerHTML = mockcase(text);
})
copyBtn.addEventListener("click", () => {
    if (output.textContent) {
        navigator.clipboard.writeText(output.textContent);
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "Copied!";
        setTimeout(() => {
            copyBtn.innerText = originalText;
        }, 2000);
    }
})
