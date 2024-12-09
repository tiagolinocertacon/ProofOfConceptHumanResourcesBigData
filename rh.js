const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT = 4000; // Porta diferente do outro servidor

// Função para gerar um check-in aleatório
const generateCheckin = (id, id_okr, id_okr_kr) => ({
    id,
    id_profile: 1,
    id_okr,
    id_okr_kr,
    value: faker.number.float({ min: 0, max: 100, precision: 0.01 }),
    status: faker.number.float({ min: 0, max: 100, precision: 0.01 }).toFixed(2),
    description: `<p>${faker.lorem.sentence()}</p>`,
    dt_create: faker.date.past().toISOString(),
    profile: {
        id: 1,
        name: faker.person.firstName(),
    },
});

// Função para gerar um resultado-chave aleatório
const generateKeyResult = (id, id_okr) => ({
    id,
    id_okr,
    id_owner: 1,
    text: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    goal: 100,
    start_value: 0,
    type: faker.helpers.arrayElement([1, 2]),
    currency_type: 'R$',
    signal: faker.helpers.arrayElement([1, -1]),
    weight: null,
    status: 0,
    owner: {
        id: 1,
        name: faker.person.firstName(),
    },
    checkins: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, (_, index) =>
        generateCheckin(faker.number.int(), id_okr, id)
    ),
    last_checkin_value: faker.number.float({ min: 0, max: 100, precision: 0.01 }),
});

// Função para gerar um objetivo aleatório
const generateObjective = (id, id_user) => {
    const id_okr = id;
    return {
        id_user: id_user,
        id: id_okr,
        id_parent: 0,
        id_owner: 1,
        id_department: faker.number.int({ min: 1000, max: 5000 }),
        objective: faker.company.catchPhrase(),
        percentage_status: faker.number.float({ min: 0, max: 100, precision: 0.01 }).toFixed(2),
        status: 0,
        private: faker.datatype.boolean() ? 1 : 0,
        people_allowed: null,
        people_edit: null,
        dt_start: faker.date.past().toISOString(),
        dt_end: faker.date.future().toISOString(),
        id_period: 0,
        signaling: faker.helpers.arrayElement([1, -1]),
        tags: [faker.word.noun()],
        key_results: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, (_, index) =>
            generateKeyResult(faker.number.int(), id_okr)
        ),
        parent: null,
        department: {
            id: faker.number.int({ min: 1000, max: 5000 }),
            name: faker.commerce.department(),
        },
    };
};

// Rota para obter os objetivos
app.get('/api/v1.0/objectives/:iduser', (req, res) => {
    const { iduser } = req.params;
    const totalObjectives = faker.number.int({ min: 1, max: 5 });
    const data = Array.from({ length: totalObjectives }, (_, index) =>
        generateObjective(faker.number.int(), iduser)
    );

    res.json({
        success: true,
        total_objectives: totalObjectives,
        data,
    });
});

app.listen(PORT, () => {
    console.log(`Servidor RH rodando na porta ${PORT}`);
});
