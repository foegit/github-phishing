const Entry = require('../db/models/entry');

async function handleData(req, res) {
  const { username, password } = req.body;

  const entry = new Entry({
    username,
    password,
  });
  console.log(entry);
  try {
    await entry.save();
    res.send('ok');
  } catch (err) {
    res.status(502);
    res.end();
  }
}

module.exports = {
  handleData,
};