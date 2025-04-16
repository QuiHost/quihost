const fs = require('fs');
const path = require('path');

// Funzione per verificare se una cartella contiene un file page.tsx
function hasPageFile(dirPath) {
  return fs.existsSync(path.join(dirPath, 'page.tsx')) || fs.existsSync(path.join(dirPath, 'page.js'));
}

// Funzione ricorsiva per scansionare le cartelle e trovare tutte le route
function scanDir(dir, basePath = '', routes = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // Ignora le cartelle che iniziano con _
      if (item.startsWith('_')) continue;
      
      // Gestisci i gruppi di route (parentesi)
      const isRouteGroup = item.startsWith('(') && item.endsWith(')');
      const newBasePath = isRouteGroup ? basePath : path.join(basePath, item);
      
      // Verifica se la cartella corrente contiene un file page.tsx
      if (hasPageFile(itemPath)) {
        routes.push(path.join('/', newBasePath).replace(/\\/g, '/'));
      }
      
      // Scansiona ricorsivamente la sottocartella
      scanDir(itemPath, newBasePath, routes);
    }
  }
  
  return routes;
}

// Scansiona la directory app
const appDir = path.join(__dirname, 'app');
const routes = scanDir(appDir);

console.log('Route trovate:');
routes.forEach(route => console.log(route));

// Cerca potenziali conflitti (route che potrebbero sovrapporsi)
const conflicts = [];

for (let i = 0; i < routes.length; i++) {
  for (let j = i + 1; j < routes.length; j++) {
    const routeA = routes[i].replace(/\/$/, '');
    const routeB = routes[j].replace(/\/$/, '');
    
    if (routeA === routeB) {
      conflicts.push([routes[i], routes[j]]);
    }
  }
}

if (conflicts.length > 0) {
  console.log('\nPotenziali conflitti trovati:');
  conflicts.forEach(([a, b]) => console.log(`- ${a} e ${b}`));
} else {
  console.log('\nNessun conflitto trovato!');
}

// Scrivi i risultati in un file
fs.writeFileSync('routes.json', JSON.stringify({ routes, conflicts }, null, 2)); 