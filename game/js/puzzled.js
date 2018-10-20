
(function($) {
  let imageDesc = {
    'mars.jpg': {
      'name': 'Mars Near 2016 Opposition',
      'date': 'May 19, 2016',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "Bright, frosty polar caps, and clouds above a vivid, rust-colored landscape reveal Mars as a dynamic seasonal planet in this NASA Hubble Space Telescope view taken on May 12, 2016, when Mars was 50 million miles from Earth. The Hubble image reveals details as small as 20 to 30 miles across.",
      'more': 'http://hubblesite.org/image/3733',
      'theme': 1,
    },
    'saturn.png': {
      'name': 'Saturn Opposition 2018',
      'date': 'Jul 26, 2018',
      'photographer': 'Hubble Space Telescope',
      'supplement': "Saturn is by far the solar system’s most photogenic planet, and in this latest Hubble Space Telescope snapshot it is especially so because Saturn’s magnificent ring system is near its maximum tilt toward Earth (which was in 2017).",
      'more': 'http://hubblesite.org/image/4213',
      'theme': 1,
    },
    'eagle_nebula.png': {
      'name': "Eagle Nebula 'Pillars of Creation'",
      'date': 'Jan 5, 2015',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "To kick off Hubble's 25th year in orbit, astronomers used the venerable telescope to revisit one of its most iconic subjects, the so-called \"Pillars of Creation\" in the Eagle Nebula (M16). Three towers of gas and dust, standing light-years tall, are giving birth to new stars, buried within their dusty spires.",
      'more': 'http://hubblesite.org/image/3862',
      'theme': 1,
    }
  }

  var timerInterval = null;
  var settings = {};

  function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  function setPosition(width, height) {
    var pos = {},
        cont = $('.game');
    pos.top = Math.floor((Math.random() * (cont.height() - height)));
    pos.left = Math.floor((Math.random() * (cont.width() - width)));
    if (pos.top < (settings.image.height)) {
      if (cont.width() > settings.image.width) {
        pos.left = Math.floor((Math.random() * (cont.width() - width - settings.image.width))) + settings.image.width;
      }
      else {
        pos.top = Math.floor(Math.random() * (cont.height() - height - settings.image.height)) + settings.image.height;
      }
    }
    else if (pos.left < (settings.image.width)) {
      if (cont.height() > settings.image.height) {
        pos.top = Math.floor((Math.random() * (cont.height() - height - settings.image.height))) + settings.image.height;
      }
      else {
        pos.left = Math.floor((Math.random() * (cont.width() - width - settings.image.width))) + settings.image.width;
      }
    }
    // console.log(pos.left, pos.top)
    return pos;
  }

  function createDraggable(x, y) {
    var wrp = $('.game'),
    width = settings.image.width/settings.layoutX,
    height = settings.image.height/settings.layoutY,
    pos = setPosition(width, height);
    elem = $('<div />')
      .addClass('puzzle-item')
      .attr('data-x', x)
      .attr('data-y', y)
      .width(width + 'px')
      .height(height + 'px')
      .css({
        'position': 'absolute',
        'top': pos.top,
        'left': pos.left,
        'background-image': 'url(' + settings.imgPath + ')',
        'background-position': settings.image.width/settings.layoutX * x + 'px ' + settings.image.height/settings.layoutY * y + 'px',
        'background-size': settings.image.width + 'px ' + settings.image.height + 'px'
      })
      .draggable({
        cursor: 'move',
        snap: '.puzzle-spot',
        snapMode: 'inner',
        containment: '.game',
        zIndex: 100
      })
      .appendTo(wrp);
  }

  function createDroppable(x, y) {
    $('<div />')
      .addClass('puzzle-spot')
      .attr('data-x', x)
      .attr('data-y', y)
      .width(100/settings.layoutX + '%')
      .height(100/settings.layoutY + '%')
      .appendTo('.puzzle-solution')
      .droppable({
        drop: function(event, ui) {
          var form = $('form#pm-games-game-submit-game'),
          itemX = ui.draggable.attr('data-x'),
          itemY = ui.draggable.attr('data-y');
          if (itemX == $(this).attr('data-x') && itemY == $(this).attr('data-y')) {
            // Drop in place
            ui.draggable
              .offset($(this).offset())
              .draggable("disable")
              .addClass("positioned");
            $(this).droppable( "disable" );
            // Items counter
            $('input[name="completed"]', form).val(function( index, value ) {
              return ++value;
            });
            // Finish the game
            if (ui.draggable.siblings('.puzzle-item').not('.positioned').length == 0) {

              // stop timer, hide level options
              clearInterval(timerInterval)
              $('.levels').css('display', 'none')

              // show photo info
              console.log('puzzle done!', settings.imgPath)
              let pieces = settings.imgPath.split('/')
              let imageKey = pieces[pieces.length-1]
              let imageData = imageDesc[imageKey]
              console.log(imageData)
              let puzzleDone = $('.puzzle-done')
              puzzleDone.find('.obj-name').text(imageData.name)
              puzzleDone.find('.obj-date').text(`Taken on: ${imageData.date}`)
              puzzleDone.find('.obj-taken').text(`Taken by: ${imageData.photographer}`)
              puzzleDone.find('.obj-sup').text(imageData.supplement)
              puzzleDone.find('.obj-more').html(`For more information, please go to <a href="${imageData.more}" target="_blank">${imageData.more}</a>`)
              puzzleDone.css('display', 'inline-block')
              
              $('.puzzle-item').addClass('game-complete');
              $('<span />')
                .text('WELL DONE!')
                .wrap('<div class="well-done" />')
                .parent()
                .appendTo('.puzzle-solution')
                .fadeTo('slow', 1)
                .delay(2000)
                .fadeOut('slow');

            }
          }
        }
      }
    );
  }

  var gameImgFromTmblr = function() {

    // var link = "http://api.tumblr.com/v2/blog/inspirational-images.tumblr.com/posts";
    var blogName = settings.imgPath.replace(/.*?:\/\//g, "").replace(/\/$/, ""),
        link = "http://api.tumblr.com/v2/blog/" + blogName + "/posts";

    $.ajax({
      type: "GET",
      url : link,
      dataType: "jsonp",
      data: {
        api_key: "fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4"
      }
    }).done(function( data ) {

      var posts,
          photos,
          randomImg,
          randomPost;

      posts = data.response.posts.filter(function (post) {
        return post.type == "photo";
      });

      try {
        randomPost = posts[Math.floor(Math.random() * posts.length)];
        randomImg = randomPost.photos[Math.floor(Math.random() * randomPost.photos.length)];
        settings.imgPath = randomImg.original_size.url;
      } catch (error) {
        alert('Could not find an image. Try again.');
      }

      getImageDimensions();

    });

  }

  var getImageDimensions = function() {
    var widthRatio = $(document).width() > 700 ? 0.7 : 1,
        pageHeight = $(document).height() - 120,
        pageWidth = $(document).width() * widthRatio,
        heightRatio = 1,
        widthRatio = 1,
        minRatio = 1;
    $("<img />").attr("src", settings.imgPath).load(function() {
      if (this.height > pageHeight) {
        heightRatio = pageHeight / this.height;
      }
      if (this.width > pageWidth) {
        widthRatio = pageWidth / this.width;
      }
      minRatio = Math.min(heightRatio, widthRatio);
      settings.image = {
        // Allow zooming only if image is smaller then page.
        // width: this.width * (minRatio == 1 ? settings.zoom / 100 : minRatio),
        // height: this.height * (minRatio == 1 ? settings.zoom / 100 : minRatio)
        width: 539,
        height: 539,
      };
      $(document).trigger('puzzled');
    });
  }

  var getGameImage = function(imgPath) {
    var isImg = /\.(jpg|png|gif)$/.test(imgPath) || imgPath.search("http://lorempixel") >= 0;
    var isTmblr = imgPath.search("tumblr.com") >= 0;
    if (isImg) {
      getImageDimensions();
    }
    else if (isTmblr) {
      // http://jsbin.com/sozolajato/1/edit?html,output
      gameImgFromTmblr();
    }
  }

  var changeLevel = function(level) {
    console.log(level)
    let puzzleSize = 3;
    if (level === 'easy') {
      puzzleSize = 3;
    } else if (level === 'medium') {
      puzzleSize = 5;
    } else if (level === 'hard') {
      puzzleSize = 7;
    }
    if (settings.layoutX === puzzleSize.toString()) {
      console.log('same puzzle size')
      return
    }
    // change puzzle size
    settings.layoutX = puzzleSize
    settings.layoutY = puzzleSize

    setGame()
  }

  var next = function () {
    parent.postMessage({'command': 'next', 'value': settings.theme})
  }

  var replay = function() {
    parent.postMessage({'command': 'reload'})
  }

  var menu = function() {
    parent.postMessage({'command': 'menu'})
  }

  window.changeLevel = changeLevel;
  window.next = next;
  window.replay = replay
  window.menu = menu

  var puzzled = function(options) {
    console.log('puzzled')
    // Set up defaults
    var defaults = {
      layoutX: getParameterByName('x') || 5,
      layoutY: getParameterByName('y') || 5,
      zoom: getParameterByName('zoom') || 100,
      imgPath: getParameterByName('img') || 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-h-p1821a-m-1699x2000.png',
      theme: getParameterByName('theme') || 1,
    };

    // Overwrite default options with user provided ones.
    settings = $.extend({}, defaults, options);

    // load ready image
    $('.ready img').attr('src', settings.imgPath)
    $('.ready').show()

    let cnt = 0;
    let countdown = 5;
    let interval = setInterval(function() {
      $('.ready .ready-text').text("")
      if (countdown > cnt) {
        $('.ready .text').text(countdown - cnt)
      }
      if (countdown === cnt) {
        $('.ready .text').text("Let's Go!")
      }
      cnt += 1
      if (cnt === countdown + 2) {
        clearInterval(interval)
        $('.ready').fadeOut('slow', function() {
          setGame()
        })
      }
    }, 1000)
  }();

  function toHHMMSS(sec_num) {
      var hours   = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return hours+':'+minutes+':'+seconds;
  }

  function setGame() {

    clearInterval(timerInterval)
    $('.timer').text(toHHMMSS(0))
    let sec = 0
    timerInterval = setInterval(function() {
      sec += 1
      $('.timer').text(toHHMMSS(sec))
    }, 1000)

    getGameImage(settings.imgPath);

    $(document).bind('puzzled', function() {

      $('.puzzle-solution').remove()
      $('.puzzle-item').remove()
      $('.game-control').css('display', 'flex')

      $('<div />')
        .addClass('puzzle-solution')
        .width(settings.image.width)
        .height(settings.image.height)
        .prependTo($('.game'));

      for (var y = settings.layoutY; y > 0; y--) {
        for (var x = settings.layoutX; x > 0; x--) {
          createDroppable(x, y);
          createDraggable(x, y);
        }
      }
    });
  }

})(jQuery);
