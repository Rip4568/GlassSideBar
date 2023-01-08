const sidebar = document.querySelector('.side-bar')
const navItems = document.querySelectorAll('nav .nav-item')
const toggle = document.querySelector('.side-bar .toggle')

toggle.addEventListener('click', () => {
  if (sidebar.className === 'side-bar') {
    sidebar.classList.add('open')
  } else {
    sidebar.classList.remove('open')
  }
})

navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    navItems.forEach(navItem => {
      navItem.classList.remove('active')
    })
    navItem.classList.add('active')
  })
})