$(function() {
    var $questionBars = $(".question-bar");

    $questionBars.eq(0).find(".answer").css("display","block");

    $questionBars.each(function(index, questionBar) {
        var $question = $(questionBar).find(".question");
        var $answer = $(questionBar).find(".answer");

        $question.click(function() {
            $(".question-bar .answer").each(function(ansIndex, ans) {
                $(ans).css("display","none");
            });

            $answer.css("display","block");
        });
    });
});
