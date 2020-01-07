$(document).ready(function () {
    console.log("hello JQuery")

    setTimeout(function () {
        $('h1.display-1').text('JQuery 101')
    }, 2000);

    setInterval(function () {
        // $('h1.display-1').slideUp()
        // $('h1.display-1').slideDown()

        var h1 = $('h1.display-1')
        // h1.slideUp()
        // h1.slideDown()
        // h1.text("Hello World")
    }, 500);

    $('button.clickme').on('click', function() {
        var text = $('h1.display-1').text();
        // $('h2.display-2').text(text);
        $('h2.display-2').html(`<ul><li>${text}</li></ul>`)
        console.log('Button was clicked');
    })

    setTimeout(function() {
        $.ajax({
            url: 'data.json'
        }).done(function (res) {
            // console.log(res)
            for (obj of res) {
                console.log(obj.name + ": " + obj.color);
            }
        })
    }, 2000)
})