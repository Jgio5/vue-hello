// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue(
    {
        el: '#root',
        data: {
            "text": 'Testo inserito tramite moustache',
            // "test": '',

            //Inserisco una classe a "img"
            visibilityClass: 'v_none',
            //Inserisco una classe a "btn"
            colorClass: 'black_white'
        },

        //Inserimento funzioni
        methods: {
            //funzione visibilità e colore bottone
            changeVisibilityColor() {
                if ((this.visibilityClass == "v_none") && (this.colorClass == "black_white")) {
                    this.visibilityClass = "v_block";
                    this.colorClass = "white_black";
                }
                else {
                    this.visibilityClass = "v_none"
                    this.colorClass = "black_white";
                }
            }
        }
    });