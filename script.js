function toggleMode() {
  const html = document.documentElement
    html.classList.toggle('light')

   const img = document.querySelector("#profile img")
  // Pegar imagem
  if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/Profile/Avatar.png",)
    img.setAttribute("alt", 'Foto Chad')
  } else {
    img.setAttribute("src", "./assets/Profile/Avatar2.png")
    img.setAttribute("alt", "Foto Sigma")
  }
}
