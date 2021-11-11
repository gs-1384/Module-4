(function (window) {    
    var names = ["GANESH", "SONI"];

    for (var i in names) {
      var firstLetter = ((names[i]).charAt(0)).toLowerCase();

      if (firstLetter == 'g') {
         window.helloSpeaker.speak(names[i]);
      } else {
         window.byeSpeaker.speak(names[i]);
      }
    }
    })(window);