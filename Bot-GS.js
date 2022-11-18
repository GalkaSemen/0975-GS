// ==UserScript==
    // @name         YandexBot
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  try to take over the world!
    // @author       Galina Semenova
    // @match        https://ya.ru/*
    // @match        https://yandex.ru/*
    // @match        https://yandex.ru/search/
    // @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
    // @grant        none
    // ==/UserScript==


let links = document.links;
let button = document.getElementsByClassName("search3__button mini-suggest__button")[0];
let keywords = ["Покупка автомобиля ", "купля-продажа авто", "Автомобиль с пробегом", "каталог автомобилей"];
let keyword = keywords[getRandom(0, keywords.length)];

if (button !== undefined) {
 document.getElementsByName("text")[0].value = keyword;
 button.click();

} else {
  for( let i =0; i< links.length; i++){
    if (links[i].href.indexOf("auto.ru") !== -1){
      let link = links[i]
      console.log("Нашел строку " + links[i])
      link.click();
      break;
    }
  }
}


    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
