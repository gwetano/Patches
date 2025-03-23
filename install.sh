#!/bin/bash

# Imposta variabili per il percorso dell'AppImage e del file .desktop
APPIMAGE_PATH="$PWD/dist/Patches-1.0.3.AppImage"
INSTALL_DIR="/opt/patches"  # Puoi usare una directory di tua scelta
DESKTOP_FILE="$HOME/.local/share/applications/patches.desktop"
PATCH_FOLDER="$HOME/Documents/Patches"


#installo patches
npm run build

# Controlla se il file AppImage esiste
if [[ ! -f "$APPIMAGE_PATH" ]]; then
  echo "Errore: file AppImage non trovato in $APPIMAGE_PATH"
  exit 1
fi

# Crea la directory di destinazione se non esiste
sudo mkdir -p "$INSTALL_DIR"

mkdir -p "$PATCH_FOLDER"
cp "$PWD/snippet.json" "$PATCH_FOLDER/"
cp -r "$PWD/img" "$PATCH_FOLDER/"


# Copia l'AppImage nella directory di destinazione
sudo cp "$APPIMAGE_PATH" "$INSTALL_DIR/"

# Rendi l'AppImage eseguibile
sudo chmod +x "$INSTALL_DIR/Patches-1.0.3.AppImage"


# Crea un file .desktop per l'app
echo "[Desktop Entry]
Version=1.0
Name=Patches
Comment=App Patches
Exec=$INSTALL_DIR/Patches-1.0.3.AppImage
Icon=patches-icon
Terminal=false
Type=Application
Categories=Utility;
" > "$DESKTOP_FILE"

# Rendi eseguibile il file .desktop
chmod +x "$DESKTOP_FILE"

# Aggiungi l'app al menu delle applicazioni
update-desktop-database ~/.local/share/applications/

# Mostra un messaggio di successo
echo "Patches è stato installato correttamente. Puoi trovarlo nel menu delle applicazioni."
