
var audioPlayer = document.getElementById('audioPlayer');

function playAudio() {
    audioPlayer.play();
}
const carousel = new bootstrap.Carousel('#myCarousel')
function pauseAudio() {
    audioPlayer.pause();
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

    function loginClicked() {
        alert('¡Botón de Iniciar sesión clickeado!');
        // Aquí puedes agregar más lógica para mostrar un formulario de inicio de sesión o redireccionar a otra página.
    }
    function uploadFile() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
    
        if (!file) {
            alert('Por favor, selecciona un archivo para cargar.');
            return;
        }
    .scroll-section
        const formData = new FormData();
        formData.append('file', file);
        const carousel = new bootstrap.Carousel('#myCarousel')
        // Aquí deberías enviar el archivo al servidor utilizando una solicitud AJAX o Fetch.
        // Por ejemplo:
        // fetch('/upload', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Respuesta del servidor:', data);
        // })
        // .catch(error => {
        //     console.error('Error al cargar el archivo:', error);
        // });
    }