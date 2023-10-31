$(function() {
    var $questionBars = $(".question-bar");

    var $currentOpenAnswer = $questionBars.eq(0).find(".answer").show();

    $questionBars.on("click", ".question", function() {

        var $answer = $(this).next(".answer");
        
        if ($answer.is(':visible')) {
            return;
        }

        $currentOpenAnswer.hide();
        $answer.show();
        $currentOpenAnswer = $answer;
    });
});
