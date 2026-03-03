import { useState } from 'react'
import { useTimer } from 'react-timer-hook';
import './App.css'

function App() {

  // 1. O Modo: Começa como 'foco'
  const [modo, setModo] = useState('Foco');

  // 2. Tempo de Foco: Começa com 25 minutos
  const [tempoFoco, setTempoFoco] = useState(25);

  // 3. Tempo de Descanso: Começa com 5 minutos
  const [tempoDescanso, setTempoDescanso] = useState(5);
  // Configura o tempo inicial (25 minutos a partir de agora)
  const time = new Date();
  time.setSeconds(time.getSeconds() + (25 * 60));

  // 4. Controle do nosso Alerta Customizado (começa escondido)
  const [mostrarAviso, setMostrarAviso] = useState(false);

  // 5. Controle do nosso Cronômetro (começa pausado)
  //const [cronometroPausado, setCronometroPausado] = useState(true);

  // 6. Nome da página mostrando o tempo restante
  const [nomePagina, setNomePagina] = useState('Pomodoro');

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
    <>
      <head>
        <title>{`Pomodoro - ${minutosFormatados}:${segundosFormatados} - ${modo}`}</title>
      </head>

      <div className="app-container">
        <h1 className="title">Meu Pomodoro</h1>
        <h2 className="mode-text">Modo: <span className={modo === 'Foco' ? 'modo-foco' : 'modo-descanso'}>{modo}</span></h2>
        <div className="timer-display">
          {minutosFormatados}:{segundosFormatados}
        </div>

        <div className="settings-container">
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
        </div>

        <div className="controls-container">
          <button className="btn btn-secondary" onClick={pause}>Pausar</button>
          <button className="btn btn-primary" onClick={resume}>Continuar</button>

          <button className="btn btn-danger" onClick={() => {
            const time = new Date();

            // Decidindo qual tempo usar
            let minutos;
            if (modo === 'Foco') {
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
        </div>


        {mostrarAviso && (
          <div className="alerta-customizado">
            <h2>⏰ Acabou o tempo!</h2>
            <p>Hora de trocar de modo.</p>
            <button
              className="alerta-botao"
              onClick={() => {
                // 1. A primeira coisa é esconder esse aviso da tela
                setMostrarAviso(false);

                // 2. Preparamos o relógio
                const time = new Date();
                let proximosMinutos;

                // 3. A Lógica da troca: Se eu estava focando, agora vou descansar
                if (modo === 'Foco') {
                  setModo('Descanso'); // Avisa o React para trocar a palavra na tela
                  proximosMinutos = tempoDescanso; // Pega o tempo de descanso que você digitou
                }
                // Se eu estava descansando, agora volto a focar
                else {
                  setModo('Foco');
                  proximosMinutos = tempoFoco;
                }

                // 4. Faz a matemática e manda o cronômetro rodar de novo!
                time.setSeconds(time.getSeconds() + (proximosMinutos * 60));
                restart(time);
              }}
            >
              Beleza, entendi
            </button>
          </div>
        )}

      </div>
    </>
  );
}

export default App;

// Adicionar funionabilidades a mais nos botões e corrigir possíveis bugs