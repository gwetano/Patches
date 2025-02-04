const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('index.html')) {
    ipcRenderer.send('get-snippets');

    ipcRenderer.on('snippets-list', (event, snippets) => {
      console.log('Snippet ricevuti:', snippets); 
      const snippetsList = document.getElementById('snippetsList');
      snippetsList.innerHTML = '';

      if (snippets.length === 0) {
        snippetsList.innerHTML = '<p>Nessuno snippet trovato.</p>';
      } else {
        snippets.forEach(snippet => {
          const snippetDiv = document.createElement('div');
          snippetDiv.className = 'snippet';
          snippetDiv.setAttribute('data-keywords', `${snippet.title} ${snippet.language} ${snippet.code}`.toLowerCase());
          snippetDiv.innerHTML = `
            <h3>${snippet.title} (${snippet.language})</h3>
            <pre class="code-snippet" title="Clicca per copiare"><code>${snippet.code}</code></pre>
            <button class="delete-btn" data-title="${snippet.title}">✖</button>
          `;
        
          snippetsList.appendChild(snippetDiv);
        });

        function decodeHTML(str) {
          const textarea = document.createElement("textarea");
          textarea.innerHTML = str;
          return textarea.value;
        }
        
        document.querySelectorAll('.snippet').forEach(pre => {
          pre.addEventListener('click', () => {
            const codeText = pre.querySelector('code').textContent;
            const decodedCode = decodeHTML(codeText);
            ipcRenderer.send('copy-to-clipboard', decodedCode);
          });
        });
        
        

        document.querySelectorAll('.delete-btn').forEach(button => {
          button.addEventListener('click', (e) => {
            const title = e.target.getAttribute('data-title');
            if (confirm(`DELETE ${title}?`)) {
              ipcRenderer.send('delete-snippet', title);
            }
          });
        });

        searchInput.addEventListener('input', () => {
          const query = searchInput.value.toLowerCase();
          const snippets = document.querySelectorAll('.snippet');
    
          snippets.forEach(snippet => {
            const keywords = snippet.getAttribute('data-keywords');
            if (!query || keywords.includes(query)) {
              snippet.style.display = 'block';
            } else {
              snippet.style.display = 'none';
            }
          });
        });
      }
    });
  }

  if (window.location.pathname.endsWith('add.html')) {
    const form = document.getElementById('addSnippetForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const language = document.getElementById('language').value;
      const code = document.getElementById('code').value;

      if (!title || !language || !code) {
        alert('Compila tutti i campi!');
        return;
      }

      const snippet = { title, language, code };
      console.log('Invio snippet al processo principale:', snippet); 
      ipcRenderer.send('save-snippet', snippet);

      ipcRenderer.on('snippet-saved', () => {
        console.log('Snippet salvato, reindirizzamento...'); 
        window.location.href = 'index.html';
      });
    });
  }
});
