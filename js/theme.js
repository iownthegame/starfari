let imageSets = {
  "1": [
    'earth.jpg',
    'mars2.jpg',
    'saturn.png',
    'black_hole.png',
    'hr8799b.png',
    // 'mars.jpg',
    // 'hat.png',
  ],
  "2": [
    'lagoon_nebula_nvlc.png',
    'horsehead_nebula.png',
    'uranus.jpg',
    'crab_nebula_if.png',
    'crab_nebula_uv.png',
    'ngc3310.png',
  ],
  "3": [
    'eagle_nebula.png',
    'europa_plume.png',
    'm51.png',
    'lagoon_nebula_vlc.png',
    'bubble_nebula.png',
    'jupiter_aurora.jpg',
    'lmc.png',
  ]
}

function updateThemeItem(theme) {
  // update localStorage
  let items = imageSets[(theme).toString()]
  let themeKey = 'theme'+theme.toString()
  let index = localStorage.getItem(themeKey)
  if (index === null) {
    index = -1
  } else {
    index = parseInt(index)
  }
  let newIndex = null
  if (index === -1) {
    newIndex = 0
  } else {
    newIndex = index + 1
  }
  // localStorage.removeItem(themeKey)
  if (newIndex <= items.length) {
    localStorage.setItem(themeKey, newIndex)
  }
  console.log(`updateThemeIndex theme ${theme} index ${newIndex}`)
}

function playTheme(theme, action) {
    console.log("playTheme", theme);
    // if (theme === 3) {
      // return
    // }
    // choose an image from theme, other than currentImage
    let items = imageSets[(theme).toString()]
    // let image = items[0]
    let themeKey = 'theme'+theme.toString()
    let index = localStorage.getItem(themeKey)
    if (index === null) {
      index = -1
    } else {
      index = parseInt(index)
    }
    let newIndex = index
    if (index === -1) {
      newIndex = 0
    }
    console.log(`newIndex ${newIndex}`)
    console.log(`items length ${items.length}`)
    if (newIndex >= items.length) {
      console.log(action, theme)
      if (action === 'puzzle') {
        if (parseInt(theme) === 1) {
          console.log('show ending video')
          // show ending video

          let videoContainer = document.getElementById("video-container");
          videoContainer.style.display = "block";
          let video = document.getElementById("video");
          video.play();
          // document.getElementById("start").style.display = "none";
          // document.getElementById("demo").style.display = "none";
          // document.getElementById("footer").style.display = "none";
          document.getElementById("header").style.display = "none";
          video.onended = function(e) {
              console.log('video end')
              window.location = "/menu";  
          };
        }
        else {
          // game over, go back to menu
          window.location = `/menu`
        }
      } else {
        let image = items[Math.floor(Math.random()*items.length)];
        let imageUrl = `/img/theme${theme}/${image}`
        console.log(imageUrl)
        window.location = `/puzzle?img=${imageUrl}&theme=${theme}`
      }
      return
    }
    let image = items[newIndex]
    // localStorage.removeItem(themeKey)
    localStorage.setItem(themeKey, newIndex)
    console.log(`set ${themeKey} index ${newIndex}`)
    // console.log(image)
    let imageUrl = `/img/theme${theme}/${image}`
    console.log(imageUrl)
    window.location = `/puzzle?img=${imageUrl}&theme=${theme}`
}
