import {business, breads, pizzas, promotions, gallery} from './data.js';

// Componentes pequeños, sin servicios externos ni estado de compra.
const paths = {
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  down: '<path d="M12 3v17m-5-5 5 5 5-5"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  bread: '<path d="M5 19h14V9c4-1 2-6-1-5-2-3-5-1-6 0-2-2-5-2-6 0-4-1-6 4-1 5z"/><path d="m9 8 1 3m4-3 1 3"/>',
  pizza: '<path d="m4 20 5-16c5 0 9 3 11 7L4 20Z"/><path d="m8 7 9 7"/><circle cx="10" cy="13" r="1"/><circle cx="8" cy="17" r=".5"/><path d="m12 11 1 1"/>',
  oven: '<path d="M4 20V11a8 8 0 0 1 16 0v9M2 21h20M8 20v-8a4 4 0 0 1 8 0v8"/><path d="m9 3 1 2m5-2-1 2M5 6l2 1m12-1-2 1"/>',
  wheat: '<path d="M12 22V4m0 5C6 9 6 5 6 5s6 0 6 4Zm0 5c-6 0-6-4-6-4s6 0 6 4Zm0 5c-6 0-6-4-6-4s6 0 6 4Zm0-10c6 0 6-4 6-4s-6 0-6 4Zm0 5c6 0 6-4 6-4s-6 0-6 4Zm0 5c6 0 6-4 6-4s-6 0-6 4Z"/>',
  flame: '<path d="M13 2c2 6-3 7-1 11 2-1 3-3 3-4 7 8 3 13-3 13S1 17 6 10c0 3 2 3 2 3-1-5 5-6 5-11Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>',
  sparkle: '<path d="M12 2c0 7 3 10 10 10-7 0-10 3-10 10 0-7-3-10-10-10C9 12 12 9 12 2Z"/>',
  heart: '<path d="M12 21 3 12C-3 4 8-1 12 6c4-7 15-2 9 6Z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  phone: '<path d="m5 3 4 4-2 3a14 14 0 0 0 7 7l3-2 4 4-2 3C10 23 1 14 2 5Z"/>',
  message: '<path d="M21 11a9 9 0 0 1-13 8l-6 2 2-6a9 9 0 1 1 17-4Z"/><path d="m8 8 1 2a8 8 0 0 0 4 4l2 1 1-2-2-1-1 1-3-3 1-1-1-2Z"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.sparkle}</svg>`;
const money = amount => `S/ ${amount.toFixed(2)}`;
const image = (name, alt, attrs = '') => `<img src="assets/${name}.jpg" alt="${alt}" loading="lazy" width="650" height="450" ${attrs}>`;

function BreadCard(product) {
  return `<article class="product-card"><div class="product-image">${image(product.image, product.name)}${product.tag ? `<span class="tag">${product.tag}</span>` : ''}</div><div class="product-body"><h3>${product.name}</h3><p>${product.description}</p><div class="product-bottom"><span class="price">${money(product.price)}</span><small>POR ${product.unit.toUpperCase()}</small></div></div></article>`;
}
function PizzaCard(product, index) {
  return `<article class="product-card" data-pizza="${index}"><div class="product-image">${image(product.image, `Fotografía de referencia para la pizza ${product.name}`)}${product.tag ? `<span class="tag">${product.tag}</span>` : ''}</div><div class="product-body"><h3>${product.name}</h3><p>${product.description}</p><div class="sizes" role="group" aria-label="Tamaño de ${product.name}">${['Personal', 'Mediana', 'Familiar'].map((size, i) => `<button class="size ${i === 1 ? 'active' : ''}" data-size="${i}" aria-pressed="${i === 1}">${size}</button>`).join('')}</div><div class="product-bottom"><span class="price" aria-live="polite" aria-label="Precio de ejemplo de ${product.name} mediana">${money(product.prices[1])}</span><small>PRECIO DE EJEMPLO</small></div></div></article>`;
}
function PromotionCard(promo, i) {
  return `<article class="promo-card"><p class="eyebrow">${promo.label}</p><h3>${promo.name}</h3><p>${promo.text}</p>${image(promo.image, '')}<div class="promo-price">${money(promo.price)}<small>Precio demostrativo</small></div><button data-promo="${i}">Ver el combo ${icon('arrow')}</button></article>`;
}
function GalleryPhoto(photo, i) {
  return `<button class="gallery-item" data-gallery="${i}" aria-label="Ampliar: ${photo.alt}">${image(photo.image, photo.alt)}<span>${photo.label} ↗</span></button>`;
}
const breadGrid = document.querySelector('#bread-grid');
breadGrid.innerHTML = breads.map(BreadCard).join('');
document.querySelector('#pizza-grid').innerHTML = pizzas.map(PizzaCard).join('');
document.querySelector('#promo-grid').innerHTML = promotions.map(PromotionCard).join('');
document.querySelector('#gallery-grid').innerHTML = gallery.map(GalleryPhoto).join('');
document.querySelector('#contact-details').innerHTML = `<div class="contact-item">${icon('pin')}<div><b>Dirección de ejemplo</b><p>${business.address}</p></div></div><div class="contact-item">${icon('clock')}<div><b>Horarios de ejemplo</b><p>Panadería: ${business.bakeryHours}<br>Pizzería: ${business.pizzaHours}</p></div></div><div class="contact-item">${icon('phone')}<div><b>Teléfono y WhatsApp por confirmar</b><p>${business.phone} · Número ficticio, sin conexión</p></div></div>`;
document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(el => {el.classList.toggle('active', el === button); el.setAttribute('aria-pressed', String(el === button));});
  const visible = breads.filter(item => button.dataset.filter === 'Todos' || item.category === button.dataset.filter);
  breadGrid.innerHTML = visible.map(BreadCard).join('');
  document.querySelector('#filter-status').textContent = `${visible.length} productos de ${button.dataset.filter.toLowerCase()}`;
}));
document.querySelector('#pizza-grid').addEventListener('click', event => {
  const button = event.target.closest('[data-size]');
  if (!button) return;
  const card = button.closest('[data-pizza]');
  const product = pizzas[Number(card.dataset.pizza)];
  card.querySelectorAll('.size').forEach(el => {el.classList.toggle('active', el === button); el.setAttribute('aria-pressed', String(el === button));});
  card.querySelector('.price').textContent = money(product.prices[Number(button.dataset.size)]);
  card.querySelector('.price').setAttribute('aria-label', `Precio de ejemplo de ${product.name} ${button.textContent.toLowerCase()}`);
});

const dialog = document.querySelector('#detail-dialog');
let lastFocus;
function showDialog(content) {lastFocus = document.activeElement; document.querySelector('#dialog-content').innerHTML = content; dialog.showModal(); document.body.classList.add('modal-open');}
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => {document.body.classList.remove('modal-open'); lastFocus?.focus({preventScroll: true});});
dialog.addEventListener('click', event => {if (event.target === dialog) {const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close();}});
document.querySelectorAll('[data-promo]').forEach(button => button.addEventListener('click', () => {
  const promo = promotions[Number(button.dataset.promo)];
  showDialog(`<p class="eyebrow">PROMOCIÓN FICTICIA · DEMO</p><h2 id="dialog-title">${promo.name}</h2><p>${promo.text}</p><p class="dialog-price">${money(promo.price)}</p><p>${promo.note}</p><p>Este combo es un ejemplo para mostrar la futura carta. No es una oferta vigente y todavía no se reciben pedidos.</p><button class="button" id="dialog-explore">Explorar las pizzas ${icon('arrow')}</button>`);
  document.querySelector('#dialog-explore').addEventListener('click', () => {dialog.close(); document.querySelector('#pizzeria').scrollIntoView();});
}));
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => {
  const photo = gallery[Number(button.dataset.gallery)];
  showDialog(`${image(photo.image, photo.alt, 'decoding="async"')}<h2 id="dialog-title" class="dialog-caption">${photo.label}</h2><p>Fotografía de referencia. Las imágenes podrán reemplazarse por las del negocio.</p>`);
}));
document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => {
  showDialog(`<p class="eyebrow">PRONTO ESTAREMOS MÁS CERCA</p><h2 id="dialog-title">${button.dataset.contact}, próximamente.</h2><p>Esta es una demo visual. Todavía no hay un ${button.dataset.contact === 'WhatsApp' ? 'número de WhatsApp' : 'perfil de ' + button.dataset.contact} real conectado.</p><p>Cuando tengamos los datos del negocio, aquí podrás encontrar el enlace de contacto.</p><button class="button" id="dialog-dismiss">Entendido ${icon('arrow')}</button>`);
  document.querySelector('#dialog-dismiss').addEventListener('click', () => dialog.close());
}));

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menú'); navigation.classList.remove('open');}
menuButton.addEventListener('click', () => {const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); navigation.classList.toggle('open', open);});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {if (event.key === 'Escape' && navigation.classList.contains('open')) {closeMenu(); menuButton.focus();}});
document.addEventListener('click', event => {if (!event.target.closest('header')) closeMenu();});
window.matchMedia('(min-width:901px)').addEventListener('change', event => {if(event.matches) closeMenu();});
const header = document.querySelector('#header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 35), {passive:true});

if ('IntersectionObserver' in window) {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-motion');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {if (entry.isIntersecting) {entry.target.classList.add('visible'); revealObserver.unobserve(entry.target);}}), {threshold:0, rootMargin:'0px 0px -35px 0px'});
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) navigation.querySelectorAll('a').forEach(link => {const active = link.hash === '#' + entry.target.id; link.classList.toggle('active', active); if(active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');});}), {rootMargin:'-15% 0px -60% 0px'});
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}
// Una imagen de respaldo local mantiene el diseño si se reemplaza una foto incorrectamente.
document.addEventListener('error', event => {if(event.target.tagName === 'IMG' && !event.target.dataset.fallback) {event.target.dataset.fallback='true'; event.target.src='assets/image-fallback.svg';}}, true);
