const postsData = require('../data/posts-data.js')
// index
function postsJson(req, res) {
    console.log(req.query.tag);
    const tags = req.query.tags;
    if (tags) {
        res.json(postsData.filter((post) => post.tags.includes(tags)))
    } else {
        res.json(postsData);
    }
};

// show
function postsShow(req, res) {
    res.json(postsData.find((posty) => posty.id === parseInt(req.params.id)));
};

// store
function postsStore(req, res) {
    res.send('Creazione di un nuovo post');
};
// destroy
function postsDelete(req, res) {
    const indexDaRimuovere = postsData.findIndex((posty) => posty.id === parseInt(req.params.id))
    postsData.splice(
        indexDaRimuovere, 1
    );
    console.log(postsData);
    res.sendStatus(204);
};
//update
function postsUpdate(req, res) {
    res.send('Aggiorna post ' + req.params.id);
};

module.exports = { index: postsJson, show: postsShow, store: postsStore, delete: postsDelete, update: postsUpdate }