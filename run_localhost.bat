@echo off
title PromptGenSuite - Localhost
cd /d D:\PROMPTGEN

:: Jalankan server di terminal terpisah
start "PromptGenSuite Server" cmd /k "cd /d D:\PROMPTGEN && npm run dev"

:: Tunggu sebentar biar server nyala
timeout /t 5 >nul

:: Buka browser
start http://localhost:5173

:: Buat shortcut di Desktop (sekali saja)
set "SHORTCUT_PATH=%USERPROFILE%\Desktop\PromptGenSuite.lnk"
if not exist "%SHORTCUT_PATH%" (
    powershell -Command ^
    "$ws = New-Object -ComObject WScript.Shell; ^
    $s = $ws.CreateShortcut('%SHORTCUT_PATH%'); ^
    $s.TargetPath = 'D:\PROMPTGEN\run_localhost.bat'; ^
    $s.WorkingDirectory = 'D:\PROMPTGEN'; ^
    $s.IconLocation = '%SystemRoot%\System32\shell32.dll, 167'; ^
    $s.Save()"
)

exit
