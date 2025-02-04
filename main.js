const { app, BrowserWindow, Menu, ipcMain, clipboard } = require('electron');
const path = require('path');
const fs = require('fs');

const snippetsFile = path.join(__dirname, 'snippet.json');

function escapeHTML(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}


function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    icon: path.join(__dirname, 'img', 'logo.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false 
    }
  });

  Menu.setApplicationMenu(null);
  win.loadFile('index.html');
}

function readSnippets() {
  try {
    if (fs.existsSync(snippetsFile)) {
      const data = fs.readFileSync(snippetsFile, 'utf-8');
      return JSON.parse(data);
    } else {
      console.log('File snippet.json non trovato. Creazione di un nuovo file...');
      fs.writeFileSync(snippetsFile, '[]'); 
      return [];
    }
  } catch (error) {
    console.error('Errore durante la lettura del file JSON:', error);
    return [];
  }
}

function saveSnippet(snippet) {
  try {
    const snippets = readSnippets();
    snippet.code = escapeHTML(snippet.code); // Converti l'HTML prima di salvare
    snippets.push(snippet);
    fs.writeFileSync(snippetsFile, JSON.stringify(snippets, null, 2));
    console.log('Snippet salvato con successo:', snippet);
  } catch (error) {
    console.error('Errore durante il salvataggio dello snippet:', error);
  }
}


function deleteSnippet(title) {
  try {
    let snippets = readSnippets();
    snippets = snippets.filter(snippet => snippet.title !== title);
    fs.writeFileSync(snippetsFile, JSON.stringify(snippets, null, 2));
    console.log(`Snippet "${title}" eliminato con successo.`);
    return snippets;
  } catch (error) {
    console.error('Errore durante eliminazione dello snippet:', error);
    return readSnippets();
  }
}

ipcMain.on('get-snippets', (event) => {
  const snippets = readSnippets();
  event.reply('snippets-list', snippets);
});

ipcMain.on('save-snippet', (event, snippet) => {
  saveSnippet(snippet);
  event.reply('snippet-saved', true);
});

ipcMain.on('delete-snippet', (event, title) => {
  const updatedSnippets = deleteSnippet(title);
  event.reply('snippets-list', updatedSnippets);
});

ipcMain.on('copy-to-clipboard', (event, text) => {
  clipboard.write({
    text: text, 
    html: text 
  });
  console.log(`Snippet copiato in modo sicuro: ${text}`);
});


app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});