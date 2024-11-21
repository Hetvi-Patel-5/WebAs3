//IIFE --> immediately invokes function expression
(function(){
    function Start()
    {
        console.log("Workout Tracker app started");
    }
    window.addEventListener("load", Start);
})();