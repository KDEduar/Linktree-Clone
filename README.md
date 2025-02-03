This is a proyect : [TarreDev: Clon de LinkTree](https://www.youtube.com/watch?v=GFQJDeNkvzk)
Minuto 3:50:16
## Getting Started


## 1. Subir Cambios a GitHub
git add .
git commit -m "Descripción de los cambios realizados"
git push origin main

## 2. Retroceder Cambios
- Antes de Hacer commit -
Si editaste archivos y quieres deshacer esos cambios antes de hacer un commit:

git checkout -- nombre-del-archivo
O para deshacer todos los cambios no confirmados:

git reset --hard

- Después de Hacer commit -
Si ya hiciste un commit pero no has subido (push) los cambios:

git reset --soft HEAD~1
Esto deshace el último commit, pero mantiene los archivos modificados en el área de staging.

Si ya subiste los cambios a GitHub y necesitas retroceder, usa:

git revert <ID_DEL_COMMIT>
git push origin main
Esto crea un nuevo commit que revierte el commit especificado.

## 3. Creación y Manejo de Ramas
Usar ramas es útil para trabajar en nuevas funcionalidades o probar cambios sin afectar la rama principal (main). Así lo haces:

- Crear una Nueva Rama -
git checkout -b nombre-rama
Esto crea una nueva rama y automáticamente te mueve a ella.

- Subir la Nueva Rama a GitHub -
Después de hacer cambios y commits en tu rama, sube la rama al repositorio remoto:
git push origin nombre-rama
- Unir Ramas al Main -
Cuando estés listo para unir los cambios de la rama al main, vuelve a main:

git checkout main
Luego, combina la rama:

git merge nombre-rama
Finalmente, sube los cambios:

git push origin main


## 4. Consejo: Crear una Rama para Cada Nueva Funcionalidad
Cada vez que trabajes en una nueva funcionalidad o cambio significativo, crea una nueva rama. Esto te permite experimentar y, si algo sale mal, puedes regresar al main sin problema.

Por ejemplo:
- Crea una rama para trabajar en una funcionalidad específica: -

git checkout -b feature-boton-nuevo
Haz cambios, realiza commits y súbelos:

git add .
git commit -m "Añadí un nuevo botón"
git push origin feature-boton-nuevo
Luego, cuando estés satisfecho, combina la rama con main como se mencionó antes.

## 5. Ver Todas las Ramas
Para ver las ramas locales y remotas, usa:

git branch -a


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Con npx prisma studio: Muestra los usuarios que están registrados en nuestro sitio.