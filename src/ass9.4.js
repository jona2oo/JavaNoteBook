function translator(input, output) {

    let result = input.value.split("").map(c => c.charCodeAt(0));
    output.innerText = result.join(", ");
}