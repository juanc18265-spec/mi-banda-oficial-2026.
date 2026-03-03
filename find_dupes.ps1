$file = 'c:\Users\Usuario\Desktop\BLOQUES 3,4\app_banda_sinfonica.index.html\index.html'
$content = Get-Content $file -Raw -Encoding UTF8
$matches = [regex]::Matches($content, 'function\s+([a-zA-Z0-9_]+)\s*\(')
$groups = $matches | Group-Object { $_.Groups[1].Value } | Where-Object { $_.Count -gt 1 }

foreach ($g in $groups) {
    Write-Host "Duplicate function: $($g.Name) ($($g.Count) times)" -ForegroundColor Yellow
    foreach ($item in $g.Group) {
        # Find line number (inefficient but works for a few dupes)
        $lineNum = (Select-String -InputObject $content -Pattern [regex]::Escape($item.Value)).LineNumber
        Write-Host "  $($item.Value) (around line...)"
    }
}
