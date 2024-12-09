### Node Webservice com Express e Faker.js
Este é um webservice simples desenvolvido em Node.js utilizando o framework Express e a biblioteca Faker.js para gerar dados aleatórios no formato JSON.

🚀 Funcionalidades
Gera tarefas aleatórias no formato especificado.
Permite requisições via curl, Postman ou outros clientes HTTP.
Retorna entre 1 a 10 tarefas simuladas com dados aleatórios.
🛠️ Requisitos
Node.js (versão 14 ou superior)
npm (geralmente instalado com o Node.js)
📦 Instalação
Clone este repositório:

git clone https://github.com/seu-usuario/node-webservice.git
cd node-webservice
Instale as dependências:

npm install
🏃 Inicialização do Servidor
Modo padrão:

npm start
O servidor estará disponível em http://localhost:3000.

Modo de desenvolvimento (com recarregamento automático, necessário instalar o nodemon):

npm run dev
📋 Uso via curl
Requisição de Exemplo
Faça uma requisição para a rota /api/v1.0/tasks passando os headers obrigatórios:

curl -g "http://localhost:3000/api/v1.0/tasks" \
    -X GET \
    -H "Version: HTTP/1.0" \
    -H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    -H "User-Token: 9flMUzLxQtxohKGZjU5" \
    -H "Content-Type: application/json"
Resposta de Exemplo
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
🧪 Testando com Postman
Abra o Postman.
Crie uma nova requisição:
Método: GET
URL: http://localhost:3000/api/v1.0/tasks
Adicione os seguintes headers:
Version: HTTP/1.0
App-Key: 1a219437eab893dc115509bb85e06d77
User-Token: 9flMUzLxQtxohKGZjU5
Envie a requisição e veja a resposta.
🧰 Tecnologias Utilizadas
Node.js - Plataforma de desenvolvimento.
Express - Framework para criar aplicações web.
Faker.js - Biblioteca para geração de dados simulados.
🤝 Contribuições
Contribuições são sempre bem-vindas! Para contribuir:

Faça um fork do projeto.
Crie uma branch com sua funcionalidade ou correção de bug:
git checkout -b minha-feature
Faça o commit das alterações:
git commit -m "Adiciona nova funcionalidade"
Envie para o repositório remoto:
git push origin minha-feature
Abra um pull request no GitHub.
📝 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.