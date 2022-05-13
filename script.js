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
            <img class="prog_img" src="images/program/gospodarka.jpg" alt="zdjęcie">
            <p class="heading">1. Rozwój gospodarki<p/>
            <p class="points">
            <span>1.1.</span> Więcej miejsc pracy.<br/>
            <span>1.2.</span> Rozbudowa gospodarstw rolnych – dofinansowania dla rolników.<br/>
            <span>1.3.</span> Rozwój nowoczesnych technologii.<br/>
            <span>1.4.</span> Budowa fabryk, marketów itp.<br/>
            </p>`;
        case 2:
            return `
            <img class="prog_img" src="images/program/służba_zdrowia.jpg" alt="zdjęcie">
            <p class="heading">2. Lepsza służba zdrowia<p/>
            <p class="points">
            <span>2.1.</span> Wprowadzenie bezpłatnych badań kontrolnych dla osób powyżej 50 roku życia.<br/>
            <span>2.2.</span> Pokrywanie kosztów rehabilitacji osób po wypadkowych.<br/>
            <span>2.3.</span> Powiększenie kadry lekarzy i pielęgniarek.<br/>
            </p>`;
        case 3:
            return `
            <img class="prog_img" src="images/program/Ekologia.jpg" alt="zdjęcie">
            <p class="heading">3. Ekologiczna Polska<p/>
            <p class="points">
            <span>3.1.</span> Objęcie większych lasów ochroną.<br/>
            <span>3.2.</span> Masowe zasadzenie drzew w miastach, w celu oczyszczenia powietrza.<br/>
            <span>3.3.</span> Otwarcie nowych rezerwatów przyrody i parków narodowych.<br/>
            </p>`;
        case 4:
            return `
            <img class="prog_img" src="images/program/edukacja.jpg" alt="zdjęcie">
            <p class="heading">4. Rozwój Edukacji<p/>
            <p class="points">
            <span>4.1.</span> Rozbudowa szkół.<br/>
            <span>4.2.</span> Reforma programu nauczania - więcej praktyki, mniej teorii.<br/>
            <span>4.3.</span> Darmowa nauka na każdym etapie nauczania.<br/>
            </p>`;
        case 5:
            return `
            <img class="prog_img" src="images/program/rodzina.jpg" alt="zdjęcie">
            <p class="heading">5. Wsparcie rodzin<p/>
            <p class="points">
            <span>5.1.</span> Pomoc rodzinom w wychowaniu poprzez comiesięczne świadczenia 
            wychowawcze na każde dziecko w rodzinie wysokości 750zł na dziecko.<br/>
            <span>5.2.</span> Program “Dziecko+” wspierający rozwój instytucji opieki nad dziećmi w wieku do lat 3 
            - żłobków, klubów dziecęcych i dziennych opiekunów.<br/>
            </p>`;
        case 6:
            return `
            <img class="prog_img" src="images/program/turystyka.jpg" alt="zdjęcie">
            <p class="heading">6. Rozwój turystyki<p/>
            <p class="points">
            <span>6.1.</span> Bony na wakacje w Polsce.<br/>
            <span>6.2.</span> Zagospodarowanie miejscowości z potencjałem turystycznym.<br/>
            </p>`;
        case 7:
            return `
            <img class="prog_img" src="images/program/opłaty.jpg" alt="zdjęcie">
            <p class="heading">7. Mniej opłat<p/>
            <p class="points">
            <span>7.1.</span> Zniesienie opłat za drogi szybkiego ruchu.<br/>
            <span>7.2.</span> Zmniejszenie opłat za wodę, prąd i gaz. <br/>
            </p>`;
        case 8:
            return `
            <img class="prog_img" src="images/program/polityka_zagraniczna.jpg" alt="zdjęcie">
            <p class="heading">8. Efektywna polityka zagraniczna<p/>
            <p class="points">
            <span>8.1.</span> Rozwinięcie kontaktów między narodowych.<br/>
            <span>8.2.</span> Umocnienie pozycji na arenie międzynarodowej.<br/>
            <span>8.2.</span> Ścisła współpraca z unią europejską.<br/>
            </p>`;
        case 9:
            return `
            <img class="prog_img" src="images/program/materiały.jpg" alt="zdjęcie">
            <p class="heading">9. Tańsze materiały</p>
            <p class="points">
            <span>9.1.</span> Ceny węgla oraz drewna zmniejszone o 30%.<br/>
            <span>9.2.</span> Przywrócenie cen materiałów budowlanych z roku 2021.<br/>
            </p>`;
        case 10:
            return `
            <img class="prog_img" src="images/program/samodzielne_pokolenie.jpg" alt="zdjęcie">
            <p class="heading">10. Wprowadzimy projekt “samodzielne pokolenie”<p/>
            <p class="points">
            <span>9.1.</span> Śluby urzędowe możliwe od 16 roku życia.<br/>
            <span>9.2.</span> Dofinansowanie na mieszkania dla uczniów szkół wyższych i policealnych.<br/>
            </p>`;
        case "members":                                                                                   //members <<
            return `
            <div class="mem_cont"><img class="member" src="images/members/member1.png" alt="Jan Lenz"></div>
            <div class="mem_cont"><img class="member" src="images/members/member2.png" alt="Filip Gronkowski"></div>
            <div class="mem_cont"><img class="member" src="images/members/member3.png" alt="Maks Dymerski"></div>
            <div class="mem_cont"><img class="member" src="images/members/member4.png" alt="Igor Kopiński"></div>
            <div class="mem_cont"><img class="member" src="images/members/member5.png" alt="Fabian Ciemiński"></div>`;
    }
}