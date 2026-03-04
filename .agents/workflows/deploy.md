---
description: Cómo deployar los cambios a Vercel automáticamente
---
// turbo-all

## Deploy a Vercel

1. Agregar los archivos cambiados a Git:
```
$env:PATH = "C:\Users\Usuario\AppData\Local\GitHubDesktop\app-3.5.5\resources\app\git\cmd;" + $env:PATH; git add -A
```

2. Crear un commit con un mensaje descriptivo:
```
$env:PATH = "C:\Users\Usuario\AppData\Local\GitHubDesktop\app-3.5.5\resources\app\git\cmd;" + $env:PATH; git commit -m "DESCRIPCION_DEL_CAMBIO"
```

3. Subir los cambios a GitHub (Vercel se actualiza automáticamente):
```
$env:PATH = "C:\Users\Usuario\AppData\Local\GitHubDesktop\app-3.5.5\resources\app\git\cmd;" + $env:PATH; git push origin main
```

**Nota**: El working directory siempre debe ser `c:\Users\Usuario\Desktop\BLOQUES 3,4\app_banda_sinfonica.index.html`
