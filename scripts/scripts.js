function load_page(url)		// Functions that works turns everything in a link
	{
		document.location.href = url;
	}

function getRandomInt(max) 		// Random integer
	{
  return Math.floor(Math.random() * Math.floor(max));
	}


// Complex function


 	var v_th_url = ["https://i1.ytimg.com/vi/LhYWtEQ0yG8/hqdefault.jpg","https://i1.ytimg.com/vi/91ZOdWqZe8E/hqdefault.jpg" , "https://i1.ytimg.com/vi/fDGlc_hDhDk/hqdefault.jpg" , "https://i1.ytimg.com/vi/6Zw5JM4Xm6A/hqdefault.jpg" , "https://i1.ytimg.com/vi/AGWY5rxkdHM/hqdefault.jpg" , "https://i1.ytimg.com/vi/eOveoHCUmu0/hqdefault.jpg" , "https://i1.ytimg.com/vi/MI1IEr2G_MQ/hqdefault.jpg" , "https://i1.ytimg.com/vi/_MFIYl7aExM/hqdefault.jpg" , "https://i1.ytimg.com/vi/_h3HrIryxwI/hqdefault.jpg" , "https://i1.ytimg.com/vi/GFjWc6q3w30/hqdefault.jpg" , "https://i1.ytimg.com/vi/MY5VYC3X5Zw/hqdefault.jpg" , "https://i1.ytimg.com/vi/oMn2vXs7QP8/hqdefault.jpg " , "https://i1.ytimg.com/vi/9wDQwXuADLA/hqdefault.jpg" , "https://i1.ytimg.com/vi/88j_qe4Hd4w/hqdefault.jpg" , "https://i1.ytimg.com/vi/zLOSM5ZDZe8/hqdefault.jpg" , "https://i1.ytimg.com/vi/xKAlicNN3AE/hqdefault.jpg" , "https://i1.ytimg.com/vi/X6oclmMpa4Q/hqdefault.jpg" , "https://i1.ytimg.com/vi/ZpqPIQp6ObE/hqdefault.jpg" , "https://i1.ytimg.com/vi/-J102HDExZw/hqdefault.jpg" , "https://i1.ytimg.com/vi/SsFe9r9N9p4/hqdefault.jpg" , "https://i1.ytimg.com/vi/UR-1SM0TPGs/hqdefault.jpg" , "https://i1.ytimg.com/vi/2KSM4COBg6M/hqdefault.jpg" , "https://i1.ytimg.com/vi/pgGi5jQ_E3o/hqdefault.jpg" , "https://i1.ytimg.com/vi/b7nWbxZTe0o/hqdefault.jpg" , "https://i1.ytimg.com/vi/F5lbYYGSRXk/hqdefault.jpg" , "https://i1.ytimg.com/vi/c5LVG-olzSI/hqdefault.jpg" , "https://i1.ytimg.com/vi/I6T1s2OdelE/hqdefault.jpg"];

	function youtubeth(){ 
	for (var i = 0; i < v_th_url.length ; i++){
	var urlx = v_th_url[i];
	var id = "imagenb" + v_th_url[i];


 	var x = document.createElement("IMG");
    x.setAttribute("src", urlx);
    x.setAttribute("id" , id)
    // x.setAttribute("width", "304");
    // x.setAttribute("height", "228");
    x.setAttribute("class", "youtubeth")
    x.setAttribute("alt", "The Pulpit Rock");
    x.setAttribute("onMouseOver" , "video_name("+i+")");
    x.setAttribute("onClick" , "video_redirect("+i+")");
    document.body.appendChild(x);

    	}}

    function video_name(position){
    	var names = ["Age of Wushu - Aici trebuie sa fie un titlu , cica" , "Painkiller : Joc horror din 2005 ?!?!?" ,"Battelfield 5 | GTX 550 TI | FX 8350 | 8GB RAM | MUST READ DESCRIPTION" , "Battlefield V | NVIDIA GTX 550TI | [RO] [EN]" , "Elder Scrolls Online | Prima Data In Joc | [ RO ]" , "Elder Scrolls Online | Prima Data In Joc | [ RO ]" , "[RO] Spec Ops The line #3 - Pe suicide mode." , "[RO] LIVE - Heroes Of The Storm - #1" , "Spec Ops:The Line - [RO] - Pe Suicide Difficulty #2 Part 2" , "Spec Ops:The Line - [RO] - Pe Suicide Difficulty #2 Part 1" , "Spec Ops:The Line #1 [ 1:00 - 1:12:34 fara sunet la joc ] - Pe Suicide difficulty" , "League of Legends LIVE #1" , "Heroes And Generals |" , "Report My Team , NOOBS", "Malphite carry but nobody cares." , "Yorick Vs Vladimir TOP , I WON" , "Teemo - Best Trick EUNE" , "Teemo JG. \"Honor Teemo\" - Le Blanc" , "Yorick Top - Rank UP to Gold 3" , "LIVE Kaly. LoL and More ( Twitch si Youtube in acelasi timp )" , "XOBXOB" , "CS GO COMBACK EU USELESS" , "REPORT AKALY NOOB CAN't CARRY" , "4vs5 Mundo Part 2 [ Stream Highlight ]" , "4vs5 Mundo Part 1 [ Stream Highlight ]" , "KALY JOACA AKALY" , "NOOB YORICK ENDS THE GAME REP ME PLEASE" , "SONA CHERRY THE GAME" , "BEST RAMMUS EUNE EZ WIN" , "Sunt Main Yasuo Suport"]

    	document.getElementById("show_video_name").innerHTML = "Video Name: " + names[position];

    }
    function video_redirect(position){ var links;

    			var video_url = v_th_url[position];
    			video_url = video_url.replace('https://i1.ytimg.com/vi/' , "!");
    			video_url = video_url.replace('/hqdefault.jpg' , '?rel=0&autoplay=0');
    			video_url = video_url.replace('!' , 'https://www.youtube.com/embed/');
    			// window.location.href = video_url;
    			document.getElementById('video_player').innerHTML = "<iframe width=\"560\" height=\"315\" src=\""+video_url+"\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
    		
    	
    }

 	