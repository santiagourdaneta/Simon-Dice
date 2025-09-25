# Juego "Simon Dice"

Este es un juego de memoria clásico de "Simon Dice" hecho con tecnologías web modernas. El objetivo del juego es simple: memorizar una secuencia de colores y repetirla. El proyecto se enfoca en crear una experiencia de usuario fluida, optimizada para funcionar en cualquier dispositivo, desde laptops potentes hasta celulares viejos.

## Características

* **Jugabilidad:** Sigue y repite una secuencia de colores que aumenta con cada ronda.
* **Interfaz de Usuario (UI):** Diseño limpio y minimalista con un tema de modo oscuro por defecto.
* **Rendimiento:** Optimizado para dispositivos de bajo rendimiento, garantizando una jugabilidad fluida.
* **Retroalimentación Visual:** Los botones reaccionan con animaciones y cambios de color para indicar aciertos y errores.
* **Puntuación:** Guarda la puntuación más alta en el navegador del usuario.

## Tecnologías Usadas

* **HTML5**
* **CSS3** (Pico.css para el esqueleto)
* **TypeScript** (para la lógica del juego)

## Cómo Funciona

El juego genera una secuencia aleatoria de colores que el jugador debe repetir. Si el jugador repite la secuencia correctamente, el juego añade otro color a la secuencia. Si se equivoca, el juego termina.

## Guía de Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/santiagourdaneta/Simon-Dice](https://github.com/santiagourdaneta/Simon-Dice)
    cd Simon-Dice
    ```
2.  **Instalar TypeScript (si no lo tienes):**
    ```bash
    npm install -g typescript
    ```
3.  **Transpilar el código:** Convierte el código de TypeScript a JavaScript.
    ```bash
    npx tsc juego.ts
    ```
4.  **Abrir el juego:** Simplemente haz doble clic en el archivo `index.html` para abrirlo en tu navegador.

---
**Nota:** Para ejecutar el juego en vivo, necesitas un servidor web local. Puedes usar la extensión "Live Server" en Visual Studio Code.