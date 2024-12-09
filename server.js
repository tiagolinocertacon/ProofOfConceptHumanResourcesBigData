const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT = 3000;

// Middleware para validar os headers obrigatórios
app.use((req, res, next) => {
    const version = req.header('Version');
    const appKey = req.header('App-Key');
    const userToken = req.header('User-Token');

    if (!version || !appKey || !userToken) {
        return res.status(400).json({
            error: 'Missing required headers: Version, App-Key, or User-Token',
        });
    }
    next();
});

// Função para gerar uma tarefa usando faker.js
const generateTask = (id) => ({
    id,
    title: faker.company.catchPhrase(),
    is_working_on: faker.datatype.boolean(),
    user_id: `coyote-${faker.number.int({ min: 1, max: 5 })}`,
    guest_id: faker.helpers.maybe(() => faker.internet.email(), { probability: 0.5 }),
    type_id: faker.number.int({ min: 1, max: 5 }),
    project_id: faker.number.int({ min: 1, max: 5 }),
    team_id: faker.helpers.maybe(() => faker.number.int({ min: 1, max: 3 }), { probability: 0.5 }),
    board_id: faker.number.int({ min: 1, max: 3 }),
    board_stage_id: faker.number.int({ min: 1, max: 5 }),
    board_stage_position: faker.number.bigInt({ min: 1n, max: 10n ** 15n }).toString(),
    subtask_parent_position: null,
    desired_date: faker.helpers.maybe(() => faker.date.future().toISOString(), { probability: 0.5 }),
    desired_date_with_time: null,
    estimated_start_date: faker.helpers.maybe(() => faker.date.future().toISOString(), { probability: 0.5 }),
    estimated_delivery_date: faker.helpers.maybe(() => faker.date.future().toISOString(), { probability: 0.5 }),
    gantt_bar_start_date: faker.helpers.maybe(() => faker.date.future().toISOString(), { probability: 0.5 }),
    gantt_bar_end_date: faker.helpers.maybe(() => faker.date.future().toISOString(), { probability: 0.5 }),
    close_date: faker.date.future().toISOString(),
    was_reopened: faker.datatype.boolean(),
    is_closed: faker.datatype.boolean(),
    is_assigned: faker.datatype.boolean(),
    on_going: faker.datatype.boolean(),
    estimate_updated: faker.datatype.boolean(),
    estimated_at: null,
    queue_position: id,
    created_at: faker.date.recent().toISOString(),
    start_date: faker.helpers.maybe(() => faker.date.past().toISOString(), { probability: 0.5 }),
    desired_start_date: null,
    current_estimate_seconds: faker.number.int({ min: 3600, max: 7200 }),
    evaluation_status: null,
    attachments_count: faker.number.int({ min: 0, max: 10 }),
    tags_data: faker.helpers.arrayElements([faker.word.noun(), faker.word.noun()], faker.number.int({ min: 0, max: 2 })),
    client_name: faker.company.name(),
    client_id: faker.number.int({ min: 1, max: 5 }),
    project_name: faker.company.name(),
    project_group_name: faker.helpers.maybe(() => faker.company.buzzNoun(), { probability: 0.5 }) || 'Default group',
    project_group_id: faker.number.int({ min: 1, max: 3 }),
    project_group_is_default: faker.datatype.boolean(),
    project_sub_group_name: faker.helpers.maybe(() => faker.company.buzzNoun(), { probability: 0.5 }) || 'Default subgroup',
    project_sub_group_id: faker.number.int({ min: 1, max: 3 }),
    project_sub_group_is_default: faker.datatype.boolean(),
    type_name: faker.company.catchPhraseDescriptor(),
    user_name: faker.person.fullName(),
    guest_name: null,
    board_name: `Board ${faker.number.int({ min: 1, max: 3 })}`,
    board_stage_name: `Stage ${faker.number.int({ min: 1, max: 5 })}`,
    board_stage_description: faker.lorem.sentence(),
    team_name: null,
    type_color: faker.color.rgb(),
    state: faker.helpers.arrayElement(['closed', 'open']),
    overdue: faker.helpers.arrayElement(['on_schedule', 'late']),
    time_worked: faker.number.int({ min: 0, max: 1000 }),
    time_pending: faker.number.int({ min: 0, max: 1000 }),
    time_total: faker.number.int({ min: 0, max: 2000 }),
    time_progress: faker.number.float({ min: 0, max: 1 }),
    activities: faker.number.int({ min: 0, max: 10 }),
    repetition_rule: null,
    board_remaining_time: faker.helpers.maybe(() => faker.number.int({ min: 1, max: 100 }), { probability: 0.5 }),
    stage_depart_estimated_at: null,
    is_urgent: faker.datatype.boolean(),
    points: faker.helpers.maybe(() => faker.number.int({ min: 1, max: 10 }), { probability: 0.5 }),
    reestimate_count: faker.number.int({ min: 0, max: 3 }),
    parent_ids: [],
    opened_parent_ids: [],
    parents_max_desired_date: null,
    child_ids: [],
    workflow_id: null,
    checklist_id: null,
    is_shared: faker.datatype.boolean(),
    sharing_details: [],
    subtask_ids: [],
    subtasks_count: faker.number.int({ min: 0, max: 5 }),
    subtasks_closed_count: faker.number.int({ min: 0, max: 5 }),
    subtasks_count_progress: null,
    is_subtask: faker.datatype.boolean(),
    parent_task_id: null,
    parent_task_title: null,
    current_level: faker.number.int({ min: 0, max: 10 }),
    custom_fields: {},
    form_id: null,
    last_activity_at: faker.date.recent().toISOString(),
    priority: faker.number.int({ min: 1, max: 5 }),
    tag_list: '',
    tags: [],
    scheduled_start_time: null,
    is_scheduled: faker.datatype.boolean(),
    uid: id,
    responsible_id: `coyote-${faker.number.int({ min: 1, max: 5 })}`,
    responsible_name: faker.person.fullName(),
    task_state_id: faker.number.int({ min: 1, max: 5 }),
    task_state_name: `State ${faker.number.int({ min: 1, max: 5 })}`,
    assignments: [
        {
            id: faker.string.ulid(),
            task_id: id,
            assignee_id: `coyote-${faker.number.int({ min: 1, max: 5 })}`,
            team_id: null,
            assignee_name: faker.person.fullName(),
            queue_position: id,
            priority: faker.number.int({ min: 1, max: 5 }),
            current_estimate_seconds: faker.number.int({ min: 3600, max: 7200 }),
            time_worked: 0,
            estimate_updated: faker.datatype.boolean(),
            start_date: null,
            close_date: null,
            is_closed: faker.datatype.boolean(),
            reestimate_count: 0,
            is_working_on: faker.datatype.boolean(),
            automatic_time_worked_updated_at: faker.date.recent().toISOString(),
            time_worked_not_persisted: 0,
        },
    ],
    follower_ids: [],
});

// Endpoint para gerar tarefas
app.get('/api/v1.0/tasks', (req, res) => {
    const taskCount = faker.number.int({ min: 1, max: 10 });
    const tasks = Array.from({ length: taskCount }, (_, index) => generateTask(index + 1));
    res.json({ tasks });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
