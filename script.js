$(function() {

    $("#main_container").hide();
    $("footer").hide();

    // animations                                                             <<<<
    $("#logo").toggle("slide", 0.01).toggle("slide", 1500, function() {
        $("#main_container").show(500, function() {
            $("footer").show(200);
        });
    });

    // main body content setting (by arrows clicking)                         <<<<
    let toggle_time = 100;
    let targeted_page = 1;
    let last_page = 10;
    let page_change_allowed = true;
    $("#main_content").html(SetBodyContent(targeted_page));

    $("#left_arrow").click(function() {
        if (targeted_page != 1 && page_change_allowed && programChecked) {
            targeted_page--;
            page_change_allowed = false;
            $("#main_content").slideToggle(toggle_time, function() {
                $("#main_content").html(SetBodyContent(targeted_page));
                $("#main_content").slideToggle(toggle_time, function() {
                    page_change_allowed = true;
                });
            });
        }
    })
    $("#right_arrow").click(function() {
        if (targeted_page != last_page && page_change_allowed && programChecked) {
            targeted_page++;
            page_change_allowed = false;
            $("#main_content").slideToggle(toggle_time, function() {
                $("#main_content").html(SetBodyContent(targeted_page));
                $("#main_content").slideToggle(toggle_time, function() {
                    page_change_allowed = true;
                });
            });
        }
    })

    // arrows mouse over                                            <<<<
    $("#right_arrow").mouseenter(function() {
        $("#right_arrow").css("transform", "scale(1.25)");;
    })
    $("#right_arrow").mouseleave(function() {
        $("#right_arrow").css("transform", "scale(1)");
    })
    //
    $("#left_arrow").mouseenter(function() {
        $("#left_arrow").css("transform", "scale(1.25)");
    })
    $("#left_arrow").mouseleave(function() {
        $("#left_arrow").css("transform", "scale(1)");
    })

    // buttons clicks                                              <<<<
    let programChecked = true;
    $("#button_program p").css("font-size", "1.4rem");

    $("#button_program").click(function() {
        if (!programChecked) {
            $("#button_program").css("background-color", "#0c0c0c");
            $("#button_program p").css("font-size", "1.4rem");
            $("#button_members").css("background-color", "initial");
            $("#button_members p").css("font-size", "1.25rem");

            $("#main_content").html(SetBodyContent(targeted_page))
            $("#right_arrow").show();
            $("#left_arrow").show();
            programChecked = true;
        }
    })
    $("#button_members").click(function() {
        if (programChecked) {
            $("#button_members").css("background-color", "#0c0c0c");
            $("#button_members p").css("font-size", "1.4rem");
            $("#button_program").css("background-color", "initial");
            $("#button_program p").css("font-size", "1.25rem");

            // members tab cotent                                     <<<<
            $("#main_content").html(SetBodyContent("members"))
            $("#right_arrow").hide();
            $("#left_arrow").hide();
            programChecked = false;
        }
    })

    // mouse over effect                                               <<<<
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

// function that sets main container body                                <<<<
function SetBodyContent(target_page) {

    switch(target_page) {
        case 1:
            return `
            <img class="prog_img" src="images/program/gospodarka.jpg" alt="zdj??cie">
            <p class="heading">1. Rozw??j gospodarki<p/>
            <p class="points">
            <span>1.1.</span> Wi??cej miejsc pracy.<br/>
            <span>1.2.</span> Rozbudowa gospodarstw rolnych ??? dofinansowania dla rolnik??w.<br/>
            <span>1.3.</span> Rozw??j nowoczesnych technologii.<br/>
            <span>1.4.</span> Budowa fabryk, market??w itp.<br/>
            </p>`;
        case 2:
            return `
            <img class="prog_spec" src="images/program/s??u??ba_zdrowia.jpg" alt="zdj??cie">
            <p class="heading">2. Lepsza s??u??ba zdrowia<p/>
            <p class="points">
            <span>2.1.</span> Wprowadzenie bezp??atnych bada?? kontrolnych dla os??b powy??ej 50 roku ??ycia.<br/>
            <span>2.2.</span> Pokrywanie koszt??w rehabilitacji os??b po wypadkowych.<br/>
            <span>2.3.</span> Powi??kszenie kadry lekarzy i piel??gniarek.<br/>
            </p>`;
        case 3:
            return `
            <img class="prog_spec" src="images/program/Ekologia.jpg" alt="zdj??cie">
            <p class="heading">3. Ekologiczna Polska<p/>
            <p class="points">
            <span>3.1.</span> Obj??cie wi??kszych las??w ochron??.<br/>
            <span>3.2.</span> Masowe zasadzenie drzew w miastach, w celu oczyszczenia powietrza.<br/>
            <span>3.3.</span> Otwarcie nowych rezerwat??w przyrody i park??w narodowych.<br/>
            </p>`;
        case 4:
            return `
            <img class="prog_img" src="images/program/edukacja.jpg" alt="zdj??cie">
            <p class="heading">4. Rozw??j Edukacji<p/>
            <p class="points">
            <span>4.1.</span> Rozbudowa szk????.<br/>
            <span>4.2.</span> Reforma programu nauczania - wi??cej praktyki, mniej teorii.<br/>
            <span>4.3.</span> Darmowa nauka na ka??dym etapie nauczania.<br/>
            </p>`;
        case 5:
            return `
            <img class="prog_img" src="images/program/rodzina.jpg" alt="zdj??cie">
            <p class="heading">5. Wsparcie rodzin<p/>
            <p class="points">
            <span>5.1.</span> Pomoc rodzinom w wychowaniu poprzez comiesi??czne ??wiadczenia 
            wychowawcze na ka??de dziecko w rodzinie wysoko??ci 750z?? na dziecko.<br/>
            <span>5.2.</span> Program ???Dziecko+??? wspieraj??cy rozw??j instytucji opieki nad dzie??mi w wieku do lat 3 
            - ????obk??w, klub??w dziec??cych i dziennych opiekun??w.<br/>
            </p>`;
        case 6:
            return `
            <img class="prog_img" src="images/program/turystyka.jpg" alt="zdj??cie">
            <p class="heading">6. Rozw??j turystyki<p/>
            <p class="points">
            <span>6.1.</span> Bony na wakacje w Polsce.<br/>
            <span>6.2.</span> Zagospodarowanie miejscowo??ci z potencja??em turystycznym.<br/>
            </p>`;
        case 7:
            return `
            <img class="prog_img" src="images/program/op??aty.jpg" alt="zdj??cie">
            <p class="heading">7. Mniej op??at<p/>
            <p class="points">
            <span>7.1.</span> Zniesienie op??at za drogi szybkiego ruchu.<br/>
            <span>7.2.</span> Zmniejszenie op??at za wod??, pr??d i gaz. <br/>
            </p>`;
        case 8:
            return `
            <img class="prog_img" src="images/program/polityka_zagraniczna.jpg" alt="zdj??cie">
            <p class="heading">8. Efektywna polityka zagraniczna<p/>
            <p class="points">
            <span>8.1.</span> Rozwini??cie kontakt??w mi??dzy narodowych.<br/>
            <span>8.2.</span> Umocnienie pozycji na arenie mi??dzynarodowej.<br/>
            <span>8.2.</span> ??cis??a wsp????praca z uni?? europejsk??.<br/>
            </p>`;
        case 9:
            return `
            <img class="prog_img" src="images/program/materia??y.jpg" alt="zdj??cie">
            <p class="heading">9. Ta??sze materia??y</p>
            <p class="points">
            <span>9.1.</span> Ceny w??gla oraz drewna zmniejszone o 30%.<br/>
            <span>9.2.</span> Przywr??cenie cen materia????w budowlanych z roku 2021.<br/>
            </p>`;
        case 10:
            return `
            <img class="prog_img" src="images/program/samodzielne_pokolenie.jpg" alt="zdj??cie">
            <p class="heading">10. Wprowadzimy projekt ???samodzielne pokolenie???<p/>
            <p class="points">
            <span>9.1.</span> ??luby urz??dowe mo??liwe od 16 roku ??ycia.<br/>
            <span>9.2.</span> Dofinansowanie na mieszkania dla uczni??w szk???? wy??szych i policealnych.<br/>
            </p>`;
        case "members":                                                                                   //members <<
            return `
            <div class="mem_cont"><img class="member" src="images/members/member1.png" alt="Jan Lenz"></div>
            <div class="mem_cont"><img class="member" src="images/members/member2.png" alt="Filip Gronkowski"></div>
            <div class="mem_cont"><img class="member" src="images/members/member3.png" alt="Maks Dymerski"></div>
            <div class="mem_cont"><img class="member" src="images/members/member4.png" alt="Igor Kopi??ski"></div>
            <div class="mem_cont"><img class="member" src="images/members/member5.png" alt="Fabian Ciemi??ski"></div>`;
    }
}