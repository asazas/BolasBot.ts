# BolasBot.ts
El bot de las bolas en TypeScript

## Requisitos

 - Node.js 16.9.0 o superior.

## Dependencias opcionales (bash)
 - fortunes-es

## Instrucciones de ejecución

1. Instalar dependencias -> `npm install`
2. Editar `config_example.json`: introducir credenciales de acceso a las APIs de Discord y Twitch.
3. Renombrar `config_example.json` a `config.json`.
4. Ejecutar `node deploy-global-commands.js` para desplegar los comandos en Discord.
5. Ejecutar `node index.js`