function isLetter(c) {
    if (c.length != 1 || c == '_' || c == '$')
        return false;
    if (c.toUpperCase() != c.toLowerCase())
        return true; // Speed up accepting latin letters
    if (c.charCodeAt(0) < 128)
        return false; // Speed up rejecting non-letter ASCII characters
    try {
        eval("function " + c + "(){}");
        return true;
    } catch {
        return false;
    }
}

function generateRandom(min = 0, max = 100) {
        // find diff
        let difference = max - min;

        // generate random number 
        let rand = Math.random();

        // multiply with difference 
        rand = Math.floor( rand * difference);

        // add with min value 
        rand = rand + min;

        return rand;
}
    
    function mysplit(theword){    
        var newsplitedword = theword.split('').map(function (value) {
                     return value.trim();
                });
     return newsplitedword;
    }
    
    
    function guardar(){ 
           var newword = document.getElementById("textaddword").value;  
           var cleannewword = newword.replace(/\s|[0-9_]|\W|[#$%^&*()]/g, "");
           palabras.push(cleannewword.toUpperCase().trim());    
           console.log(palabras);
           startGame();
           document.getElementById("textaddword").value =" Ingrese una palabra"; 
        }
    
    function showStart(showlist){ 
         for (i = 0;i < showlist.length; i++){
             document.getElementById(showlist[i]).style.display = "block";          
     }
    }
    
       function hideStart(hidelist){ 
            for (i = 0;i < hidelist.length; i++){
                document.getElementById(hidelist[i]).style.display = "none";               
    }
    
    }
 
    function addword(){ 
        hideStart(startscreen);    
        hideGame();
        hideStart(gameset);
        hideStart(gameletters);
        hideStart(textgame);
        showStart(addwordscreen);
    }
    
    function startGame(){ 
        hideGame();  
        hideStart(startscreen);
        hideStart(addwordscreen);
        hideStart(gameletters);
        hideStart(textgame);
        initgame(); 
   
        rnum = generateRandom(0, palabras.length - 1);
        var myword = palabras[rnum];
        
        play(myword);
        
        var showletters = gameletters.slice(0, myword.length);
        var showtextgame = textgame.slice(0,myword.length);
        showStart(showtextgame);
        showStart(showletters);
        showStart(gameset);
        showStart(textgamescore);
    }
    
     function initscreen(){ 
        hideStart(addwordscreen);
        hideGame();
        hideStart(gameset);
        hideStart(gameletters);
        hideStart(textgame);
        initgame();
        showStart(startscreen);
        boolstartgame = "False";
    }
    
    
    function hideGame(){
        var gamestop = 11
        for(i = 1;i < gamestop; i++){
            document.getElementById('p' + i).style.display = "none";      
        }
}
    
        function showGame(idx){
            document.getElementById("p" + idx).style.display = "block";
}
    
    function initgame(){
        var initlist =  8;
        
            for (i = 1;i <= initlist; i++){
                document.getElementById("text" + i).value = "";                    
     }
         
    }
    
    
     function play(myletters){
       
        var myword = mysplit(myletters);     
        var result = [];
        var otherletters = [];
        var stopgame = 9;
        boolstartgame = "True";
        
        document.getElementById("text10").value = "Play";
        document.getElementById("text9").value = "";
         
        document.addEventListener('keydown', function(event){
       
        if(boolstartgame == "True"){
                       
            var letter = String.fromCharCode(event.keyCode);
            var idx = myword.indexOf(letter);
            var indices = [];

            while (idx !== -1) {
              indices.push(idx);
              idx = myword.indexOf(letter, idx + 1);       
        }
        
       if(isLetter(letter) && !result.includes(letter) && myword.includes(letter) && otherletters.length < stopgame && result.length < myword.length){
           for(i=0; i < indices.length; i++){
                document.getElementById("text" + (1 + indices[i])).value = letter;
                result.push(letter);     
           }
           if(result.length === myword.length){      
               document.getElementById("text10").value = "Winner";
           }           
    }
        
        if(isLetter(letter) &&!otherletters.includes(letter) && !myword.includes(letter) && otherletters.length < stopgame && result.length < myword.length){
                otherletters.push(letter);
                showidx = otherletters.length;
                if(showidx >= 4){
                  showGame(showidx);
                  showGame(showidx + 1);
                 }
                else{
                    showGame(showidx);
                }
                document.getElementById("text9").value += " " + letter;
                 
                 if(otherletters.length == stopgame){
                    document.getElementById("text10").value = "Loser";
                 }
             }
            }          
} );
   
    }
    
    var btnstartend =  ['btnstart','btnaddword'];
    var gameset =  ['pbase','text10','btnplay','btnend'];
    var gameletters =  ['pl1','pl2','pl3','pl4','pl5','pl6','pl7','pl8'];
    var textgame = ['text1','text2','text3','text4','text5','text6','text7','text8','text9','text10'];
    var textgamescore = ['text9','text10'];
    
    var boolstartgame = "False";
    var gamescreen =  ['gamescreen'];
    var startscreen =  ['startscreen'];
    var addwordscreen =  ['addwordscreen'];
    var palabras = [];
    var palabra = 'ALURA';
        palabras.push(palabra);
        palabras.push('HOLA');
        palabras.push('HEY');
        palabras.push('HELLO');
     
    hideGame();
    hideStart(gameset);
    hideStart(gameletters);
    hideStart(textgame);
    hideStart(addwordscreen);
    initgame();
