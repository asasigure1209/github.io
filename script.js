$(() => {
    let page = 0;
    let lastPage = parseInt($("#slide img").length - 1);

    //imgの非表示
    $("#slide img").css("display","none");
    
    //imgの表示
    $("#slide img").eq(page).css("display","block");

    function changePage() {
        $("#slide img").fadeOut(1000);
        $("#slide img").eq(page).fadeIn(1000);
    };
    
    /*オプションを足す場合はここへ記載*/
    $("#previous").click(function() {
        //タイマー停止＆スタート（クリックした時点から～秒とする為）
            if (page === lastPage) {
                page = 0;
                changePage();
            } else {
                page++;
                changePage();
            };
    });
   
   //「戻る」をクリック
    $("#next").click(function() {
        //タイマー停止＆スタート（クリックした時点から～秒とする為）
        if(page === 0) {
            page = lastPage;
            changePage();
        } else {
            page--;
            changePage();
        };
    });
});