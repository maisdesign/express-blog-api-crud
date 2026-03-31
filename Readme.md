# express-blog-api-crud

## Esercizio

### Milestone 1

Come prima cosa, creiamo un controller per i nostri post, in una cartella `controllers`.

All'interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).

Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.

Testiamo su Postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.

### Milestone 2

Per iniziare, creiamo una cartella `data` in cui creare un file che contenga ed esporti l'array di posts.
Importiamo questo file in cima al controller.

Ora passiamo ad implementare le logiche delle nostre CRUD:

- **Index** dovrà restituire la lista dei post in formato JSON
- **Show** dovrà restituire un singolo post in formato JSON
- **Destroy** dovrà eliminare un singolo post dalla lista, stampare nel terminale la lista aggiornata, e rispondere con stato `204` e nessun contenuto

### Bonus

- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente; in caso contrario rispondere con stato `404` e un messaggio d'errore in formato JSON

---

## Indice

- [Installazione](#installazione)
- [Avvio](#avvio)
- [Script disponibili](#script-disponibili)
- [Stack](#stack)
- [Struttura del progetto](#struttura-del-progetto)
- [Endpoint](#endpoint)
- [Roadmap](#roadmap)

## Installazione

```bash
npm install
```

## Avvio

```bash
npm run watch
```

## Script disponibili

| Comando | Descrizione |
| --- | --- |
| `npm start` | Avvia il server |
| `npm run watch` | Avvia il server con auto-reload |

## Stack

- Node.js
- Express

## Struttura del progetto

```text
.
├─ controllers/
│  └─ postsController.js
├─ data/
│  └─ posts.js
├─ routers/
│  └─ posts.js
├─ app.js
├─ package.json
└─ Readme.md
```

## Endpoint

| Metodo | Percorso | Azione | Descrizione |
| --- | --- | --- | --- |
| `GET` | `/posts` | Index | Lista di tutti i post (JSON) |
| `GET` | `/posts/:id` | Show | Singolo post (JSON) |
| `POST` | `/posts` | Create | Crea un nuovo post |
| `PUT` | `/posts/:id` | Update | Aggiorna un post esistente |
| `DELETE` | `/posts/:id` | Destroy | Elimina un post |

## Roadmap

- [x] Setup base (app.js + Express)
- [x] Creare il router `routers/posts.js`
- [x] Definire le rotte CRUD per i post
- [x] Registrare il router in `app.js`
- [ ] Creare il controller `controllers/postsController.js`
- [ ] Spostare la logica dal router al controller
- [ ] Creare `data/posts.js` con l'array dei post
- [ ] Index: restituire lista post in JSON
- [ ] Show: restituire singolo post in JSON
- [ ] Destroy: eliminare post e rispondere con 204
- [ ] Bonus: filtro per Tag nella Index
- [ ] Bonus: gestione 404 in Show e Destroy
