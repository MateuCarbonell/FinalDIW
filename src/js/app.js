import '../bootstrap-5.3.2/scss/bootstrap.scss';
import '../bootstrap-5.3.2/scss/bootstrap-grid.scss';
import '../bootstrap-5.3.2/scss/bootstrap-utilities.scss';
import '../bootstrap-5.3.2/scss/bootstrap-reboot.scss';
import '../assets/bahraingp.png';
import '../assets/abudhabigp.png';
import '../assets/australiagp.png';
import '../assets/austriagp.png';
import '../assets/aws.png';
import '../assets/bahraingp.png';
import '../assets/bakugp.png';
import '../assets/barcelonagp.png';
import '../assets/brasilgp.png';
import '../assets/canadagp.png';
import '../assets/chinagp.png';
import '../assets/estrellagalicia.png';
import '../assets/hungaroring.png';
import '../assets/imolagp.png';
import '../assets/jeddahgp.png';
import '../assets/mexicogp.png';
import '../assets/miamigp.png';
import '../assets/monacogp.png';
import '../assets/monzagp.png';
import '../assets/qatargp.png';
import '../assets/rbring.png';
import '../assets/santander.png';
import '../assets/silverstone.png';
import '../assets/singaporegp.png';
import '../assets/snapdragon.png';
import '../assets/spagp.png';
import '../assets/suzukagp.png';
import '../assets/vegasgp.png';
import '../assets/zandvort.png';
import '../assets/F1.png';
import '../assets/card1.jpg';
import '../assets/f12005.jpg';
import '../assets/renaultR24.jpg';
import '../assets/mclarenmercedes.jpg';
import '../assets/mclaren2007.jpg';
import '../assets/rb9.jpg';
import '../assets/lotus.jpg';
import '../assets/rb19.jpg';
import '../assets/w11.jpg';
import '../assets/alpine521.jpg';
import '../assets/topcircuitomonaco.jpg';
import '../assets/topcircuitomonza.jpg';
import '../assets/topcircuitospa.jpg';
import '../fonts/helveticanowtext-bold-demo.ttf';


// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Botón Spinner
document.addEventListener('DOMContentLoaded', function () {
    var btnMostrarTopCircuitos = document.getElementById('btnMostrarTopCircuitos');
    
    if (btnMostrarTopCircuitos) {
        btnMostrarTopCircuitos.addEventListener('click', function () {
            var spinner = document.getElementById('spinner');
            var topCircuitos = document.getElementById('topCircuitos');

            spinner.style.display = 'block';

            setTimeout(function () {
                spinner.style.display = 'none';
                topCircuitos.style.display = 'block';
            }, 1000);
        });
    }
});




// Lógica modo oscuro

// document.addEventListener('DOMContentLoaded', function () {
//     const btnOscuro = document.getElementById('btnOscuro');
//     const mainBody = document.getElementById('mainBody');

//     btnOscuro.addEventListener('click', function () {
//         mainBody.classList.toggle('dark-mode');
//     });
// });