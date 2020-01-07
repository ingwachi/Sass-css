$(document).ready(function () {
    console.log("hello JQuery")

    setTimeout(function () {
        $('h1.display-1').text('JQuery 101')
    }, 2000);

    setInterval(function () {
        // $('h1.display-1').slideUp()
        // $('h1.display-1').slideDown()

        var h1 = $('h1.display-1')
        h1.slideUp()
        h1.slideDown()
    }, 500);

    $('button.clickme').on('click', function() {
        
    })
})