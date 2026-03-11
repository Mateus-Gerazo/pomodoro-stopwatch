# 🍅 Pomodoro Stopwatch

Bem-vindo ao projeto **Pomodoro Stopwatch**! Este é um cronômetro Pomodoro interativo construído com React e Vite, criado para ajudar no gerenciamento de tempo através dos clássicos ciclos de Foco e Descanso.

## 🤖 Uma nota sobre o desenvolvimento (IA e Design)

Uma característica muito interessante deste projeto é como ele foi construído:
Toda a lógica de programação, o coração da estrutura de componentes React e o complexo gerenciamento de estado e tempo foram **desenvolvidos manualmente**. No entanto, aplicamos uma abordagem de produtividade moderna para a estética: **os estilos e o layout (os arquivos CSS) foram concebidos e gerados inteiramente por Inteligência Artificial**.

Explicar isso é importante porque demonstra como ferramentas de IA podem ser excelentes aliadas: enquanto o desenvolvedor pôde focar 100% da sua energia na lógica, regras de negócio e funcionamento do React, a IA atuou como uma designer assistente, criando toda a roupagem e beleza do layout em paralelo.

## 📂 O que tem nesses arquivos?

Aqui está uma explicação detalhada de cada parte formadora do nosso projeto:

* **`src/App.jsx`**: Este é o cérebro da aplicação, onde programamos toda a interatividade do usuário.
    * Gerencia a alternância dos estados (quando estamos em "Foco" ou em "Descanso").
    * Oferece os inputs para que o usuário informe seu próprio tempo.
    * Utiliza a biblioteca instalada `react-timer-hook` para gerir um relógio e contagem regressiva em tempo real.
    * Controla ativamente as diretivas lógicas dos botões (Pausar, Continuar e Reiniciar).
    * Lida com os Alertas de forma invisível, acionando o nosso "Modal de Troca de Tempo" exatamente no segundo em que o contador chega a zero.

* **`src/App.css` e `src/index.css`**: As "roupas" do nosso projeto (Feitas por IA 🪄).
    * Garantem as cores vibrantes, o visual moderno das caixas e a fluidez do sistema.
    * Agregam efeitos vitais, como o brilho num botão de Pausar e cores distintas para os diferentes Modos (Vermelho-Foco e Verde-Descanso).

* **`index.html`**: A porta de entrada principal. O arquivo único de HTML que atua como fundação; ele incorpora todo o código que construímos em JavaScript para exibi-lo no seu monitor.

* **`package.json` e `package-lock.json`**: Guarda as informações de identidade do projeto e, mais importante, registra os pacotes ou dependências exatas instaladas, para ditar à máquina o que ela precisa baixar para construir o app (ex: `react-timer-hook`, plugins do vite).

* **`vite.config.js` e `eslint.config.js`**: Nossos bastidores. Eles fazem as engrenagens silenciosas rodarem. O Vite garante uma atualização instantânea toda vez que salvamos um arquivo (Fast Refresh), enquanto o ESLint vigia nossa sintaxe para prevenir erros de digitação e assegurar as boas práticas.

## 🛠️ Como rodar no seu computador

Se quiser testar ou fazer alterações locais, siga os passos abaixo:

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Baixe o projeto e abra o diretório no seu editor de código (como o VSCode).
3. Abra um terminal na pasta do projeto e instale todas as engrenagens necessárias digitando:
   ```bash
   npm install
   ```
4. Em seguida, ligue os motores e inicie o servidor:
   ```bash
   npm run dev
   ```
5. Por fim, abra o link gerado (geralmente `http://localhost:5173`) no seu navegador e aproveite o foco!
