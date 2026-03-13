function mockcase(str) {
    const strarr = [...str];
    if (!str.includes(" ")) {
        const randstp = Math.floor(Math.random() * 2) + 2;
        for (let i = 1; i < strarr.length; i += randstp) {
            strarr[i] = strarr[i].toUpperCase();
        }
    }
    else {
        let randstp = Math.floor(Math.random() * 2) + 2;
        for (let i = 1; i < strarr.length; i += randstp) {
            if (strarr[i] !== " ") {
                strarr[i] = strarr[i].toUpperCase();
            }
            else {
                if (!(randstp < 4))
                    randstp -= 1;
                else
                    randstp += 1;
                strarr[i] = strarr[i].toUpperCase();
            }
            randstp = Math.floor(Math.random() * 2) + 2;
        }
    }
    return strarr.join("");
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
