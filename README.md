# Suave.SH

Página personal publicada en [suave.sh](https://suave.sh), con forma de sesión de terminal: `whoami`, `neofetch`, el stack, el trabajo y los enlaces aparecen como la salida de comandos.

Hecha con Vue 3 y Vite, sin más dependencias en tiempo de ejecución.

## Desarrollo

Requiere Node.js LTS.

```sh
npm install
npm run dev       # servidor local con recarga
npm run build     # build de producción en dist/
npm run preview   # sirve dist/ para revisarlo antes de publicar
```

## Publicación

Cada push a `main` construye el sitio y lo despliega en GitHub Pages (`.github/workflows/deploy.yaml`). El dominio lo define `public/CNAME`.

## Estructura

```
src/
  App.vue                 ventanas de terminal y enlaces
  components/
    Welcome.vue           whoami y roles con efecto de escritura
    Neofetch.vue          logo ASCII y datos del sistema
    Stack.vue             herramientas con su icono y color
    ProjectsList.vue      work.sh y productos
    Card.vue              tarjeta de enlace
    TerminalWindow.vue    marco de ventana
    ThemeToggle.vue       cambio de tema claro/oscuro
    giraffeAscii.js       el logo en arte ASCII
  composables/
    useTheme.js           tema según el sistema o la elección guardada
    useTypewriterLoop.js  efecto de escritura
  style.css               paleta, tokens y animación de salida
public/                   logo, favicon, imagen OG y fuente de iconos
fonts-src/                fuente de iconos completa (no se publica)
scripts/subset-font.sh    recorta la fuente de iconos
```

## Iconos

Los iconos vienen de [Symbols Nerd Font](https://www.nerdfonts.com/). La fuente completa pesa ~950 KB, así que `public/` solo lleva los glifos que usa la página (~7 KB).

Si agregas o cambias un icono en `src/`, regenera la fuente o el icono saldrá vacío:

```sh
pip install fonttools brotli
npm run subset-font
```

## Tema y accesibilidad

- El tema inicial sigue la preferencia del sistema; al cambiarlo con el botón se guarda la elección.
- Con `prefers-reduced-motion` no hay animaciones: el texto aparece completo.
- Los glifos decorativos están ocultos para lectores de pantalla, y cada ventana es una región con nombre propio.
