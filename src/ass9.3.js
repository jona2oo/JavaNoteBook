function translator(input, output) {
    if (input.value.length !== 0)
        output.innerText = input.value.slice(-1).charCodeAt(0);
}