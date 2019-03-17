
(function($){

    function initVideo () {
        var src = 'https://www.youtube-nocookie.com/embed/m_5RoDBfF70'
        $('#video').attr('src', src)
    }

    function teste(){
        console.log('teste')
    }


    $(function() {
        initVideo()
        teste()
    })

})(jQuery)