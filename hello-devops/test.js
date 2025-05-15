const greet = require('./app');
if (greet() === "hello devops") {
    console.log("✅Test passed");
    Process.exit(0);
}else {
    console.log("❌Test failed");
    process.exit(1);
}