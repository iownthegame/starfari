(function($) {
  function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  var app = function() {
    console.log("hey")
    // Set up defaults
    var src,
        defaults = {
          imgPath: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-h-p1821a-m-1699x2000.png',
          layoutX: 3,
          layoutY: 3,
          zoom: 100,
          theme: 1,
        },
        opt = {
          imgPath: getParameterByName('img') || defaults.imgPath,
          layoutX: getParameterByName('x') || defaults.layoutX,
          layoutY: getParameterByName('y') || defaults.layoutY,
          zoom: getParameterByName('zoom') || defaults.zoom,
          theme: getParameterByName('theme') || defaults.theme
        };

    var typewatch = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      }
    })();

    var updateGameSrc = function() {
      console.log('updateGameSrc')
      $('#game').fadeTo('fast', 0, function() {
        console.log('fadeTo')
        // opt.imgPath = $('#img').val();
        // opt.layoutX = $('#layoutx').val();
        // opt.layoutY = $('#layouty').val();
        // opt.zoom = $('#zoom').val();
        setGameAttr();
      })
    }

    var setGameAttr = function() {
      var attr = '';
      if (opt.imgPath != defaults.imgPath) {
        attr += 'img=' + opt.imgPath;
      }
      // if (opt.layoutX != defaults.layoutX) {
        if (attr) attr += '&';
        attr += 'x=' + opt.layoutX;
      // }
      // if (opt.layoutY != defaults.layoutY) {
        if (attr) attr += '&';
        attr += 'y=' + opt.layoutY;
      // }
      if (opt.zoom != defaults.zoom) {
        if (attr) attr += '&';
        attr += 'zoom=' + opt.zoom;
      }
      if (attr) attr += '&';
      attr += 'theme=' + opt.theme;
      if (attr) attr = '?' + attr;
      console.log('setGameAttr', attr)
      runGame(attr);
    }

    var runGame = function(attr) {
      // $('#share').val(attr);
      // window.history.pushState(null, null, window.location.protocol + "//" + window.location.host + window.location.pathname + attr);
      $('#game')
        .attr('src', 'game/' + attr)
        .load(function() {
          $(this).fadeTo('slow', 1);
        });
    }

    var setGameDefaults = function() {
      console.log('setGameDefaults')
      console.log(opt)
      if (!$('#img').val()) {
        $('#img').val(opt.imgPath);
      }
      if (!$('#layoutx').val()) {
        $('#layoutx').val(opt.layoutX);
      }
      if (!$('#layouty').val()) {
        $('#layouty').val(opt.layoutY);
      }
      if (!$('#zoom').val()) {
        $('#zoom').val(opt.zoom);
      }
    }

    // Form listeners
    $('form input#img').keyup(function () {
      if (this.value != opt.imgPath) {
        typewatch(function () {
          // executed only 500 ms after the last keyup event.
          updateGameSrc();
        }, 500);
      }
    });

    $('form input[type="number"]').change(function () {
      typewatch(function () {
        updateGameSrc();
      }, 500);
    });

    $('span.rand, .title').mouseup(function () {
      typewatch(function () {
        updateGameSrc();
      }, 500);
    });

    setGameDefaults()
    updateGameSrc();

    // Auto select
    $('input[type="text"]').mouseup(function() {
      if (this.selectionStart == this.selectionEnd) {
        this.setSelectionRange(0, this.value.length);
      }
    });

    // Toggles
    $('.mobile-toggle').click(function(e) {
      e.preventDefault();
      $('.mobile-collpase').toggleClass('visible');
    });

    $('.share-toggle').click(function(e) {
      e.preventDefault();
      $('.share').toggleClass('visible');
    });

    $(window).load(function() {
      $('body').addClass('loaded');
    });

  }();

  window.addEventListener("message", receiveMessage, false);
  function receiveMessage(event)
  {
    // console.log('receive', event)
    let command = event.data.command;
    if (command === 'menu') {
      window.location = '/menu'
    }
    if (command === 'reload') {
      window.location.reload();
    }
    if (command === 'next') {
      let value = event.data.value;
      console.log('next', value)
      playTheme(value)
    }
  }

})(jQuery);

// // Async Sharing Buttons (Facebook, Twitter)
// // http://css-tricks.com/snippets/javascript/async-sharing-buttons-g-facebook-twitter/
// (function(doc, script) {
//   var js,
//       fjs = doc.getElementsByTagName(script)[0],
//       frag = doc.createDocumentFragment(),
//       add = function(url, id) {
//           if (doc.getElementById(id)) {return;}
//           js = doc.createElement(script);
//           js.src = url;
//           id && (js.id = id);
//           frag.appendChild( js );
//       };

//     // Facebook SDK
//     add('//connect.facebook.net/en_US/all.js#xfbml=1&appId=200103733347528', 'facebook-jssdk');
//     // Twitter SDK
//     add('//platform.twitter.com/widgets.js');

//     fjs.parentNode.insertBefore(frag, fjs);
// }(document, 'script'));
