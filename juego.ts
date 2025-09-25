// En juego.ts
// Este código solo funciona en el navegador, no en Node.js.
// Para usar la base de datos, usaremos una API sencilla del navegador.
// No usaremos SQLite directamente aquí ya que es más complejo.

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button") as HTMLButtonElement;
    const messageDisplay = document.getElementById("message") as HTMLParagraphElement;
    const scoreDisplay = document.getElementById("score") as HTMLSpanElement;
    const highScoreDisplay = document.getElementById("high-score") as HTMLSpanElement;
    const colorButtons = document.querySelectorAll(".color-button");

    const colors = ["green", "red", "yellow", "blue"];
    let sequence: string[] = [];
    let playerSequence: string[] = [];
    let score = 0;
    let playing = false;
    let highscore = 0;

    // Simulación de base de datos usando el almacenamiento local del navegador
    // Esto es como un cuaderno de notas que el navegador guarda para nosotros.
    const loadHighScore = () => {
        const savedHighScore = localStorage.getItem("highScore");
        if (savedHighScore) {
            highscore = parseInt(savedHighScore, 10);
            highScoreDisplay.textContent = highscore.toString();
        }
    };

    const saveHighScore = () => {
        if (score > highscore) {
            highscore = score;
            localStorage.setItem("highScore", highscore.toString());
            highScoreDisplay.textContent = highscore.toString();
        }
    };

    const startGame = () => {
        // Hacemos que los botones sean clickeables
            colorButtons.forEach(button => {
                button.classList.add("playing");
            });
        playing = true;
        score = 0;
        sequence = [];
        messageDisplay.textContent = "¡Observa la secuencia!";
        scoreDisplay.textContent = score.toString();
        
        playSequence();
    };

    const playSequence = () => {
        playerSequence = [];
        const nextColor = colors[Math.floor(Math.random() * colors.length)];
        sequence.push(nextColor);

        let i = 0;
        const interval = setInterval(() => {
            if (i < sequence.length) {
                flashButton(sequence[i]);
                i++;
            } else {
                clearInterval(interval);
                messageDisplay.textContent = "Tu turno. ¡Repite la secuencia!";
            }
        }, 800);
    };

    const flashButton = (color: string) => {
        const button = document.getElementById(color) as HTMLButtonElement;
        button.classList.add("active");
        setTimeout(() => {
            button.classList.remove("active");
        }, 400);
    };

   const checkPlayerInput = (color: string, button: HTMLButtonElement) => {
       playerSequence.push(color);
       const currentIndex = playerSequence.length - 1;

       // Agrega una clase para dar retroalimentación visual al hacer clic
       button.classList.add("activo");
       setTimeout(() => {
           button.classList.remove("activo");
       }, 150);

       // Si el jugador se equivoca
       if (playerSequence[currentIndex] !== sequence[currentIndex]) {
           // Muestra el efecto de error
           button.classList.add("incorrecto");
           endGame();
           return;
       }

       // Si el jugador acierta el botón en el orden correcto
       button.classList.add("correcto");
       setTimeout(() => {
           button.classList.remove("correcto");
       }, 300);

       // Si el jugador completó la secuencia
       if (playerSequence.length === sequence.length) {
           score++;
           scoreDisplay.textContent = score.toString();
           messageDisplay.textContent = "¡Correcto! Siguiente ronda.";
           saveHighScore();
           setTimeout(playSequence, 1500);
       }
   };

  

    const endGame = () => {
        // Ocultamos los botones cuando el juego termina
    colorButtons.forEach(button => {
        button.classList.remove("playing");
    });
    startButton.style.display = "block";
        playing = false;
        messageDisplay.textContent = `¡Fin del juego! Tu puntuación fue: ${score}`;
        startButton.style.display = "block";
    };

    // Event Listeners
    startButton.addEventListener("click", () => {
        startButton.style.display = "none";
        startGame();
    });

    // Necesitas cambiar el 'event listener' para pasar el botón
   colorButtons.forEach(button => {
       button.addEventListener("click", () => {
           if (playing) {
               checkPlayerInput(button.id, button as HTMLButtonElement);
           }
       });
   });

    // Carga la mejor puntuación al iniciar
    loadHighScore();
});