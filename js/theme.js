let imageSets = {
    "1": [
      'mars.jpg',
      'saturn.png',
      'eagle_nebula.png',
    ],
    "2": [

    ],
    "3": [

    ]
  }

function playTheme(theme) {
    console.log("playTheme", theme);
    if (theme === 3) {
      return
    }
    // choose an image from theme, other than currentImage
    let items = imageSets[(theme).toString()]
    // let image = items[0]
    let image = items[Math.floor(Math.random()*items.length)];
    // console.log(image)
    let imageUrl = `/img/theme${theme}/${image}`
    console.log(imageUrl)
    window.location = `/puzzle?img=${imageUrl}&theme=${theme}`
}
