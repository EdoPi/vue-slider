/*
Ricreare lo slider già fatto in jquery con Vue.js.
In questo caso dovete modificare l'html (semplificarlo di molto!) perché ora ci penserà vue.js!
*/



/*
Step1
creare oggetto immagini, √
step2
creare click avanti e indietro √
step3
al click avanti cambiare foto e al click indietro tornare √
step4
al termine delle foto ricominciare o dalla prima o dall'ultima √
step5
creare pallini
step6
sincronizzare pallini*/


var app = new Vue({
  el: '#app',
  data: {
    immagini:[
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg',
    ],
    imageID: 0,
    






  },
  methods:{
    prevClick: function(){
      if (this.imageID > 0) {
        return this.imageID -= 1;
      }else {
        return this.imageID = this.immagini.length - 1;
      }

    },
    nextClick: function(){
      if (this.imageID < this.immagini.length - 1) {
        return this.imageID += 1;
      }else {
        return this.imageID = 0;
      }
    },
    isDotActive: function (i){
      return i === this.imageID;
    }

  }
});

Vue.config.devtools = true;
