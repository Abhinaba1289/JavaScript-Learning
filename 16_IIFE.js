// Immediately Invoked Functon Expression ()() or IIFE
(() => {
    console.log("Database connected!");
})();
(() => {
    console.log("I am an IIFE, I run immediately!");
})();
// -> Immediately invoke function it is done for some initialization or setup code that you want to run immediately without polluting the global scope.