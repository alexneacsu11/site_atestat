function load_page(url)		// Functions that works turns everything in a link
	{
		document.location.href = url;
	}

function getRandomInt(max) 		// Random integer
	{
  return Math.floor(Math.random() * Math.floor(max));
	}



// Complex function

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var fonts = document.createElement('fonts');
fonts.href = 'https://fonts.googleapis.com/css?family=Black+And+White+Picture';
fonts.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(fonts);


 	var v_th_url = ["t-yQ26KLNOE","B2I82UAWpq0","iOWdrZQsvng","OePsyBsM47Q","H0a0cGFaxRE" , "OK9LCeoMCGM" , "6e2EAnXFrWI","1HbJPP-mPWk", "KYXeiIEMNGc", "KN3gdn0qw2E","VBPQ2hjIZNE","w_bvQBkx2fU","xZiWogjyhgA","L1iGAMnDB1w","8Pwfmn0NPbA" ,"ySOwweVKwOs" ,"Lh0vHTTz_rE","dVGYdSpn06I","DMDpUGdpcZk","qRSsK42XHCM" ,"2L9fF9xCPKI","fuTubOc9oIE","6yVSEvBXpdk","KRexq_5tXJs","LhYWtEQ0yG8","91ZOdWqZe8E" , "fDGlc_hDhDk" , "6Zw5JM4Xm6A" , "AGWY5rxkdHM" , "eOveoHCUmu0" , "MI1IEr2G_MQ" , "_MFIYl7aExM" , "_h3HrIryxwI" , "GFjWc6q3w30" , "MY5VYC3X5Zw" , "oMn2vXs7QP8" , "9wDQwXuADLA" , "88j_qe4Hd4w" , "zLOSM5ZDZe8" , "xKAlicNN3AE" , "X6oclmMpa4Q" , "ZpqPIQp6ObE" , "-J102HDExZw" , "SsFe9r9N9p4" , "UR-1SM0TPGs" , "2KSM4COBg6M" , "pgGi5jQ_E3o" , "b7nWbxZTe0o" , "F5lbYYGSRXk" , "c5LVG-olzSI" , "I6T1s2OdelE"];

	function youtubeth(){ 
	for (var i = 0; i < v_th_url.length ; i++){
	var urlx = "https://i1.ytimg.com/vi/" + v_th_url[i] + "/hqdefault.jpg";
	var id = "imagenb" + i;


 	var x = document.createElement("IMG");
    x.setAttribute("src", urlx);
    x.setAttribute("id" , id)
    // x.setAttribute("width", "304");
    // x.setAttribute("height", "228");
    x.setAttribute("class", "youtubeth")
    x.setAttribute("alt", "The Pulpit Rock");
    x.setAttribute("onMouseOver" , "video_name("+i+")");
    x.setAttribute("onClick" , "video_redirect("+i+")");
    document.getElementById('content_block').appendChild(x);

    	}}

    function video_name(position){
    	var names = ["Minecraft- Stream din greseala","League of Legends- Gradinita joaca LOL","League of Legends - Beemou" , "Skyrim Live #2" , "This war of mine [LIVE]" , "Scairim" , "Turneul lui Tk Tokko - Semifinala si Finala" , "Portal 1 - Sant de-ala de laborator care face ce zice altii" , "Minecraft - The Story of Bear Grill Z", "Dictatura Kaly - minecraft 1.12.2","Kaly joaca Crezul Parcuristului Ucigas - Continuarea","Aventura lui Kaly si a Calugarului gay care se vindeca","Kaly joaca Inside" ,"Operation Flashpoint :[RO] Dragon Rising LIVE","Metin 2 Reborn","LOL de seara [punct]","Creare site muzica pentru atestat #education","Creare site muzica pentru atestat #education","Creare site atestat : Partea 2 [ Rec ]" ,"Creare site atestat : Partea 1 [ Rec ]" ,"AC 1 - Test de calitate 3" , "GTA V - Hand Simulator","AC 1 - #1 Kaly parcuristu'","GTA Online - Joburi peste joburi","Age of Wushu - Aici trebuie sa fie un titlu , cica" , "Painkiller : Joc horror din 2005 ?!?!?" ,"Battelfield 5 | GTX 550 TI | FX 8350 | 8GB RAM | MUST READ DESCRIPTION" , "Battlefield V | NVIDIA GTX 550TI | [RO] [EN]" , "Elder Scrolls Online | Prima Data In Joc | [ RO ]" , "Elder Scrolls Online | Prima Data In Joc | [ RO ]" , "[RO] Spec Ops The line #3 - Pe suicide mode." , "[RO] LIVE - Heroes Of The Storm - #1" , "Spec Ops:The Line - [RO] - Pe Suicide Difficulty #2 Part 2" , "Spec Ops:The Line - [RO] - Pe Suicide Difficulty #2 Part 1" , "Spec Ops:The Line #1 [ 1:00 - 1:12:34 fara sunet la joc ] - Pe Suicide difficulty" , "League of Legends LIVE #1" , "Heroes And Generals |" , "Report My Team , NOOBS", "Malphite carry but nobody cares." , "Yorick Vs Vladimir TOP , I WON" , "Teemo - Best Trick EUNE" , "Teemo JG. \"Honor Teemo\" - Le Blanc" , "Yorick Top - Rank UP to Gold 3" , "LIVE Kaly. LoL and More ( Twitch si Youtube in acelasi timp )" , "XOBXOB" , "CS GO COMBACK EU USELESS" , "REPORT AKALY NOOB CAN't CARRY" , "4vs5 Mundo Part 2 [ Stream Highlight ]" , "4vs5 Mundo Part 1 [ Stream Highlight ]" , "KALY JOACA AKALY" , "NOOB YORICK ENDS THE GAME REP ME PLEASE" , "SONA CHERRY THE GAME" , "BEST RAMMUS EUNE EZ WIN" , "Sunt Main Yasuo Suport"]

    	document.getElementById("show_video_name").innerHTML = "Video Name: " + names[position];

    }
    function video_redirect(position){ var links;

    			var video_url ='https://www.youtube.com/embed/' + v_th_url[position] + '?rel=0&autoplay=0';

    			// video_url = video_url.replace('https://i1.ytimg.com/vi/' , "!");
    			// video_url = video_url.replace('/hqdefault.jpg' , '?rel=0&autoplay=0');
    			// video_url = video_url.replace('!' , 'https://www.youtube.com/embed/');
    			// window.location.href = video_url;
    			document.getElementById('video_player').innerHTML = "<iframe width=\"560\" height=\"315\" src=\""+video_url+"\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
    		
    	
    }

 	