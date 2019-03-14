function fibonacci(x, y, end, stdout=null) {

    if (typeof end === "object")
        end = parseInt(end.value);

    if (x+y >= end)
        return [];

    let value = [x + y].concat(fibonacci(y, x+y, end));
    if (stdout === null)
        return value;

    stdout.innerHTML = value.join(", ");
}