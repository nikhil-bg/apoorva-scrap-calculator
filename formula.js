document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var componentLength = parseFloat(document.getElementById('component_length').value);
    var componentWeight = parseFloat(document.getElementById('component_weight').value);
    var rodWeight = parseFloat(document.getElementById('rod_weight').value);
    var rodLength = parseFloat(document.getElementById('rod_length').value);
    var endBit = parseFloat(document.getElementById('end_bit').value);

    console.log(componentLength, componentWeight, rodWeight, rodLength, endBit);

    componentLength += 2;
    var gramWeight = componentWeight * 1000;
    var usableRod = rodLength - endBit;
    var partsProduced = usableRod / componentLength;
    var makeableWeight = gramWeight * partsProduced;
    var makeableKg = makeableWeight / 1000;
    var scrapValue = (rodWeight - makeableKg).toFixed(2);

    alert(`Scrap Value: ${scrapValue} kg`);
});