const express = require('express');
const app = express();
app.use(express.json());

// PLAG-1 : création de compte
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: 'Champs requis' });
  res.json({ msg: 'Compte créé' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
