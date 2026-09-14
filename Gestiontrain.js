var prompt = require('prompt-sync')();
let name = "";
let tripsid = 0;
let iDconture = 0;
let Identifiantticket = 0;
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [];
function AfficherTrajets() {
    console.log(`  === TRAJETS DISPONIBLES ===   `)
    for (i = 0; i < trips.length; i++) {
        console.log(`
        #${trips[i].id} ${trips[i].departure} →${trips[i].destination}
        Départ : ${trips[i].departureTime}
        Arrivée : ${trips[i].arrivalTime}
        Prix : ${trips[i].price} DH
        Places disponibles:${trips[i].availableSeats}

        `);
    }
    prompt("cliqez sur entrée pour retour");
};
function AcheterTicket() {
    let ticketAcheter=0;
    let seatNumber=1;
     name = (prompt("Nom du passager : "));
     if (name.trim() === "") {
            console.log("Ecrivez vote nom ");
            return;
     }
     tripsid = Number(prompt("Identifiant du trajet :"));
     if (tripsid < 1 || tripsid > 20 || isNaN(tripsid)) {
            console.log(" Trajet introuvable choixez un Identifiant du trajet entre 1 et 20 ");
         return;
     }
        for(let i=0;i<trips.length;i++){
        if(tripsid===trips[i].id){
        trips[i].availableSeats--;
        iDconture++;
        for(let j=0;j<tickets.length;j++){
            if (tickets[j].tripid===tripsid){
                ticketAcheter++;
                 seatNumber=ticketAcheter+1;
            }
        }
          console.log(`
                       Ticket acheté avec succès.
                              
                            Ticket: #${seatNumber}
                        Passager : ${name}
                     Trajet : ${trips[i].departure} → ${trips[i].destination}           
                          Place : ${seatNumber}
                          Prix : ${trips[i].price}
                        `)
        }
        else if (trips[i].availableSeats === 0) {
            console.log("Train complet");
            return;
        } 
    

        }
    tickets.push(
        {
            TICKETS: "#"+iDconture,
            passenger: name,
            tripid: tripsid,
            Trajet: trips[tripsid-1].departure + ("→") + trips[tripsid-1].destination,
            place: seatNumber,
            prix: trips[tripsid-1].price
        }
    )
    
    prompt("cliqez sur entrée pour retour");

    };
function AfficherTickets() {
    if (tickets.length === 0) {
            console.log("Aucun ticket enregistré.")
      };
      for(let i=0;i<tickets.length;i++){
         console.log(`
              === TICKETS ===
              Ticket:${tickets[i].TICKETS}
              Passager : ${tickets[i].passenger}
              Trajet : ${tickets[i].Trajet}
              Place : ${tickets[i].place}
              Prix : ${tickets[i].prix} DH

            `);
      }
          
 prompt("cliqez sur entrée pour retour");
        };  
function AnnulerTicket() {
    let fond;
    let Identifiantticket = 0
    do {
        fond = false;
        Identifiantticket = Number(prompt("saisit vote identifiant du ticket:"));
        for (let i = 0; i < tickets.length; i++) {
            if ("#" + Identifiantticket === tickets[i].TICKETS) {
                for (let j = 0; j < trips.length; j++) {
                    if (tickets[i].tripid === trips[j].id) {
                        trips[j].availableSeats++;
                    }
                }
                tickets.splice(i, 1);
                console.log(`
        Identifiant du ticket : ${Identifiantticket}

        Ticket annulé avec succès.

        `)
                fond = true;
                break;
            }
        }
        if (fond === false) {
            console.log("Ticket introuvable.");
            return;
        }
    } while (fond === false);
    prompt("cliqez sur entrée pour retour");
};
function RechercherTicket() {

    let nom_du_passager = ("");
    let rechercher;
    do {
        rechercher = false
        nom_du_passager = prompt("Nom du passager:")
        for (i = 0; i < tickets.length; i++) {
            if (nom_du_passager.toLowerCase() === tickets[i].passenger.toLowerCase()) {

                console.log(`
              Ticket ${tickets[i].TICKETS}
              Passager : ${tickets[i].passenger}
              Trajet : ${tickets[i].Trajet}
              Place : ${tickets[i].place}
              Prix : ${tickets[i].prix} DH

                `);
                rechercher = true;
            }
            }
            if (rechercher === false) {
                console.log("le nom du passager introuvable.");
                return;
        }
    } while (rechercher === false);
    prompt("cliqez sur entrée pour retour");
};

function FiltrerTrajets(){
 let villeRechercher=prompt(" Entrer la Ville de départ :")
 let ville=false
       console.log(`Ville de départ:${villeRechercher}
                      Résultat :
        `);
 for(i=0;i<trips.length;i++){
    if(villeRechercher.trim().toLowerCase()===trips[i].departure.trim().toLowerCase()){
        ville=true;
        console.log(`
                    ${trips[i].departure}→${trips[i].destination}:${trips[i].price } DH          
            `);
    }
};
    if(ville===false){
        console.log("la ville de depart introuvable")
    }
    prompt("cliqez sur entrée pour retour");
    };
 function TrierTrajets(){
 let trierPix=[...trips];
 let swap=0;
 for(let i=0;i<trierPix.length-1;i++){
    for(let j=0;j<trierPix.length-1;j++){
    if(trierPix[j].price > trierPix[j+1].price){
        swap=trierPix[j];
        trierPix[j]=trierPix[j+1];
        trierPix[j+1]=swap;
    }
}
 }
      for(i=0;i<trierPix.length;i++){
        console.log(`
           ${trierPix[i].departure}→${trierPix[i].destination}:${trierPix[i].price} DH
            `)
        }
     prompt("cliqez sur entrée pour retour");
    };
function statistique(){
   let nomberticketVendu=tickets.length;
   let chiffreAffaire=0;
   let trajetPlusVendu=("");
   let counts={};
   let plusVENDU=0;
   for(let i=0;i<tickets.length;i++){
    chiffreAffaire+=tickets[i].prix;

    if(counts[tickets[i].tripid]!== undefined){
        counts[tickets[i].tripid]++;

    }else{
        counts[tickets[i].tripid]=1
    }
    if(counts[tickets[i].tripid]>plusVENDU){
        plusVENDU=counts[tickets[i].tripid];
        trajetPlusVendu=tickets[i].Trajet
    }
   }
   console.log(`Nombre total de tickets : ${nomberticketVendu}
    ========================================================
                Chiffre d'affaires total : ${chiffreAffaire} DH
    ========================================================
                 Trajet le plus vendu :

                 ${trajetPlusVendu}

                 ${plusVENDU} tickets vendus

    `)
};




























function main() {
    let n;
    do {
        console.log("   RAILWAY MANAGER ");
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("8.Statistiques");
        console.log("0. Quitter");

        n = Number(prompt("votre un choix:"));
        switch (n) {
            case 1:
                AfficherTrajets()
                break;
            case 2:
                AcheterTicket()
                break;
            case 3:
                AfficherTickets()
                break;
            case 4:
                AnnulerTicket()
                break;
            case 5:
                RechercherTicket()
                break;
            case 6:
                FiltrerTrajets()
                break;
            case 7:
                TrierTrajets()
                break;
            case 8:
                statistique()
                break;
            case 0:
                console.log("Merci de nous avoir choisis.")
                break;
            default:
                console.log("Votre choix n'etait pas acceptable, Svp donne moi une valeur entre 1 et 7");
                break;
        }
    } while (n != 0)
}

main();