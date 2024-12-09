# 🚀 PoC: Analista de BI para RH

## 🎯 Objetivo Geral

Desenvolver uma prova de conceito (PoC) que demonstre a capacidade de:

- 🔗 Integrar dados de duas APIs distintas.
- 🗂️ Normalizar os dados em uma base estruturada.
- 📊 Criar uma modelagem dimensional (star schema) para análise de tarefas por colaborador e por objetivo.

## 🛠️ Requisitos Técnicos

### 🔍 Coleta de Dados

- Consumir dados de duas APIs fornecidas.
- Garantir a extração e validação dos dados.

### 🗃️ Normalização e Armazenamento

- Criar um banco de dados relacional para armazenar os dados extraídos.
- Estruturar os dados para evitar redundâncias e inconsistências.

### 🌟 Modelagem Dimensional

- Criar um star schema com:
  - Tabelas fato e dimensões para análise de tarefas por colaborador e por objetivo.

### 🔄 ETL (Extract, Transform, Load)

- Implementar uma pipeline de ETL que:
  - 📥 Extraia os dados das APIs.
  - 🔄 Transforme os dados para o formato dimensional.
  - 📤 Carregue os dados no banco de dados final.

## 💻 Stack Tecnológica

- **Linguagens Permitidas**: Node.js, Python, Java, ou C#.
- **Ferramentas**: Express, @faker-js/faker (opcional para simulação de dados).
- **Banco de Dados**: SQL Server (ou equivalente relacional).

### ⚙️ Scripts Configurados no `package.json`

- `start`: Executa o servidor principal e o módulo de coleta de dados.
- `dev`: Executa o servidor em modo de desenvolvimento usando `nodemon`.
- `dev-rh`: Executa o módulo de coleta de dados em modo de desenvolvimento.

## 🛠️ Etapas da Implementação

### 1️⃣ Integração com as APIs

- Criar rotinas para consumir e validar dados de duas APIs.

### 2️⃣ Normalização e Armazenamento

- Estruturar o banco de dados inicial de forma eficiente, garantindo:
  - 📉 Redução de redundâncias.
  - ⚡ Eficiência no uso do espaço.
- Exemplos de dados:
  - 🗂️ Tarefas: título, estado, responsável, tempos estimados.
  - 🎯 Objetivos: descrição, percentual de conclusão, vínculos com departamentos.
  - 👥 Colaboradores: identificação e equipes.

### 3️⃣ Modelagem Dimensional

- Criar um star schema eficiente, com:
  - 📊 Medidas relevantes (horas trabalhadas, progresso de tarefas).
  - 🌐 Dimensões otimizadas (colaboradores, objetivos).

### 4️⃣ Pipeline de ETL

- Desenvolver uma pipeline para:
  - 📥 Extrair os dados das APIs.
  - 🔄 Transformar os dados para otimizar armazenamento e consultas.
  - 📤 Carregar os dados no banco de dados dimensional.

### 5️⃣ Validação e Testes

- ✅ Garantir a completude e a precisão dos dados extraídos.
- ⚡ Assegurar que o modelo dimensional suporte análises eficientes.

### 6️⃣ Visualização de Dados

- Construir um dashboard em **Microsoft Power BI**, contendo:
  - Visão geral de tarefas realizadas e pendentes por colaborador.
  - Progresso dos objetivos vinculados a cada departamento.
  - Gráficos interativos e animados que permitam a exploração dos dados por tempo, estado e prioridades.
  - Um design visualmente atrativo e bem estruturado, destacando informações relevantes com clareza.

### 7️⃣ Boas Práticas de BI

- Implementar boas práticas no banco de dados final:
  - 📁 Organização clara entre tabelas fato e dimensões.
  - 📐 Normalização prévia adequada.
  - ⚙️ Uso eficiente de índices e chaves estrangeiras.

## ✅ Critérios de Sucesso

1. **🔗 Integração das APIs**: Dados integrados e armazenados corretamente.
2. **🌟 Modelo Dimensional**: Star schema funcional, respondendo a perguntas como:
   - Quantas tarefas cada colaborador realizou?
   - Quantas tarefas foram cumpridas para cada objetivo?
3. **📊 Dashboard no Power BI**: Dashboard funcional, visualmente atrativo, interativo e animado.
4. **⚡ Execução Automatizada**: Pipeline de ETL funcional.
5. **📈 Boas Práticas**: Banco otimizado, seguindo melhores práticas de BI.

## 📦 Entregáveis

1. **📂 Código-Fonte**

   - Scripts em uma das linguagens permitidas para coleta, normalização e ETL.

2. **🗄️ Base de Dados**

   - Banco de dados com os dados extraídos.
   - Star schema para análise.

3. **📝 Documentação**

   - Instruções de execução.
   - Diagrama do star schema.

4. **📊 Dashboard no Power BI**

   - Arquivo `.pbix` com o dashboard configurado.
   - Gráficos animados e design atrativo.

5. **📊 Relatórios**

   - Exemplos de consultas baseados no modelo dimensional.
   - Análise das boas práticas implementadas.

6. **🧠 Criatividade e Liberdade**

   - O candidato pode propor soluções criativas para otimizar a implementação.
   - Liberdade para usar bibliotecas, frameworks e padrões que julgar apropriados.

## 🔍 Exemplos de DAX para o Power BI

```DAX
-- Cálculo de Tarefas Concluídas por Colaborador
Tarefas Concluídas = 
CALCULATE(
    COUNT('Fato_Tarefas'[ID_Tarefa]),
    'Fato_Tarefas'[Estado] = "Concluída"
)

-- Progresso dos Objetivos
Progresso Objetivos = 
AVERAGE('Fato_Objetivos'[Percentual_Conclusão])

-- Total de Horas Trabalhadas por Departamento
Horas Trabalhadas = 
SUMX(
    'Fato_Tarefas',
    'Fato_Tarefas'[Horas_Trabalhadas]
)
```

Com esses cálculos, o dashboard pode fornecer uma visão abrangente e detalhada dos dados disponíveis.

## 📤 Entrega Final

- Todo o projeto deve ser entregue em um repositório no **GitHub**.
  - O repositório deve conter:
    - Código-fonte completo.
    - Arquivos de banco de dados (se aplicável).
    - Dashboard no formato `.pbix`.
    - Documentação completa.
  - O README do repositório deve descrever como executar o projeto e analisar os resultados.
