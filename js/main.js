document.getElementById('main-action-btn').onclick = function () {
  document.getElementById('products').scrollIntoView({behavior: 'smooth'});
}

const links = document.querySelectorAll('.nav__link');
for ( i = 0; i < links.length; i++) {
  links[i].onclick = function () {
  document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
  }
}

const btns = document.querySelectorAll('.product__btn');
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
  document.getElementById('order').scrollIntoView({behavior: 'smooth'});
  }
}