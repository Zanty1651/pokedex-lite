# 📱 Pokedex Lite - Guía Paso a Paso

¡Bienvenido a **Pokedex Lite**! Esta aplicación está construida con **React Native**, **TypeScript** y **Expo Router**, consumiendo datos en tiempo real de la [PokeAPI](https://pokeapi.co/).

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu computadora:

1. **Node.js** (versión 18 o superior): [Descargar Node.js](https://nodejs.org/)
2. **VS Code** (o tu editor de código preferido).
3. *(Opcional)* La aplicación **Expo Go** en tu celular (disponible en Play Store y App Store) o **Android Studio** para emulador.

---

## 🚀 Paso a Paso para Correr la Aplicación

### Paso 1: Abrir la terminal en la carpeta del proyecto
Abre tu terminal en la ruta del proyecto:
```bash
c:\Users\Zanty\Documents\PROGRAMACION\Edwin\PokeAPI
```

---

### Paso 2: Instalar las dependencias
Ejecuta el siguiente comando para descargar e instalar todas las librerías necesarias (Expo, React Native, Expo Router):

```bash
npm install
```

> 💡 **Nota:** Esto creará la carpeta `node_modules` con todo lo necesario para ejecutar la app.

---

### Paso 3: Iniciar el servidor de desarrollo (Metro)
Corre el servidor con el siguiente comando:

```bash
npx expo start
```

Verás un código QR en la terminal y varias opciones interactivas.

---

## 💻 Opciones para Probar la Aplicación

Una vez ejecutado `npx expo start`, elige la opción que prefieras:

### 🌐 Opción A: Modo Web (El más rápido y recomendado para probar)
Presiona la tecla **`w`** en la terminal.
- Se abrirá automáticamente tu navegador web con la Pokedex.
- **Prueba el diseño responsivo:** Achica y agranda la ventana del navegador. Verás cómo la lista cambia de 1, 2 a 3 columnas automáticamente.

---

### 📱 Opción B: En tu celular físico (Expo Go)
1. Abre la app **Expo Go** en tu teléfono.
2. **Android:** Escanea el código QR que aparece en la terminal.
3. **iOS:** Abre la cámara nativa, escanea el código QR y toca el banner de Expo Go.

---

### 🤖 Opción C: Emulador de Android (Android Studio)
1. Abre Android Studio e inicia tu dispositivo virtual (AVD).
2. Presiona la tecla **`a`** en la terminal para que Expo instale y abra la app en el emulador.

---

## 🔍 Funcionalidades para Probar

1. **Pantalla Principal (`/`)**:
   - Muestra los primeros 20 Pokémon.
   - Mientras cargan los datos, verás el indicador de carga (`ActivityIndicator`).
   - La lista adapta el número de columnas según el ancho de pantalla.

2. **Navegación al Detalle (`/pokemon/[name]`)**:
   - Toca cualquier Pokémon de la lista.
   - Te llevará a la pantalla de detalle mostrando su imagen, nombre, tipos, altura, peso y estadísticas base.
   - Presiona el botón nativo **"Atrás"** en el header para regresar a la lista.

---

## 📂 Estructura del Proyecto

```text
PokeAPI/
├── app/                  # Rutas y pantallas de Expo Router
│   ├── _layout.tsx       # Enrutador Stack global
│   ├── index.tsx         # Lista principal de Pokémon
│   └── pokemon/
│       └── [name].tsx    # Detalle dinámico del Pokémon
├── hooks/                # Hooks personalizados con lógica fetch
│   ├── usePokemonList.ts
│   └── usePokemonDetail.ts
├── types/                # Interfaces TypeScript de la PokeAPI
│   └── pokemon.ts
├── package.json          # Dependencias del proyecto
└── README.md             # Guía de uso
```
