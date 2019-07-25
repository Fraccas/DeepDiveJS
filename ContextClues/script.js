$( document ).ready(function() {

    var friends = ['Brad', 'Bekah', 'Cameron', 'James', 'Lucas'];
    var locations = ['church', 'school', 'boat', 'house', 'car', 'road', 'tree house', 'lake', 'pond', 'store'];
    var weapons = ['gun', 'axe', 'pipe', 'canned beans', 'flare gun', 'knife', 'wand', 'chair',
                    'phone', 'xray', 'spoon', 'hammer', 'fork', 'potato', 'fish', 'pudding', 'shoe',
                    'wallet', 'fire', 'sponge'];

    // create 100 h3s
    for (var i = 0; i < 100; i++) {
        var $h = $("<h3>Accusation " + (i+1) + "</h3>");
        $("body").append($h);

        // without this function, the alert message displays last
        // result no matter where clicked
        // guessing 1-99 is wiped from memory due to var declaration? 
        alertSnapshot($h, i);
    } 

    // snapshot of vars when iterated through loop
    function alertSnapshot($hc, num) { // element, i 
        $hc.click(function() {
            // Accusation i: I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!
            alert("Accusation " + (num+1) + ": I accuse " + friends[num % friends.length] + ", with the " + 
            weapons[num % weapons.length] + " in the " + locations[num % locations.length] + "!");
        });
    }

});