<div align="center">

# Node.js Webservice

</div>

## Objetivo

Este projeto implementa um webservice simples desenvolvido em **Node.js** utilizando o framework **Express** e a biblioteca **Faker.js** para gerar dados aleatórios no formato JSON.

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)

![Node.js](https://img.shields.io/badge/Node.js-%5E14.0-brightgreen)

## Funcionalidades

- **Geração de Tarefas Aleatórias:**
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
   git clone https://github.com/seu-usuario/node-webservice.git
   cd node-webservice
   ```

2. **Instale as Dependências:**
   ```bash
   npm install
   ```

## Inicialização do Servidor

1. **Modo Padrão:**
   ```bash
   npm start
   ```
   O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

2. **Modo de Desenvolvimento (com recarregamento automático):**
   - Necessário instalar o **nodemon**.
     ```bash
     npm run dev
     ```

## Uso via `curl`

**Requisição de Exemplo:**

Faça uma requisição para a rota `/api/v1.0/tasks` passando os headers obrigatórios:
```bash
curl -g "http://localhost:3000/api/v1.0/tasks" \
-X GET \
-H "Version: HTTP/1.0" \
-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
-H "User-Token: 9flMUzLxQtxohKGZjU5" \
-H "Content-Type: application/json"
```

**Resposta de Exemplo:**
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

## Responsável Atual

[Tiago Lino](https://github.com/tiagolinocertacon)

## Licença Propretária
 
Este projeto é licenciado sob a Licença Proprietária de propriedade exclusiva de [Certacon](https://certacon.com.br/). Nenhuma parte deste software pode ser copiada, modificada, distribuída ou usada sem a permissão explícita da [Certacon](https://certacon.com.br/). Todos os direitos reservados.

