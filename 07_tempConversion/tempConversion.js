const ftoc = function(fahr) {
    let celcResult = (fahr - 32) * (5 / 9);
    return Math.round(celcResult * 10) / 10;
};

const ctof = function(celc) {
    let fahrResult = celc * (9/5) + 32;
    return Math.round(fahrResult * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
