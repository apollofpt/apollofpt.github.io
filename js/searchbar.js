$('.search-button').on('click', function() {
    if(window.innerWidth >= 992){
        $('.toggle-target-container').animate({width:'toggle'},350);
        $('.search-group').toggleClass('close-search open-search');
        $("#search-icon").toggleClass('fa-search fa-times');
    }
});

$(window).on('resize', function(){
    if(window.innerWidth < 992){
        $('.toggle-target-container').css('display', 'block');
        
        if(document.getElementById("search-icon").classList.contains("fa-times")) $("#search-icon").toggleClass('fa-times fa-search');
        if(document.getElementById("search-group").classList.contains("open-search")) $('.search-group').toggleClass('open-search close-search');

    } else{
        $('.toggle-target-container').css('display', 'none');
    }
});