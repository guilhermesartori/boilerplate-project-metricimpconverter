/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input;
    result = result.replace(/[a-z]+$/gi, '');
    if (result.match(/^\d+(\.\d+)?(\/[0-9]+(\.\d+)?)?$/)) {
      result = eval(result);
    } else if (result == '') {
      result = 1;
    } else {
      result = 'invalid number';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result = input;
    result = result.replace(/^[\d\/\.]+/, '');
    if (!result.match(/^(mi|km|lbs|kg|gal|l)$/i)) {
      result = 'invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit.toLowerCase()) {
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi"
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      default:
        result = 'invalid unit'
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit.toLowerCase()) {
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers"
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      default:
        result = 'invalid unit'
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase()) {
      case "mi":
        result = initNum*miToKm;
        break;
      case "km":
        result = initNum/miToKm;
        break;
      case "lbs":
        result = initNum*lbsToKg;
        break;
      case "kg":
        result = initNum/lbsToKg;
        break;
      case "gal":
        result = initNum*galToL;
        break;
      case "l":
        result = initNum/galToL;
        break;
      default:
        result = 'invalid unit'
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
