$(document).ready( () => {

    const options = {
        strings: ['first^2000', 'awesome^2000', 'cool^2000', 'fantastic^2000', 'creative^2000'],
        typeSpeed: 40,
        showCursor: false,
        loop: true,
        loopCount: Infinity
    };

    var typed = new Typed('#typed', options);

} );