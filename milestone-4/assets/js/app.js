const app = new Vue ({
    el: '#root',
    data: {
        user: [
            {
                name: 'Nicola',
                avatar: '../img/avatar_7.jpg'
            }
        ],
        counter: 0,
        contacts: [
            {
            name: 'Michele',
            avatar: '../img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
            name: 'Fabio',
            avatar: '../img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
            name: 'Samuele',
            avatar: '../img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
            name: 'Luisa',
            avatar: '../img/avatar_6.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            ],
            fileterdContacts: [],
            search:'',
            addMessage: '',
    },
    methods: {

        // selezione del contatto con cui chattare
        chatWith(i) {
            this.counter = i;
            console.log(counter);
        },

        // invio un nuovo messaggio
        newMessage() {    
            let newText = {
                text: this.addMessage,
                status: 'sent'
            }
            let replyText = {
                text: 'ok',
                status: 'received'
            }
            this.contacts[this.counter].messages.push(newText)
            setTimeout(this.replyMessage(replyText), 1000);
            this.addMessage = '';
        },

        // ricevo un messaggio di risposta
        replyMessage(reply) {
            this.contacts[this.counter].messages.push(reply)
        },

        // filtro frai contatti
        /*
            restituisce un nuovo array da passare al ciclo for per i contatti nel markup
            se il contatto ha il nome che contiene la stringa inserita dall'utente, il contatto continua a far parte del nuovo array 
        */
        filterName() {
            this.contacts.array.forEach((contact, index) => {         
                if (contact.name.match(this.search) != null) {
                    contact.visible = false;
                }
                if (contact.visible) {
                    this.fileterdContacts.push(contact)     
                }
            });
            console.log(this.fileterdContacts)
            console.log(this.contacts[1].name.match(this.search))
        }
        

        // il valore di visible di ogni contatto resta true solo se quel contatto contiene il nome che matcha con la ricerca dell'utente
        /*
            match per verificare corrispondenza il nome del contatto e la ricerca dell'utente
            se il match non è verificato ad ogni modifica della ricerca, imposto il valore di visible su falso
        */
        
    }
})