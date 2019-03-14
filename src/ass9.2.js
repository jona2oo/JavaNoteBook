function tabulation(input, output) {
    input = parseInt(input.value);

    output.innerHTML = "";
    for (let i = 1; i <= 10; i++) {

        output.innerHTML += "<p>" + i + " * " + input + " = " + i * input +  "</p>";
    }
}