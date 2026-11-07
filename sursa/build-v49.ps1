$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
node build.mjs offline ..\calculator_nutritional_v49.html
if ($LASTEXITCODE -ne 0) { throw 'Generarea variantei offline a eșuat.' }
node build.mjs sites ..\calculator_nutritional_v49_google_sites.html
if ($LASTEXITCODE -ne 0) { throw 'Generarea variantei Google Sites a eșuat.' }
Write-Host 'V49: fișierele offline și Google Sites au fost generate.' -ForegroundColor Green
