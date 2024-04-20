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


const prices = document.getElementsByClassName('product__price');
document.getElementById('change-currency').onclick = function (e) {
  const currentCurrency = e.target.innerText;

  let newCurrency = '$';
  let coefficient = 1;
  if (currentCurrency === '$') {
    newCurrency = '₽';
    coefficient = 90;
  } else if (currentCurrency === '₽') {
    newCurrency = 'BYN';
    coefficient = 3;
  }
  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
  }
}


