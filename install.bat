@echo off
:: Definisci la variabile PATCH_FOLDER


:: Definisci la variabile PATCH_FOLDER
set PATCH_FOLDER=%USERPROFILE%\Documents\Patches

:: Verifica se la cartella esiste, altrimenti la crea
if not exist "%PATCH_FOLDER%" (
    mkdir "%PATCH_FOLDER%"
    echo La cartella "%PATCH_FOLDER%" è stata creata.
) else (
    echo La cartella "%PATCH_FOLDER%" esiste già.
)

copy "%CD%\snippet.json" "%PATCH_FOLDER%\"

xcopy "%CD%\img" "%PATCH_FOLDER%\" /E /I /H /Y

cd "%CD%"
npm run build
