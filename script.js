// creating a clipboardjs manager instance for the code sample copy buttons on the page
var copyClipBtns = new ClipboardJS('.copy-btn', {
    target: function( trigger ) {
        return trigger.nextElementSibling;
    }
});


// creating an event handler for a successful copy operation
copyClipBtns.on( 'success', function( event ) {
    event.trigger.innerHTML = "copied!";

    setTimeout( function() {
        event.trigger.innerHTML = "📋";
    }, 1000 );
});


// creating the display logic for the nav menu button for mobile
var navMenuBtn = document.querySelector('nav > span');

navMenuBtn.addEventListener( 'click', function( event ) {
    event.target.parentElement.classList.toggle('show');
})