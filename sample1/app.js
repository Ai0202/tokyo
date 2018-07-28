$(function() {

    let res = ['大吉', '吉', '中吉', '凶', '大凶'];
     $('.omikuji').on('click', function() {
        var num = Math.floor(Math.random() * (res.length - 1));

        $(this).text(res[num]);
    });
});
   