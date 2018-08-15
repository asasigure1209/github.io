$(() => {
    let page = 0;
    let lastPage = parseInt($(".slide img").length - 1);

    //imgの非表示
    $(".slide img").css("display","none");
    
    //imgの表示
    $(".slide img").eq(page).css("display","block");

    function changePage() {
        $(".slide img").fadeOut(1000);
        $(".slide img").eq(page).fadeIn(1000);
    };

    let Timer;
    function startTimer() {
        Timer = setInterval(function() {
            if (page === lastPage) {
                page = 0;
                changePage();
            } else {
                page++;
                changePage();
            };
        }, 3000);
    };
    //（７）～秒間隔でイメージ切換の停止設定
    function stopTimer() {
        clearInterval(Timer);
    };
    
    //（８）タイマースタート
    startTimer();
    
    /*オプションを足す場合はここへ記載*/
    
    });