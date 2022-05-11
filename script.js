$(function() {

    $("#main_container").hide();
    $("footer").hide();

    // animations
    $("#logo").toggle("slide", 0.01).toggle("slide", 1500, function() {
        $("#main_container").show(500, function() {
            $("footer").show(200);
        });
    });

    // main body content
    let targeted_page = 1;
    let body_html = SetBodyContent(targeted_page);

    $("#main_content").html(body_html);

    // clicks
    let programChecked = true;

    $("#button_program p").css("font-size", "1.4rem");

    $("#button_program").click(function() {
        if (!programChecked) {
            $("#button_program").css("background-color", "#0c0c0c");
            $("#button_program p").css("font-size", "1.4rem");
            $("#button_members").css("background-color", "initial");
            $("#button_members p").css("font-size", "1.25rem");
            programChecked = true;
        }
    })
    $("#button_members").click(function() {
        if (programChecked) {
            $("#button_members").css("background-color", "#0c0c0c");
            $("#button_members p").css("font-size", "1.4rem");
            $("#button_program").css("background-color", "initial");
            $("#button_program p").css("font-size", "1.25rem");
            programChecked = false;
        }
    })

    // mouse over effect
    $("#button_members").mouseenter(function() {
        if (programChecked) {
            $("#button_members").css("background-color", "#0e0e0e");
        }
    })
    $("#button_members").mouseleave(function() {
        if (programChecked) {
            $("#button_members").css("background-color", "initial");
        }
    })
    //
    $("#button_program").mouseenter(function() {
        if (!programChecked) {
            $("#button_program").css("background-color", "#0e0e0e");
        }
    })
    $("#button_program").mouseleave(function() {
        if (!programChecked) {
            $("#button_program").css("background-color", "initial");
        }
    })
})

function SetBodyContent(target_page) {
    switch(target_page) {
        case 1:
            return '<img src="images/gospodarka.jpg" alt="zdjęcie"><p class="heading">1. Rozwój gospodarki<p/><p class="points"><span>1.1.</span> Więcej miejsc pracy.<br/><span>1.2.</span> Rozbudowa gospodarstw rolnych – dofinansowania dla rolników.<br/><span>1.3.</span> Rozwój nowoczesnych technologii.<br/><span>1.4.</span> Budowa fabryk, marketów itp.<br/></p>';
        case 2:
            return
    }
}