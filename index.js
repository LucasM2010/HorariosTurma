const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


const horarios = {
  "Segunda-Feira": [
    {"Disciplina": "Aplicações Orientada a Serviços", "Sala": "BLOCO B - 201", "Professor": "Márcio Augusto"},
    {"Disciplina": "Inteligência Artificial Aplicada", "Sala": "BLOCO G - 107", "Professor": "lago Richard"}
  ],
  "Terça-Feira": [
    {"Disciplina": "Processos de Teste de Software", "Sala": "BLOCO G - 107", "Professor": "Daniel Bezerra"},
    {"Disciplina": "Libras", "Sala": "BLOCO D 606", "Professor": "Izabelly Correia"}
  ],
  "Quarta-Feira": [
    {"Disciplina": "Projeto Integrador V", "Sala": "BLOCO A - 612", "Professor": "lago Richard"},
    {"Disciplina": "Programação para Dispositivos Móveis", "Sala": "BLOCO G - 107", "Professor": "Daniel Bezerra"}
  ],
  "Quinta-Feira": [
    {"Disciplina": "Aplicações Orientada a Serviços", "Sala": "BLOCO B - 201", "Professor": "Márcio Augusto"},
    {"Disciplina": "Inteligência Artificial Aplicada", "Sala": "BLOCO G - 107", "Professor": "lago Richard"}
  ],
  "Sexta-Feira": [
    {"Disciplina": "Processos de Teste de Software", "Sala": "BLOCO G - 107", "Professor": "Daniel Bezerra"},
    {"Disciplina": "Libras", "Sala": "BLOCO D 606", "Professor": "Izabelly Correia"}
  ],
  "Sábado": [
    {"Disciplina": "Conceitos de Sistemas Operacionais", "Sala": "BLOCO B-202", "Professor": "Gabriel Fernandes"},
    {"Disciplina": "Programação para Dispositivos Móveis", "Sala": "BLOCO B-202", "Professor": "Daniel Bezerra"}
  ]
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/horarios/:dia', (req, res) => {
  const dia = req.params.dia;
  const aulas = horarios[dia] || [];
  res.json({ dia, aulas });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
