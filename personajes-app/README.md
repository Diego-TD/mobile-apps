# Personajes app

<img src="public/personajes-app.png" width="400" alt="App screenshot" />


## Start app

Install dependencies
```
npm install
```

Run app in dev
```
npm run dev
```

## Aprendizajes
Repaso del uso de fetch para consultar datos de APIs y useEffect para ejecutar el fetch solo una vez y no en cada re-render.

## Dificultades encontradas:
Confusión de llaves al escribir el componente de la lista, se hacía el fetch de los datos pero no se renderizaba, y no tenía ningún error de syntaxis.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
