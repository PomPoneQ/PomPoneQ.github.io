$(function() {

    $("#program_container").hide();
    $("footer").hide();

    // animations
    $("#logo").toggle("slide", 0.01).toggle("slide", 1500, function() {
        $("#program_container").show(500, function() {
            $("footer").show(200);
        });
    });

    let programChecked = true;

    // clicks
    $("#button_program").click(function() {
        if (!programChecked) {
            $("#button_program").css("background-color", "#0e0e0e");
            $("#button_members").css("background-color", "initial");
            programChecked = true;
        }
    })
    $("#button_members").click(function() {
        if (programChecked) {
            $("#button_members").css("background-color", "#0e0e0e");
            $("#button_program").css("background-color", "initial");
            programChecked = false;
        }
    })
})