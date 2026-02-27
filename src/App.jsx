import { useState } from 'react'
import { useTimer } from 'react-timer-hook';
import './App.css'

function App() {

  // 1. O Modo: Começa como 'foco'
  const [modo, setModo] = useState('foco');

  // 2. Tempo de Foco: Começa com 25 minutos
  const [tempoFoco, setTempoFoco] = useState(25);

  // 3. Tempo de Descanso: Começa com 5 minutos
  const [tempoDescanso, setTempoDescanso] = useState(5);
  // Configura o tempo inicial (25 minutos a partir de agora)
  const time = new Date();
  time.setSeconds(time.getSeconds() + (25 * 60));

  // 4. Controle do nosso Alerta Customizado (começa escondido)
  const [mostrarAviso, setMostrarAviso] = useState(false);

  const {
    seconds,
    minutes,
    pause,
    resume,
    restart
  } = useTimer({ expiryTimestamp: time, onExpire: () => setMostrarAviso(true) });

  // Formatação para colocar o zero na frente (05:00 em vez de 5:0)
  const minutosFormatados = String(minutes).padStart(2, '0');
  const segundosFormatados = String(seconds).padStart(2, '0');

  return (
    <div className="app-container">
      <h1>Meu Pomodoro</h1>
      <h1>Modo: {modo}</h1>
      <div style={{ fontSize: '80px' }}>
        {minutosFormatados}:{segundosFormatados}
      </div>

      <div className="mudatempo">
        <label>Tempo de Foco (min): </label>
        <input
          type="number"
          value={tempoFoco} // O valor que vem do estado
          onChange={(e) => {
            const valorDigitado = e.target.value;

            // TRUQUE DO ZERO: Se o usuário apagou tudo, deixe vazio (não converta pra zero)
            // Se não estiver vazio, converta para número
            const novoValor = valorDigitado === '' ? '' : Number(valorDigitado);

            // TRUQUE DO LIMITE: Só atualiza o estado se for menor que 100 (2 dígitos)
            // Ou se estiver vazio (pra permitir apagar)
            if (valorDigitado.length <= 2) {
              setTempoFoco(novoValor);
            }
            else if (valorDigitado > 60) {
              alert('O tempo deve ser menor que 60 minutos');
            }
          }}
        />  </div>

      <div className="mudatempo">
        <label>Tempo de Descanso (min): </label>
        <input
          type="number"
          value={tempoDescanso} // O valor que vem do estado
          onChange={(e) => {
            const valorDigitado = e.target.value;

            // TRUQUE DO ZERO: Se o usuário apagou tudo, deixe vazio (não converta pra zero)
            // Se não estiver vazio, converta para número
            const novoValor = valorDigitado === '' ? '' : Number(valorDigitado);

            // TRUQUE DO LIMITE: Só atualiza o estado se for menor que 100 (2 dígitos)
            // Ou se estiver vazio (pra permitir apagar)
            if (valorDigitado.length <= 2) {
              setTempoDescanso(novoValor);
            }
            else if (valorDigitado > 60) {
              alert('O tempo deve ser menor que 60 minutos');
            }
          }}
        />
      </div>

      <button onClick={pause}>Pausar</button>
      <button onClick={resume}>Continuar</button>

      <button onClick={() => {
        const time = new Date();

        // Decidindo qual tempo usar
        let minutos;
        if (modo === 'foco') {
          minutos = tempoFoco;
        } else {
          minutos = tempoDescanso;
        }

        // Multiplica os minutos escolhidos por 60 segundos
        time.setSeconds(time.getSeconds() + (minutos * 60));

        restart(time);
      }}>
        Reiniciar
      </button>


      {mostrarAviso && (
        <div className="alerta-customizado">
          <h2>⏰ Acabou o tempo!</h2>
          <p>Hora de trocar de modo.</p>
          <button
            className="alerta-botao"
            onClick={() => setMostrarAviso(false)}
          >
            Beleza, entendi
          </button>
        </div>
      )}

    </div>
  );
}

export default App;

// O tempo de descanso não inicia ao acabar o tempo de foco
// Adicionar funionabilidades a mais nos botões e corrigir possíveis bugs