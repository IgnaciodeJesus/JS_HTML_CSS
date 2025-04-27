// Almacena el estado del tablero:
const board = Array(9).fill('');
let currentPlayer = 'X';     // Comienza X
let gameOver = false;

/* Seleccionamos elementos del DOM */
const title = document.getElementById('title');
const cells = document.querySelectorAll('.cell');

function checkWinner() {

  // Combinaciones ganadoras

  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]             // Diagonales
  ];

  // Revisa cada combinación ganadora, si hay una ganadora, retorna el jugador
  for (const combo of wins) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; 
    }
  }
  return null; // Sin ganador
}

// Deshabilita todas las casillas
function disableAllCells() {
  cells.forEach(btn => btn.disabled = true);
}


// Agrega evento a cada celda para que al hacer click se marque la celda con la letra del jugador actual
cells.forEach(btn => {
  btn.addEventListener('click', () => {
    const index = btn.dataset.index;

    // Evita sobreescribir casillas o jugar si terminó el juego
    if (board[index] || gameOver) return;

    // Marca la casilla con la letra del jugador actual
    board[index] = currentPlayer;
    btn.textContent = currentPlayer;

    // Revisa si hay ganador
    const winner = checkWinner();

    if (winner) {
      title.textContent = `Jugador ${winner} ganó`;
      gameOver = true;
      disableAllCells();
    } else if (!board.includes('')) {
      // Verifica empate (no hay celdas vacías)
      title.textContent = 'Empate';
      gameOver = true;
      disableAllCells();
    } else {
      // Cambia de jugador y continúa
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});
