const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Percorso file JSON
const hostsFile = path.join(__dirname, 'data', 'hosts.json');

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route registrazione host
app.post('/register-host', (req, res) => {
  const newHost = req.body;

  // Legge i dati attuali
  let hosts = [];
  if (fs.existsSync(hostsFile)) {
    const data = fs.readFileSync(hostsFile);
    hosts = JSON.parse(data);
  }

  // Aggiunge nuovo host
  hosts.push(newHost);

  // Salva di nuovo
  fs.writeFileSync(hostsFile, JSON.stringify(hosts, null, 2));

  res.redirect('/host-login.html');
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});

// LOGIN HOST
app.post('/login-host', (req, res) => {
  const { email, password } = req.body;

  // Legge i dati salvati
  let hosts = [];
  if (fs.existsSync(hostsFile)) {
    const data = fs.readFileSync(hostsFile);
    hosts = JSON.parse(data);
  }

  // Cerca l'utente
  const user = hosts.find(h => h.email === email && h.password === password);

  if (!user) {
    return res.send('Credenziali non valide. <a href="/host-login.html">Riprova</a>');
  }

  // Login riuscito → reindirizza alla dashboard
  res.redirect('/dashboard-host.html');
});
// Percorso file per strutture
const propertiesFile = path.join(__dirname, 'data', 'properties.json');

// Salva una nuova struttura
app.post('/add-property', (req, res) => {
  const newProperty = req.body;

  let properties = [];
  if (fs.existsSync(propertiesFile)) {
    const data = fs.readFileSync(propertiesFile);
    properties = JSON.parse(data);
  }

  properties.push(newProperty);
  fs.writeFileSync(propertiesFile, JSON.stringify(properties, null, 2));

  res.send('Struttura aggiunta con successo! <a href="/dashboard-host.html">Torna alla dashboard</a>');
});
// API: restituisce le strutture salvate
app.get('/api/host/properties', (req, res) => {
  if (fs.existsSync(propertiesFile)) {
    const data = fs.readFileSync(propertiesFile);
    const properties = JSON.parse(data);
    res.json(properties);
  } else {
    res.json([]);
  }
});

// Percorso file per pulizie
const cleaningFile = path.join(__dirname, 'data', 'cleaning-tasks.json');

// Salva nuova richiesta pulizia
app.post('/add-cleaning-task', (req, res) => {
  const newTask = req.body;

  let tasks = [];
  if (fs.existsSync(cleaningFile)) {
    const data = fs.readFileSync(cleaningFile);
    tasks = JSON.parse(data);
  }

  tasks.push(newTask);
  fs.writeFileSync(cleaningFile, JSON.stringify(tasks, null, 2));

  res.send('Pulizia richiesta con successo! <a href="/dashboard-host.html">Torna alla dashboard</a>');
});

// API: restituisce le pulizie richieste
app.get('/api/host/cleaning-tasks', (req, res) => {
  if (fs.existsSync(cleaningFile)) {
    const data = fs.readFileSync(cleaningFile);
    const tasks = JSON.parse(data);
    res.json(tasks);
  } else {
    res.json([]);
  }
});
