This overlay was made by Slumware(#9370) and modifed by Noah Hicks.
The team icoms are in the icons folder.
	The blue team icon is called team1.png and the orange team is called team2.png
The overlay only displays .pngs
The game overlay background and the endcard background are both in assets
	The game overlay background does not include the player information at the bottom of the overlay
To disable the active player cards, turn the greater than sign to a less than sign on line 300 of logic.js    if (activeTarget.length > 1) {
To disable the end stat card, comment out line 123 of logic.js    document.getElementById("end-stats").setAttribute("style", "display:block");
The "best of 7" box is a text box so it can be changed on the page or you can change the default text on line 316 of overlay.html      <textarea class="display-5" id="series">Best of 7</textarea>
The black marks turn to their team's colors when clicked
Whan the overlay is refreshed everything will return to it's default state
lots of code in the css file and the html file isn't used anymore so make sure you're always modifing the right thing.
