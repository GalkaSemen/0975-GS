// ==UserScript==
    // @name         YandexBot
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  try to take over the world!
    // @author       Galina Semenova
    // @match        https://ya.ru/*
    // @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
    // @grant        none
    // ==/UserScript==

    let links = document.links;
    let btnK = document.getElementsByName("btnK")[0];
    let keywords = ["Покупка автомобиля ", "купля-продажа авто", "Автомобиль с пробегом", "каталог автомобилей"];
    let keyword = keywords[getRandom(0, keywords.length)];



   if(btnK !== undefined) {
      document.getElementsByName("q")[0].value = keyword;
      document.getElementsByName("btnK")[0].click();
    } else {
      for (let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("auto.ru") !== -1) {
          let link = links[i]
          console.log("Нашел строку " + links[i]);
          link.click();
          break;
        }
      }
    }

    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
