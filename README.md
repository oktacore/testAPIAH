# My actionhero Project

*visit www.actionherojs.com for more information*

## To install:
(assuming you have [node](http://nodejs.org/) and NPM installed)
instalación de ah-mongoose-plugin
* npm install ah-mongoose-plugin --save
* agregarlo al array de plugins: ./node_modules/.bin/actionhero link --name ah-mongoose-plugin


Instalar mongoose cli
* npm install -g mongoose-model-cli

Crear Action
* node_modules/.bin/actionhero generateAction --name=(nombre)Action

Crear Initializer
* node_modules/.bin/actionhero generateInitializer --name=(nombre)Init

Crear Task (Crear carpeta tasks en el directorio raíz por si lanza error)
* node_modules/.bin/actionhero generateTask --name=(nombre)Task
* en el archivo /config/tasks.js cambiar la variable *scheduler* a true
* cambiar también la variable *minTaskProcessors* a 1 y *maxTaskProcessors* a 1

`npm install`

## To Run:
`npm start`

## To Test:
`npm test`
