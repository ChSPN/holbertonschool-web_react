# Projet TypeScript - Holberton School
Ce dépôt contient 6 tâches réalisées dans le cadre de l'apprentissage de TypeScript pour le développement web chez Holberton School. Chaque tâche aborde des concepts clés tels que les interfaces, les fonctions, et l'héritage en TypeScript.

## Structure du projet

```plaintext
holbertonschool-web_react/
├── TypeScript/
│   ├── task_0/
│   │   ├── js/
│   │   │   └── main.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── webpack.config.js
│   ├── task_1/
│   │   ├── js/
│   │   │   └── main.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── webpack.config.js
│   ├── task_4/
│   │   ├── js/
│   │   │   ├── main.ts
│   │   │   ├── subjects/
│   │   │   │   ├── Cpp.ts
│   │   │   │   ├── Java.ts
│   │   │   │   ├── React.ts
│   │   │   │   ├── Subject.ts
│   │   │   │   └── Teacher.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── webpack.config.js
│   └── task_5/
│       ├── js/
│       │   └── main.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── webpack.config.js
```

## Prérequis

- Node.js
- npm (Node Package Manager)

## Installation

1. Clonez le dépôt :

```sh
git clone https://github.com/ChSPN/holbertonschool-web_react
cd holbertonschool-web_react/TypeScript
```

2. Installez les dépendances pour chaque tâche :

```sh
cd task_0
npm install
cd ../task_1
npm install
cd ../task_4
npm install
cd ../task_5
npm install
```

## Compilation
Pour compiler les fichiers TypeScript avec Webpack, exécutez la commande suivante dans le répertoire de chaque tâche :
```sh
npm run build
```

## Exécution
Pour exécuter le serveur de développement Webpack, utilisez la commande suivante dans le répertoire de chaque tâche :
```sh
npm start
```

## Configuration
`tsconfig.json`
Le fichier `tsconfig.json` contient la configuration TypeScript pour chaque tâche. Voici un exemple de configuration :

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["./js/**/*"]
}
```

## webpack.config.js
Le fichier webpack.config.js contient la configuration Webpack pour chaque tâche. Voici un exemple de configuration :

```javascript
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

## Auteurs
Charlène SCOMPARIN

## Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.