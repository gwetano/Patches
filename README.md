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

### Dipendenze
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

### installazione Linux
Per installare Patches su Linux occorre eseguire:
 
   ```bash
   sh install.sh
   ```

### installazione Windows
Per installare Patches su Windows occorre eseguire:
 
   ```bash
   ./install.bat
   ```
Una volta eseguito l'installer la cartella `/dist` conterrà il pacchetto di installazione finale, per runnarlo `/dist/win-unpacked/Patches.exe`, per condividerlo `/dist/Patches Setup VERSION.exe`.  
Patches è stato sviluppato con Visual Studio Code, è per questo motivo presente il file di configurazione in `.vscode/`.

L'installer genera una cartella in `$HOME/Documents` chiamata Patches con tutte le risorse locali di cui ha bisogno.

## Panoramica del Funzionamento
All'avvio dell'applicazione, troverai tre snippet di codice predefiniti, che possono essere liberamente eliminati per personalizzare il tuo archivio. Puoi aggiungere nuovi snippet cliccando sul pulsante di aggiunta, specificando un titolo, il linguaggio di programmazione e il contenuto del codice. Gli snippet salvati possono essere facilmente ricercati tramite la barra di ricerca e copiati negli appunti con un semplice clic.

## Sviluppi futuri

* Language highlighting automatico
* Definizione di librerie di code snippet per definire un accesso più agevole

## Contributi
Se desideri contribuire al progetto, puoi aprire una **pull request** o segnalare problemi tramite la sezione **Issues** su GitHub.

## Licenza
Questo progetto è rilasciato sotto licenza **MIT**.

© 2025 - Patches

