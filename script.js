let hourDiv = document.getElementById('hour');
let dateDiv = document.getElementById('date');

let display = () => {
    // date actuelle
    let today = new Date(); 
    // année
    let year = today.getFullYear();
    // mois 
    let monthList = ["January", "February", "March", "April", "Mei", "June", "July", "August", "September", "November", "December"];
    let month = monthList[today.getMonth()];
    // jour
    let dayList = []

    // affichage heure
    let twoDigit = (elem) => {
        if (elem < 10){
            
        }
    }
}