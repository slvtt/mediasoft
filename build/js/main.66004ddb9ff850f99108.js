!function(){var t,e={5619:function(t,e,n){"use strict";n(6353);!function(){var t=document.querySelector(".callback-btn"),e=document.querySelector(".modal"),n=function(){e.classList.remove("open"),document.removeEventListener("keydown",a)},a=function(t){"Escape"===t.code&&n()};e.addEventListener("click",(function(t){var a=t.target;(a.classList.contains("modal__close")||a===e)&&n()})),t.addEventListener("click",(function(t){console.log(t);t.target;document.addEventListener("keydown",a),e.classList.add("open")}))}()},6353:function(t){t.exports='<!DOCTYPE html> <html lang="ru"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width,initial-scale=1"> <title>Медиасофт для заказчиков</title> </head> <body> <header> <div class="header-main"> <section class="nav"> <div class="fixed-container flex-block flex-start"> <nav class="navigation"> <ul class="navigation-list"> <li class="navigation-list_item"><a href="#"> Главная</a></li> <li class="navigation-list_item"><a href="#">Наши проекты</a></li> <li class="navigation-list_item"><a href="#">Услуги</a></li> <li class="navigation-list_item"><a href="#">Стоимость</a></li> <li class="navigation-list_item"><a href="#">Обратная связь</a></li> </ul> </nav> </div> </section> <section class="description-studio"> <div class="fixed-container flex-block flex-center"> <p class="description-studio_par center">OOO Медиасофт</p> <h1 class="description-studio_title center">Мы создаем легкие решения сложных задач и проблем</h1> <button class="btn description-btn center">Наши проекты</button> </div> </section> </div> </header> <main> <section class="about-us"> <div class="skill-container fixed-container"> <div class="fixed-container flex-block flex-center"> <h2 class="about-us_title">Наши проекты</h2> <p class="about-us_description">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p> </div> <div class="fixed-container flex-block flex-center-row"><button class="btn description-btn skill-container__btn">Все проекты</button></div> </div> </section> <section class="callBack"> <div class="call"> <div class="fixed-container"> <h3 class="callback_title">Хотите проконсультироваться с нашим специалистом?</h3> <p class="callback_subtitle">Заполните форму обратной связи и наш менеджер с вами свяжется</p> <div class="fixed-container flex-block flex-center-row"><button class="btn description-btn skill-container__btn callback-btn">Заполнить форму</button></div> </div> </div> </section> </main> <div class="modal"> <div class="modal__block"> <button class="modal__close">✘</button> <h2 class="modal__subtitle">Форма обратной связи</h2> <form action=""> <h3 class="modal__title">Заполните небольшую форму и наш менеджер с вами свяжется</h3> <label class="modal__label"> <span class="modal__label-text">ФИО</span> <input class="modal__input" type="text"> </label> <label class="modal__label"> <span class="modal__label-text">Укажите примерную тему вашего проекта</span> <input class="modal__input" type="text"> </label> <label class="modal__label"> <span class="modal__label-text">Телефон, для обратной связи</span> <input class="modal__input" type="text"> </label> <button type="submit" class="button button_buy modal__submit">Отправить</button> </form> </div> </div> </body>  </html>'}},n={};function a(t){var l=n[t];if(void 0!==l)return l.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,a),i.exports}a.m=e,t=[],a.O=function(e,n,l,i){if(!n){var s=1/0;for(r=0;r<t.length;r++){for(var[n,l,i]=t[r],o=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(o=!1,i<s&&(s=i));o&&(t.splice(r--,1),e=l())}return e}i=i||0;for(var r=t.length;r>0&&t[r-1][2]>i;r--)t[r]=t[r-1];t[r]=[n,l,i]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={179:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var l,i,[s,o,c]=n,r=0;for(l in o)a.o(o,l)&&(a.m[l]=o[l]);for(c&&c(a),e&&e(n);r<s.length;r++)i=s[r],a.o(t,i)&&t[i]&&t[i][0](),t[s[r]]=0;a.O()},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),a.O(void 0,[202],(function(){return a(1202)}));var l=a.O(void 0,[202],(function(){return a(5619)}));l=a.O(l)}();