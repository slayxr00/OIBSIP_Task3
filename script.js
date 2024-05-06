function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var result;

    if (inputUnit === "celsius") {
        result = (inputTemperature * 9/5) + 32;
        document.getElementById("result").innerHTML = inputTemperature + "°C = " + result + "°F";
    } else {
        result = (inputTemperature - 32) * 5/9;
        document.getElementById("result").innerHTML = inputTemperature + "°F = " + result + "°C";
    }
}
