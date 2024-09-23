console.log(typeof "hi");

function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }
  
  console.log(getFee(true));
  // Expected output: "$2.00"
  
  console.log(getFee(false));
  // Expected output: "$10.00"
  
  console.log(getFee(null));
  // Expected output: "$10.00"

if ("" == true) {
    console.log("The double quotes came off as true!");
} else     { 
    console.log("The double quotes came off as false!");
}