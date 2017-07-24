document.addEventListener('DOMContentLoaded', function(){
  var numberOfLetters = 12;
  var charArray = [
    {
      character: 'A',
      image: ['images/apple.png']
    },
    {
      character: 'B',
      image: ['images/boat.png']
    },
    {
      character: 'C',
      image: ['images/cat.png']
    },
    {
      character: 'D',
      image: ['images/dog.png']
    },
    {
      character: 'E',
      image: ['images/elephant.png']
    },
    {
      character: 'F',
      image: ['images/fish.png']
    },
    {
      character: 'G',
      image: ['images/giraffe.png']
    },
    {
      character: 'H',
      image: ['images/horse.png']
    },
    {
      character: 'I',
      image: ['images/iguana.png']
    },
    {
      character: 'J',
      image: ['images/jaguar.png']
    },
    {
      character: 'K',
      image: ['images/kite.png']
    },
    {
      character: 'L',
      image: ['images/lion.png']
    },
    {
      character: 'M',
      image: ['images/monkey.png']
    },
    {
      character: 'N',
      image: ['images/nest.png']
    },
    {
      character: 'O',
      image: ['images/octopus.png']
    },
    {
      character: 'P',
      image: ['images/panda.png']
    },
    {
      character: 'Q',
      image: ['images/queen.png']
    },
    {
      character: 'R',
      image: ['images/rainbow.png']
    },
    {
      character: 'S',
      image: ['images/sandcastle.png']
    },
    {
      character: 'T',
      image: ['images/tiger.png']
    },
    {
      character: 'U',
      image: ['images/umbrella.png']
    },
    {
      character: 'V',
      image: ['images/violet.png']
    },
    {
      character: 'W',
      image: ['images/walrus.png']
    },
    {
      character: 'X',
      image: ['images/xylophone.png']
    },
    {
      character: 'Y',
      image: ['images/yarn.png']
    },
    {
      character: 'Z',
      image: ['images/zebra.png']
    }
  ];

  var audio = document.getElementById('audio');
  var nextBlock = $('.empty:first-of-type');
  var victoryVid = document.getElementById('victory-vid');
  var victoryMusic = document.getElementById('victory-music');

  var randomIndex = function(num) {
    return Math.floor(Math.random() * num);
  };
  var randomCharacter = charArray[randomIndex(numberOfLetters)];

  var victoryVidArray = [
    {
      name: 'Dancing Air Guy',
      source: 'video/dancing-air-guy.mp4'
    },
    {
      name: 'Dancing Cactus',
      source: 'video/dancing-cactus.mp4'
    },
    {
      name: 'Dancing Cat',
      source: 'video/dancing-cat.mp4'
    },
    {
      name: 'Dancing Olaf',
      source: 'video/dancing-olaf.mp4'
    },
    {
      name: 'Dancing Pears',
      source: 'video/dancing-pears.mp4'
    },
    {
      name: 'Dancing Penguin',
      source: 'video/dancing-penguin.mp4'
    },
    {
      name: 'Dancing Trumpet Player',
      source: 'video/dancing-trumpet-player.mp4'
    },
    {
      name: 'Dancing Unicorn',
      source: 'video/dancing-unicorn.mp4'
    }
  ];

  var victoryVidSource = victoryVidArray[randomIndex(victoryVidArray.length)].source;

  var rightAnswer = function() {
    var randomCharacter = charArray[randomIndex(numberOfLetters)];

    audio.pause();
    audio.load();
    audio.play();
    $(nextBlock).removeClass('empty');
    nextBlock = $(nextBlock).next();

    $('html').toggleClass('new-color');
    $('#image').attr('src', randomCharacter.image[randomIndex(randomCharacter.image.length)]);
    $('#character').html(randomCharacter.character);
  };

  var roundComplete = function(){
    $('html').css('background', '#FFFDFF');
    $('#character').hide();
    $('#image').hide();
    $('.progress-bar').hide();
    $('video').show();
    victoryVid.play();
    victoryMusic.play();
    $('#retry').show();
  };

  $('#character').html(randomCharacter.character);
  $('#image').attr('src', randomCharacter.image[randomIndex(randomCharacter.image.length)]);
  $('#victory-vid-src').attr('src', victoryVidSource);
  $('video').html("<source src='" + victoryVidSource + "' type='video/mp4' id='victory-vid-src'/>")
  $('#victory-vid').hide();

  $(document).keypress(function(e){
    var letter = $('#character').text();
    var lowerCase = letter.toLowerCase();
    var keyCode = letter.charCodeAt();
    var lowerCaseKeyCode = lowerCase.charCodeAt();
    var countdown = $('.empty').length;

    if((e.which === keyCode || e.which === lowerCaseKeyCode) && countdown > 1) {
      rightAnswer();
    } else if ((e.which === keyCode || e.which === lowerCaseKeyCode) && countdown === 1) {
      rightAnswer();
      roundComplete();
      $('#retry').on('click', function() {
        location.reload();
      })
    };
  });
});
