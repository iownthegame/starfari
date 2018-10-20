
(function($) {
  let imageDesc = {
    // 'mars.jpg': {
    //   'name': 'Mars Near 2016 Opposition',
    //   'date': 'May 12, 2016',
    //   'photographer': 'NASA Hubble Space Telescope',
    //   'supplement': "Bright, frosty polar caps, and clouds above a vivid, rust-colored landscape reveal Mars as a dynamic seasonal planet in this NASA Hubble Space Telescope view taken on May 12, 2016, when Mars was 50 million miles from Earth. The Hubble image reveals details as small as 20 to 30 miles across.",
    //   'more': 'http://hubblesite.org/image/3733',
    //   'theme': 1,
    // },
    'mars2.jpg': {
      'name': "Hubble's Closest View of Mars",
      'date': 'August 27, 2003',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "This sharp, natural-color view of Mars reveals several prominent Martian features, including the largest volcano in the solar system, Olympus Mons; a system of canyons called Valles Marineris; an immense dark marking called Solis Lacus; and the southern polar ice cap.",
      'more': 'http://hubblesite.org/image/3733',
      'theme': 1,
    },
    'saturn.png': {
      'name': 'Saturn Opposition',
      'date': 'June 6, 2018',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "Saturn is by far the solar system’s most photogenic planet, and in this latest Hubble Space Telescope snapshot it is especially so because Saturn’s magnificent ring system is near its maximum tilt toward Earth (which was in 2017).",
      'more': 'http://hubblesite.org/image/4213',
      'theme': 1,
    },
    'black_hole.png': {
      'name': 'Black Hole in NGC 1600',
      'date': 'Apr 6, 2016',
      'photographer': 'Computer Simulated',
      'supplement': "The black region in the center represents the black hole's event horizon, where no light can escape the massive object's gravitational grip. The black hole's powerful gravity distorts space around it like a funhouse mirror. Light from background stars is stretched and smeared as the as the starlight skims by the black hole.",
      'more': 'http://hubblesite.org/image/3720',
      'theme': 1,
    },
    'earth.jpg': {
      'name': 'Earth',
      'date': 'December 7, 1972',
      'photographer': 'Apollo 17',
      'supplement': "View of the Earth as seen by the Apollo 17 crew traveling toward the moon. This translunar coast photograph extends from the Mediterranean Sea area to the Antarctica south polar ice cap. This is the first time the Apollo trajectory made it possible to photograph the south polar ice cap. Note the heavy cloud cover in the Southern Hemisphere. Almost the entire coastline of Africa is clearly visible. The Arabian Peninsula can be seen at the northeastern edge of Africa. The large island off the east coast of Africa is the Republic of Madagascar. The Asian mainland is on the horizon toward the northeast.",
      'more': 'https://eol.jsc.nasa.gov/SearchPhotos/photo.pl?mission=AS17&roll=148&frame=22727',
      'theme': 1,
    },
    'hat.png': {
      'name': "Artist's Illustration of Exoplanet HAT-P-11b",
      'date': 'Sep 24, 2014',
      'photographer': '',
      'supplement': "A Neptune-size planet with a clear atmosphere is shown crossing in front of its star in this artist's depiction. Such crossings, or transits, are observed by telescopes like NASA's Hubble and Spitzer to glean information about planets' atmospheres. As starlight passes through a planet's atmosphere, atoms and molecules absorb light at certain wavelengths, blocking it from the telescope's view. The more light a planet blocks, the larger the planet appears. By analyzing the amount of light blocked by the planet at different wavelengths, researchers can determine which molecules make up the atmosphere.",
      'more': 'http://hubblesite.org/image/3430',
      'theme': 1,
    },
    'hr8799b.png': {
      'name': "Artist's Concept of Exoplanet HR 8799b",
      'date': 'Apr 1, 2009',
      'photographer': 'Artist G. Bacon',
      'supplement': "The planet was first discovered in 2007 at the Gemini North observatory. It was identified in the NICMOS archival data in a follow-up search of NICMOS archival data to see if Hubble had also serendipitously imaged it. The planet is young and hot, at a temperature of 1500 degrees Fahrenheit. It is slightly larger than Jupiter and may be at least seven times more massive.",
      'more': 'http://hubblesite.org/image/2526',
      'theme': 1,
    },
    'lagoon_nebula_nvlc.png': {
        'name': 'Lagoon Nebula (Infrared-light View)',
        'date': 'Feb. 12 - Feb. 18, 2018',
        'photographer': 'NASA Hubble Space Telescope',
        'supplement': "The most obvious difference between Hubble’s infrared and visible photos of this region is the abundance of stars that fill the infrared field of view. Most of them are more distant, background stars located behind the nebula itself. However, some of these pinpricks of light are young stars within the Lagoon Nebula. The brilliant star near the center of the frame, known as Herschel 36, is about 200,000 times brighter than our Sun.",
        'more': 'http://hubblesite.org/image/4151',
        'theme': 3,
      },
    'horsehead_nebula.png': {
      'name': 'Horsehead Nebula in Infrared',
      'date': 'Apr 8, 2014',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "The Horsehead Nebula, shadowy in optical light, appears transparent and ethereal when seen here at infrared wavelengths. This pillar of tenuous hydrogen gas laced with dust is resisting being eroded away by the radiation from a nearby star. The nebula is a small part of a vast star-forming complex in the constellation Orion. The Horsehead will disintegrate in about 5 million years.",
      'more': 'http://hubblesite.org/image/3844',
      'theme': 2,
    },
    'uranus.jpg': {
      'name': 'Bright Clouds on Uranus',
      'date': 'Oct 14, 1998',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "Hubble recently found about 20 clouds - nearly as many clouds on Uranus as the previous total in the history of modern observations. The orange-colored clouds near the prominent bright band circle the planet at more than 300 mph (500 km/h), according to team member Heidi Hammel (MIT). One of the clouds on the right-hand side is brighter than any other cloud ever seen on Uranus.",
      'more': 'http://hubblesite.org/image/719',
      'theme': 2,
    },
    'crab_nebula_if.png': {
      'name': 'Crab Nebula in Infrared',
      'date': 'May 10, 2017',
      'photographer': 'Spitzer Space Telescope',
      'supplement': "The infrared image includes the glow of dust particles absorbing ultraviolet and visible light, and re-radiating at lower energies (longer wavelengths) in the infrared. The Crab Nebula, the result of a supernova explosion seen by Chinese and other astronomers in the year 1054, is 6,500 light-years from Earth.",
      'more': 'http://hubblesite.org/image/4028',
      'theme': 2,
    },
    'crab_nebula_uv.png': {
      'name': 'Crab Nebula in Ultraviolet',
      'date': 'May 10, 2017',
      'photographer': 'XMM-Newton',
      'supplement': "An energetic cloud of electrons driven by a rapidly rotating neutron star, or pulsar, at its core glows brightly in ultraviolet radiation and X-rays. The neutron star’s fierce \"wind\" of charged particles energized the nebula, causing it to emit the radio waves. In this color scheme used for this set of images the background stars appear blue because they have the strongest signal in the ultraviolet-light exposure.",
      'more': 'http://hubblesite.org/image/4028',
      'theme': 2,
    },
    'ngc3310.png': {
      'name': "Hubble's Ultraviolet Views of Nearby Galaxies Yield Clues to Early Universe",
      'date': 'Sept. 12-13, 2000',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "The central region of the \"star-burst\" spiral galaxy at far left, NGC 3310, shows young and old stars evenly distributed. If this were the case with most galaxies, astronomers would be able to recognize faraway galaxies fairly easily. In most galaxies, however, the stars are segregated by age, making classifying the distant ones more difficult. NGC 3310 is 46 million light-years from Earth in the constellation Ursa Major. The image was taken Sept. 12-13, 2000.",
      'more': 'http://hubblesite.org/image/1016',
      'theme': 2,
    },
    'eagle_nebula.png': {
      'name': "Eagle Nebula 'Pillars of Creation'",
      'date': 'Jan 5, 2015',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "To kick off Hubble's 25th year in orbit, astronomers used the venerable telescope to revisit one of its most iconic subjects, the so-called \"Pillars of Creation\" in the Eagle Nebula (M16). Three towers of gas and dust, standing light-years tall, are giving birth to new stars, buried within their dusty spires.",
      'more': 'http://hubblesite.org/image/3862',
      'theme': 3,
    },
    'europa_plume.png': {
      'name': "Plume Erupting From Europa",
      'date': 'February 22, 2016',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "",
      'more': 'http://hubblesite.org/image/4018',
      'theme': 3,
    },
    'm51.png': {
      'name': 'Out of This Whirl: the Whirlpool Galaxy (M51) and Companion Galaxy',
      'date': 'January 2005',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "The graceful, winding arms of the majestic spiral galaxy M51 (NGC 5194) appear like a grand spiral staircase sweeping through space. They are actually long lanes of stars and gas laced with dust.",
      'more': 'http://hubblesite.org/image/1677',
      'theme': 3,
    },
    'lagoon_nebula_vlc.png': {
      'name': 'Lagoon Nebula (Visible-light View)',
      'date': 'Feb. 12 - Feb. 18, 2018',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "At the center of the photo, a monster young star 200,000 times brighter than our Sun is blasting powerful ultraviolet radiation and hurricane-like stellar winds, carving out a fantasy landscape of ridges, cavities, and mountains of gas and dust.",
      'more': 'http://hubblesite.org/image/4150',
      'theme': 3,
    },
    'bubble_nebula.png': {
      'name': 'Bubble Nebula (NGC 7635)',
      'date': 'February 2016',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "The Bubble Nebula is 7 light-years across – about one-and-a-half times the distance from our sun to its nearest stellar neighbor, Alpha Centauri – and resides 7,100 light-years from Earth in the constellation Cassiopeia.",
      'more': 'http://hubblesite.org/image/3725',
      'theme': 3,
    },
    'jupiter_aurora.jpg': {
      'name': 'Auroras on Jupiter',
      'date': 'Jun 30, 2016',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "Auroras are formed when charged particles in the space surrounding the planet are accelerated to high energies along the planet's magnetic field. When the particles hit the atmosphere near the magnetic poles, they cause it to glow like gases in a fluorescent light fixture. Jupiter's magnetosphere is 20,000 times stronger than Earth's. These observations will reveal how the solar system's largest and most powerful magnetosphere behaves.",
      'more': 'http://hubblesite.org/image/3756',
      'theme': 3,
    },
    'lmc.png': {
      'name': 'Generations of Star Formation in the Large Magellanic Cloud',
      'date': 'Jul 1, 2004',
      'photographer': 'NASA Hubble Space Telescope',
      'supplement': "The image illustrates a perfect case of sequential star formation in a nearby galaxy where new star birth is being triggered by previous-generation massive stars. A collection of blue- and white-colored stars near the left of the image are among the most massive stars known anywhere in the universe. The region around the cluster of hot stars in the image is relatively clear of gas, because the stellar winds and radiation from the stars have pushed the gas away. When this gas collides with and compresses surrounding dense clouds, the clouds can collapse under their own gravity and start to form new stars. The cluster of new stars in N11B may have been formed this way, as it is located on the rim of the large, central interstellar bubble of the N11 complex. The stars in N11B are now beginning to clear away their natal cloud, and are carving new bubbles in turn. Yet another new generation of stars is now being born in N11B, inside the dark dust clouds in the center and right-hand side of the Hubble image. This chain of consecutive star birth episodes has been seen in more distant galaxies, but it is shown very clearly in this new Hubble image.",
      'more': 'http://hubblesite.org/image/1565',
      'theme': 3,
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
              puzzleDone.find('.obj-date').text(`Taken Date / Release Date: ${imageData.date}`)
              puzzleDone.find('.obj-taken').text(`Taken by: ${imageData.photographer}`)
              puzzleDone.find('.obj-sup').text(imageData.supplement)
              puzzleDone.find('.obj-more').html(`For more information, please go to <a href="${imageData.more}" target="_blank">${imageData.more}</a>`)
              puzzleDone.css('display', 'inline-block')
              // update localStorage
              window.parent.postMessage({'command': 'update', 'value': settings.theme})
              
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
    window.parent.postMessage({'command': 'next', 'value': settings.theme})
  }

  var replay = function() {
    window.parent.postMessage({'command': 'reload'})
  }

  var menu = function() {
    window.parent.postMessage({'command': 'menu'})
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
    let countdown = 3;
    let interval = setInterval(function() {
      $('.ready .ready-text').text("")
      if (countdown > cnt) {
        $('.ready .text').text(countdown - cnt)
      }
      if (countdown === cnt) {
        $('.ready .text').text("Go!")
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
