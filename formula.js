document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let lengthWastagePerComponent = 2;

    var lengthComponentMm = parseFloat(document.getElementById('component_length').value);
    var weightComponentKg = parseFloat(document.getElementById('component_weight').value);
    var weightRodKg = parseFloat(document.getElementById('rod_weight').value);
    var lengthRodMm = parseFloat(document.getElementById('rod_length').value);
    var lengthRemovedStartMm = parseFloat(document.getElementById('end_bit').value);

    const totalWastageKg = calculatetotalWastageKg(weightRodKg, lengthRodMm, weightComponentKg, lengthComponentMm, lengthRemovedStartMm, lengthWastagePerComponent);
    alert("Total Wastage: " + totalWastageKg.toFixed(4) + " kg");
});

function calculatetotalWastageKg(weightRodKg, lengthRodMm, weightComponentKg, lengthComponentMm, lengthRemovedStartMm, lengthWastagePerComponent) {
    // Calculate weight removed from the the rod at start
    const weightRemovedStartKg = (weightRodKg / lengthRodMm) * lengthRemovedStartMm;
  
    // Calculate the number of components that can be produced
    const remainingLengthMm = lengthRodMm - lengthRemovedStartMm;
    const numComponents = Math.floor(remainingLengthMm / lengthComponentMm);
  
    // Calculate the weight of the wastage produced
    const weightWastagePerComponentKg = (weightComponentKg / lengthComponentMm) * lengthWastagePerComponent;
    const weightWastageTotalKg = weightWastagePerComponentKg * numComponents;
  
    const totalWastageKg = weightRemovedStartKg + weightWastageTotalKg;
  
    return totalWastageKg;
  }