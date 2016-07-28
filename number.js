module.exports = function () {
  var map = {
    '1' : {0: "one hundred", 1 :function(result, str){ result = (str.length === 3 ? "and " : "") + map[str.charAt(str.length-1)].teen;return result;}, 2: "one", "teen": "eleven"},
    '2' : {0: "two hundred", 1 :"twenty", 2: "two", "teen": "twelve"},
    '3' : {0: "three hundred", 1 :"thirty", 2: "three", "teen": "thirteen"},
    '4' : {0: "four hundred", 1 :"forty", 2: "four", "teen": "fourteen"},
    '5' : {0: "five hundred", 1 :"fifty", 2: "five", "teen": "fifteen"},
    '6' : {0: "six hundred", 1 :"sixty", 2: "six", "teen": "sixteen"},
    '7' : {0: "seven hundred", 1 :"seventy", 2: "seven", "teen": "seventeen"},
    '8' : {0: "eight hundred", 1 :"eighty", 2: "eight", "teen": "eightteen"},
    '9' : {0: "nine hundred", 1 :"ninety", 2: "nine", "teen": "nineteen"},
    '0' : {0: "", 1 :"", 2: "", "teen": "ten"},
  }
  var mags = [
    "",
    " thousand ",
    " million ",
    " billion "
  ]
  var convert = function(val, cb) {
    var parts,
        result = "";

    parts = get_segments(val);
//     console.log(parts);
    for (let a = 0; a<parts.length; a+=1) {
      result = do_segment(parts[a], mags[a]) + result;
    }
    cb(null, result.trim());
  }

  var get_segments = function (str) {
    var result = [],
        token = "",
        i = -1;
    while (i >= (-1 * str.length) ) {
       token = str.charAt(str.length + i) + token;
       if (token.length === 3) {
         result.push(token);
         token = "";
       }
       i -= 1;
    }
    if (token !== "" ) {
      result.push(token);
    }
    return result;
  }

  var do_segment = function(part, magnitude) {
    var result = "";

    for (let i = part.length-1; i >=0; i-=1 ) {
      var val = map[part[i]][i + (3-part.length) ];
      if (typeof val === "string") {
        result = val + " " + result;
      } else if (typeof val === "function") {
        result = val(result, part);
      }
    }
    result = result.trim();
    if (result.length > 0) {
      result += magnitude;
    }
    return result;
  }
  return {
    convert: convert
  };
}();