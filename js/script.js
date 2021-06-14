$('#page-top').click(function () {//バーの高さの基準となるエリア指定
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});