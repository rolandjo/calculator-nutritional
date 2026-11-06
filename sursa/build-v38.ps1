$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
node build.mjs offline ..\calculator_nutritional_v38.html
if ($LASTEXITCODE -ne 0) { throw 'Generarea variantei offline a eșuat.' }
node build.mjs sites ..\calculator_nutritional_v38_google_sites.html
if ($LASTEXITCODE -ne 0) { throw 'Generarea variantei Google Sites a eșuat.' }
Write-Host 'V38: fișierele offline și Google Sites au fost generate.' -ForegroundColor Green
