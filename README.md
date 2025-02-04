![Patches Logo](./img/icon.png)

## Descrizione
**Patches** è un'applicazione desktop progettata per la gestione efficiente di snippet di codice. Consente di archiviare, organizzare e recuperare rapidamente frammenti di codice, facilitando il lavoro di programmatori e sviluppatori.

## Funzionalità
- Salvataggio di snippet con titolo e linguaggio di programmazione associato
- Ricerca avanzata per parole chiave
- Copia immediata degli snippet negli appunti
- Interfaccia utente minimalista e intuitiva

## Installazione
Se desideri contribuire allo sviluppo o personalizzare l'applicazione, segui questi passaggi:

### Requisiti
Assicurati di avere installati i seguenti strumenti:
- [Node.js](https://nodejs.org/) (versione consigliata: 16.x o superiore)
- [Git](https://git-scm.com/)
- [Electron](https://www.electronjs.org/)

### Procedura di installazione
Dato che i file di setup non sono disponibili, per utilizzare Patches è necessario scaricare il progetto e avviarlo manualmente.
1. Clona il repository:
   ```bash
   git clone https://github.com/gwetano/Patches.git
   cd Patches
   ```
2. Installa le dipendenze necessarie e crea un progetto Electron:
   ```bash
   npm install
   npx electron .
   ```
3. Avvia l'applicazione in modalità sviluppo:
   ```bash
   npm start
   ```
4. Per generare un pacchetto eseguibile:
   ```bash
   npm run build
   ```
   Il pacchetto eseguibile sarà generato nella directory `/dist`, per runnarlo `/dist/win-unpacked/Patches.exe`, per condividerlo `/dist/Patches Setup VERSION.exe`.  
   Patches è stato sviluppato con Visual Studio Code, è per questo motivo presente il file di configurazione in `.vscode/`.

## Panoramica del Funzionamento
All'avvio dell'applicazione, troverai tre snippet di codice predefiniti, che possono essere liberamente eliminati per personalizzare il tuo archivio. Puoi aggiungere nuovi snippet cliccando sul pulsante di aggiunta, specificando un titolo, il linguaggio di programmazione e il contenuto del codice. Gli snippet salvati possono essere facilmente ricercati tramite la barra di ricerca e copiati negli appunti con un semplice clic.

## Contributi
Se desideri contribuire al progetto, puoi aprire una **pull request** o segnalare problemi tramite la sezione **Issues** su GitHub.

## Licenza
Questo progetto è rilasciato sotto licenza **MIT**.

© 2025 Gwetano - Patches

