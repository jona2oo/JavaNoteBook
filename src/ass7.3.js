function faculteit(input, output) {
    let value = parseInt(input.value);
    let cache = 1;

    let formule = "";
    output.innerHTML = "";

    for (let i = 1; i < value; i++) {

        cache *= i;
        formule += (formule !== "") ? " * " + i : i.toString();
        output.innerHTML += "<p>" + formule + " = " + cache + "</p>"
    }

}