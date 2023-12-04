const ImportedInfo = require("./information");

let cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: `My name is ${ImportedInfo.information.name} from ${ImportedInfo.information.campus}`,
    e: "oO",
    T: "U ",
  })
);
