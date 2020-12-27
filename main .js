function getpara_1() {
    inputs = [];

    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("paragraph_" + i).value);
    }
    console.log(inputs);

    document.getElementById("1").innerHTML = inputs.join(". ");
    console.log(inputs);

    for (var k = 1; k <= 6; k++) {
        document.getElementById("paragraph_" + k).value = "";
    }
}

function getpara_2() {
    inputs_2 = [];

    for (var j = 1; j <= 6; j++) {
        inputs_2.push(document.getElementById("PARAGRAPH_" + j).value);
    }
    console.log(inputs_2);

    document.getElementById("2").innerHTML = inputs_2.join(". ");
    console.log(inputs_2);

    for (var l = 1; l <= 6; l++) {
        document.getElementById("PARAGRAPH_" + l).value = "";
    }
}