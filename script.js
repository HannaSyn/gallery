const select = document.querySelector('#theme-select');
const themeDekstop = document.querySelector('.theme-dekstop');
const themeTablet = document.querySelector('.theme-tablet');

function switchTheme(item) {
	switch (item.value) {
		case 'Light':
      transition();
			document.documentElement.setAttribute('data-theme', 'light');
			break;
		case 'Dark':
      transition();
			document.documentElement.setAttribute('data-theme', 'dark');
			break;
		case 'Normal':
      transition();
			document.documentElement.setAttribute('data-theme', '');
			break;
  }
}

function transition() {
  document.documentElement.classList.add('color-theme-in-transition')
  window.setTimeout(function() {
    document.documentElement.classList.remove('color-theme-in-transition')
  }, 1000)
}

function change(e) {
  switchTheme(e.target);
}

select.onchange = change;
themeDekstop.addEventListener('click', change);
themeTablet.addEventListener('click', change);
