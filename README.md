# 🧩 Reto 3 — Manipulación del DOM con jQuery

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![jQuery](https://img.shields.io/badge/jQuery-3.6.0-0769AD?style=for-the-badge&logo=jquery&logoColor=white)](https://jquery.com/)
[![Curso](https://img.shields.io/badge/Curso-Código_Samurái-blue?style=for-the-badge)]()
[![Status](https://img.shields.io/badge/Status-Completado-success?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> **Proyecto del curso Código Samurái (Desarrollo Web Frameworks 3)** que demuestra la manipulación del DOM mediante **jQuery 3.6.0**: selección, modificación y eliminación de elementos de forma dinámica e interactiva.

![Estado inicial](./capturas/01-estado-inicial.png)

---

## 📋 Descripción

Proyecto educativo que ejemplifica las operaciones fundamentales de **jQuery** sobre el DOM:

- **Selección** de elementos por etiqueta, clase e ID.
- **Modificación** de estilos y contenido en tiempo real.
- **Eliminación** y **adición** dinámica de elementos.
- **Animaciones** (`fadeIn`, `fadeOut`, `slideUp`, `slideDown`).
- **Gestión de eventos** (envío de formulario, clics).

El objetivo es demostrar de forma práctica cómo jQuery simplifica las operaciones que en JavaScript puro requerirían mucho más código.

---

## 🛠️ Tecnologías utilizadas

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/jQuery-3.6.0-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery"/>
</p>

| Herramienta | Uso |
|---|---|
| **HTML5** | Estructura semántica del documento |
| **CSS3** | Estilos y presentación visual |
| **jQuery 3.6.0** | Manipulación del DOM vía CDN |

---

## 📁 Estructura del proyecto

```
Reto3_JQueryconDOM/
│
├── index.html                  # Página principal
├── styles.css                  # Estilos CSS
├── scripts.js                  # Lógica jQuery
│
├── capturas/                   # Capturas de pantalla
│   ├── 01-estado-inicial.png
│   ├── 02-color-parrafos.png
│   ├── 03-borde-divs.png
│   ├── 04-elemento-eliminado.png
│   ├── 05-parrafos-ocultos.png
│   └── 06-consola-jquery.png
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## ✨ Funcionalidades implementadas

| Botón / Acción | Método jQuery usado |
|---|---|
| Cambiar color de párrafos | `.css()` |
| Añadir borde a los divs | `.css()` |
| Eliminar último elemento de la lista | `.last()`, `.fadeOut()`, `.remove()` |
| Añadir elemento a la lista | `$()`, `.appendTo()`, `.fadeIn()` |
| Ocultar / Mostrar párrafos | `.slideUp()`, `.slideDown()` |
| Envío del formulario | `.on('submit')`, `.val()`, `.reset()` |

---

## 🎯 Tipos de selecciones demostradas

| Tipo | Ejemplo | Descripción |
|---|---|---|
| **Por etiqueta** | `$("p")` | Selecciona todos los párrafos |
| **Por clase** | `$(".parrafo")`, `$(".caja")` | Selecciona por clase CSS |
| **Por ID** | `$("#lista-elementos")` | Selecciona un único elemento |

---

## 🚀 Cómo ejecutar

1. **Clona el repositorio** (o descarga los archivos):
   ```bash
   git clone https://github.com/jdthgp27/Reto3_JQueryconDOM.git
   cd Reto3_JQueryconDOM
   ```

2. **Abre el archivo `index.html`** en tu navegador (Chrome, Firefox o Edge).

3. **Abre las DevTools** con `F12` y ve a la pestaña **Console** para ver los `console.log` de las selecciones jQuery.

4. **Prueba cada botón** de la sección "Acciones jQuery" para ver el resultado en tiempo real.

> **Nota**: no requiere instalación ni servidor local. Solo necesitas un navegador moderno.

---

## 📸 Capturas de pantalla

### 1. Estado inicial

![Estado inicial](./capturas/01-estado-inicial.png)

### 2. Cambio de color en los párrafos

![Color párrafos](./capturas/02-color-parrafos.png)

### 3. Borde añadido a los divs

![Borde divs](./capturas/03-borde-divs.png)

### 4. Elemento eliminado de la lista

![Elemento eliminado](./capturas/04-elemento-eliminado.png)

### 5. Párrafos ocultos

![Párrafos ocultos](./capturas/05-parrafos-ocultos.png)

### 6. Consola de jQuery

![Consola jQuery](./capturas/06-consola-jquery.png)

---

## 🎓 Aprendizajes del reto

- **Selección eficiente** de elementos con sintaxis CSS-like.
- **Encadenamiento de métodos** (`chaining`) para operaciones complejas en una sola línea.
- **Animaciones integradas** sin necesidad de librerías adicionales.
- **Manejo de eventos** con `.on()` de forma simplificada.
- **Diferencia clave con JavaScript puro**: jQuery reduce drásticamente la cantidad de código necesario.

---

## 🔄 Próximas mejoras

- [ ] Añadir **validación de formulario** más completa
- [ ] Incorporar **peticiones AJAX** para simular carga de datos
- [ ] Refactorizar con **JavaScript moderno (ES6+)** para comparar con jQuery
- [ ] Añadir **modo oscuro** con cambio de clase dinámico
- [ ] Publicar el proyecto en **GitHub Pages** para demo online

---

## 👤 Autora

**Judit Giravent Pineda**

- GitHub: [@everest9957](https://github.com/everest9957)
- LinkedIn: [linkedin.com/in/judit-giravent-27b167156](https://linkedin.com/in/judit-giravent-27b167156)
-

---

## 📜 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

*Proyecto académico · Código Samurái · Desarrollo Web Frameworks 3*

---

⭐ Si este proyecto te ha resultado útil, considera darle una estrella en GitHub.