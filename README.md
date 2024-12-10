<div align="center">

# Node.js Webservice

</div>

## Objetivo

Este projeto implementa um webservice simples desenvolvido em **Node.js** utilizando o framework **Express** e a biblioteca **Faker.js** para gerar dados aleatórios no formato JSON.

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)

![Node.js](https://img.shields.io/badge/Node.js-%5E14.0-brightgreen)

## Funcionalidades

- **Geração de Tarefas e Objetivos do Colaborador de maneira Aleatórias:**
  - Gera tarefas no formato especificado com dados simulados.
  - Suporta requisições por ferramentas como **curl** e **Postman**.
  - Retorna entre 1 e 10 tarefas aleatórias por requisição.

- **Interface de API RESTful:**
  - Endpoints configurados para acessar os dados gerados dinamicamente.

## Pré-Requisitos

- [Node.js (versão 14 ou superior)](https://nodejs.org/)
- [npm (gerenciador de pacotes do Node.js)](https://www.npmjs.com/)

## Tecnologias Utilizadas

- **Node.js:** Plataforma de desenvolvimento.
- **Express:** Framework para criar aplicações web.
- **Faker.js:** Biblioteca para geração de dados simulados.

## Instalação

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/tiagolinocertacon/ProofOfConceptHumanResourcesBigData.git
   cd ProofOfConceptHumanResourcesBigData
   ```

2. **Instale as Dependências:**
   ```bash
   npm install
   ```

## Inicialização do Servidor

1. **Modo de Desenvolvimento (com recarregamento automático):**
   - Necessário instalar o **nodemon**.
     ```bash
     npm run dev
     ```
     O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

   - Necessário instalar o **nodemon**.
     ```bash
     npm run dev-rh
     ```
     O servidor estará disponível em [http://localhost:4000](http://localhost:4000).

## Uso via `curl`

**Requisição de Exemplo:**
Faça uma requisição para a rota `/api/v1.0/objectives/:idusuario` passando os headers obrigatórios:
```bash
curl --location 'http://localhost:4000/api/v1.0/objectives/10'
```
**Resposta de Exemplo(Objectives): **
```json
{
    "success": true,
    "total_objectives": 2,
    "data": [
        {
            "id_user": "10",
            "id": 7554003830818236,
            "id_parent": 0,
            "id_owner": 1,
            "id_department": 1381,
            "objective": "Persistent contextually-based product",
            "percentage_status": "15.74",
            "status": 0,
            "private": 1,
            "people_allowed": null,
            "people_edit": null,
            "dt_start": "2024-09-06T14:18:06.462Z",
            "dt_end": "2025-08-11T23:43:23.293Z",
            "id_period": 0,
            "signaling": 1,
            "tags": [
                "laughter"
            ],
            "key_results": [
                {
                    "id": 2793910904164579,
                    "id_okr": 7554003830818236,
                    "id_owner": 1,
                    "text": "Tempora corrumpo caute clibanus depulso votum aeneus absque aranea curatio.",
                    "description": "Tamquam cilicium titulus astrum solutio. Absque accendo fuga acies magni pax solvo atavus bestia. Arca delinquo vorax.",
                    "goal": 100,
                    "start_value": 0,
                    "type": 1,
                    "currency_type": "R$",
                    "signal": -1,
                    "weight": null,
                    "status": 0,
                    "owner": {
                        "id": 1,
                        "name": "Hettie"
                    },
                    "checkins": [
                        {
                            "id": 4802269359282428,
                            "id_profile": 1,
                            "id_okr": 7554003830818236,
                            "id_okr_kr": 2793910904164579,
                            "value": 60.07649306964693,
                            "status": "51.02",
                            "description": "<p>Conspergo vesper textor sophismata ustulo.</p>",
                            "dt_create": "2024-03-12T19:27:04.866Z",
                            "profile": {
                                "id": 1,
                                "name": "Marques"
                            }
                        },
                        {
                            "id": 209443626980852,
                            "id_profile": 1,
                            "id_okr": 7554003830818236,
                            "id_okr_kr": 2793910904164579,
                            "value": 16.681174516887076,
                            "status": "61.55",
                            "description": "<p>Carpo degero amplitudo timor bis adeo cenaculum ter creta tepidus.</p>",
                            "dt_create": "2024-05-15T21:01:32.695Z",
                            "profile": {
                                "id": 1,
                                "name": "Tyson"
                            }
                        }
                    ],
                    "last_checkin_value": 33.73095750907039
                },
                {
                    "id": 6564200471917212,
                    "id_okr": 7554003830818236,
                    "id_owner": 1,
                    "text": "Terreo conservo tristis solium venia coma suus sperno.",
                    "description": "Dapifer repudiandae arca a cupressus. Terreo nihil crinis amitto solus quis candidus mollitia perspiciatis quod. Tenax bestia ducimus.",
                    "goal": 100,
                    "start_value": 0,
                    "type": 2,
                    "currency_type": "R$",
                    "signal": -1,
                    "weight": null,
                    "status": 0,
                    "owner": {
                        "id": 1,
                        "name": "Roman"
                    },
                    "checkins": [
                        {
                            "id": 1766307637145029,
                            "id_profile": 1,
                            "id_okr": 7554003830818236,
                            "id_okr_kr": 6564200471917212,
                            "value": 79.33308566505382,
                            "status": "87.80",
                            "description": "<p>Combibo abduco cunae strues vita eius maiores cruciamentum adsum triduana.</p>",
                            "dt_create": "2024-01-07T07:14:12.089Z",
                            "profile": {
                                "id": 1,
                                "name": "Kathleen"
                            }
                        }
                    ],
                    "last_checkin_value": 0.460479269243963
                },
                {
                    "id": 4789634641644330,
                    "id_okr": 7554003830818236,
                    "id_owner": 1,
                    "text": "Crepusculum tantillus theatrum assumenda.",
                    "description": "Adamo supellex porro xiphias voluptatem deleo deduco. Animadverto verus valeo. Abbas confugo sponte sursum arbor.",
                    "goal": 100,
                    "start_value": 0,
                    "type": 2,
                    "currency_type": "R$",
                    "signal": 1,
                    "weight": null,
                    "status": 0,
                    "owner": {
                        "id": 1,
                        "name": "Nils"
                    },
                    "checkins": [
                        {
                            "id": 6539956292209701,
                            "id_profile": 1,
                            "id_okr": 7554003830818236,
                            "id_okr_kr": 4789634641644330,
                            "value": 81.81299515064418,
                            "status": "18.67",
                            "description": "<p>Adfero cenaculum vis bene ter terra.</p>",
                            "dt_create": "2024-11-11T15:36:44.712Z",
                            "profile": {
                                "id": 1,
                                "name": "Dejuan"
                            }
                        },
                        {
                            "id": 5617014543578567,
                            "id_profile": 1,
                            "id_okr": 7554003830818236,
                            "id_okr_kr": 4789634641644330,
                            "value": 23.718388915888646,
                            "status": "68.64",
                            "description": "<p>Depulso fugit absque.</p>",
                            "dt_create": "2024-08-25T07:58:54.825Z",
                            "profile": {
                                "id": 1,
                                "name": "Gerhard"
                            }
                        }
                    ],
                    "last_checkin_value": 68.17998963344397
                }
            ],
            "parent": null,
            "department": {
                "id": 3611,
                "name": "Baby"
            }
        }
    ]
}
```
Faça uma requisição para a rota `/api/v1.0/tasks` passando os headers obrigatórios:
```bash
curl -g "http://localhost:3000/api/v1.0/tasks" \
-X GET \
-H "Version: HTTP/1.0" \
-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
-H "User-Token: 9flMUzLxQtxohKGZjU5" \
-H "Content-Type: application/json"
```
**Resposta de Exemplo(Tasks): **
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Synergize scalable metrics",
      "is_working_on": false,
      "user_id": "coyote-3",
      "guest_id": null,
      "type_id": 2,
      "project_id": 1,
      "team_id": null,
      "board_id": 2,
      "board_stage_id": 4,
      "board_stage_position": "123456789012345",
      "desired_date": null,
      "close_date": "2024-12-15T10:44:46.123Z",
      "is_closed": true,
      "priority": 2,
      "responsible_name": "Coyote 2",
      "task_state_name": "Stage 4",
      "assignments": [
        {
          "id": "abc123def456",
          "task_id": 1,
          "assignee_id": "coyote-2",
          "assignee_name": "Coyote 2",
          "queue_position": 1,
          "priority": 2,
          "current_estimate_seconds": 3600
        }
      ]
    }
  ]
}
```

## Testando com Postman

1. Abra o **Postman**.
2. Crie uma nova requisição:
   - **Método:** `GET`
   - **URL:** `http://localhost:3000/api/v1.0/tasks`

3. Adicione os seguintes headers:
   - `Version: HTTP/1.0`
   - `App-Key: 1a219437eab893dc115509bb85e06d77`
   - `User-Token: 9flMUzLxQtxohKGZjU5`

## Licença Propretária
 
Este projeto é licenciado sob a Licença Proprietária de propriedade exclusiva de [Certacon](https://certacon.com.br/). Nenhuma parte deste software pode ser copiada, modificada, distribuída ou usada sem a permissão explícita da [Certacon](https://certacon.com.br/). Todos os direitos reservados.

