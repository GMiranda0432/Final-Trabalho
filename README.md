# Projeto trabalho de fim de período
1º Período
## Membros
> Gabriel de Miranda,
> João Pedro,
> Brian Lima

<!-- 

# Trabalho Final Interdisciplinar

**Curso Superior de TSI – 1º período – 2026/1**

## Disciplinas

* **Desenvolvimento Front-end I** – Prof. Matheus Jagi
* **Ferramentas para Trabalho Colaborativo** – Prof. Bruno Clemente
* **Lógica de Programação** – Prof. Archimedes Detoni

---

## Objetivo

Este Trabalho Final Interdisciplinar tem o objetivo de abordar de forma integrada os conhecimentos adquiridos nas disciplinas de:

* Desenvolvimento Front-end I;
* Ferramentas para Trabalho Colaborativo;
* Lógica de Programação.

O trabalho deverá ser desenvolvido em **grupos de 3 ou 4 integrantes** e envolve:

* Planejamento e execução de atividades em equipe utilizando ferramentas de colaboração;
* Desenvolvimento de uma aplicação web utilizando **HTML**, **CSS** e **JavaScript**.

> A nota obtida neste trabalho será utilizada de formas diferentes em cada disciplina, conforme definido pelos respectivos professores.

---

# Avaliação

## 1ª Parte — Entrega da Aplicação

O grupo deverá enviar todos os arquivos relacionados ao projeto:

* Documentação;
* Arquivos de mídia;
* Códigos HTML;
* Códigos CSS;
* Códigos JavaScript.

### Requisitos

* Todos os arquivos devem ser enviados pelo AVA em cada disciplina;
* Os mesmos arquivos devem ser enviados em todas as salas para registro da entrega;
* Os professores deverão ser adicionados:

  * No Trello da equipe;
  * No GitHub (ou ferramenta equivalente de versionamento).

### Prazo

**30/06/2026**

### Observação

A nota desta etapa será a mesma para todos os integrantes do grupo.

---

## 2ª Parte — Apresentação e Entrevista

O grupo deverá realizar uma apresentação com duração aproximada de **15 minutos**.

### Conteúdo da apresentação

Explicar:

* O funcionamento da aplicação;
* Organização do trabalho em equipe;
* Uso das ferramentas de apoio ao trabalho;
* Desenvolvimento dos códigos da aplicação.

### Entrevista

Após a apresentação:

* O grupo responderá perguntas dos professores;
* O grupo responderá perguntas dos colegas da turma.

### Critérios avaliados

* Qualidade das respostas fornecidas;
* Participação individual;
* Qualidade das perguntas feitas aos demais grupos.

### Datas

Entre **01/07/2026 e 06/07/2026**.

### Observação

A nota desta etapa será **individual**.

---

# Critérios por Disciplina

## Desenvolvimento Front-end I

### Requisitos

* Utilizar HTML e CSS como tecnologias base;
* É permitido utilizar Bootstrap;
* Os dados devem ser armazenados no **localStorage** em formato **JSON**;
* Implementar todas as operações de CRUD:

  * Create
  * Read
  * Update
  * Delete
* A aplicação deve ser responsiva;
* Deve funcionar adequadamente em:

  * Desktop;
  * Dispositivos móveis;
* Deve possuir pelo menos um componente gerado dinamicamente a partir dos dados armazenados.

---

## Ferramentas para Trabalho Colaborativo

### Requisitos

* Utilizar Trello para gerenciamento da equipe;
* Utilizar Git e GitHub para versionamento do código.

### Foco da avaliação

* Controle de tarefas:

  * TODO
  * Doing
  * Done
* Criação de branches individuais;
* Realização de merges;
* Manutenção da branch `main`.

---

## Lógica de Programação

### Foco da avaliação

* Qualidade do código JavaScript;
* Organização;
* Boas práticas;
* Legibilidade;
* Correção;
* Concisão;
* Geração correta das informações.

### OBS 1

Utilizar obrigatoriamente estrutura de repetição:

```javascript
for
```

**Não utilizar métodos de arrays**, como:

* forEach()
* find()
* indexOf()
* includes()
* filter()
* map()
* findIndex()

### OBS 2

Não utilizar:

```javascript
break
continue
```

para interromper estruturas de repetição ou condicionais.

---

# Orientações Gerais

## Organização do Código

* Separar adequadamente HTML, CSS e JavaScript;
* Utilizar comentários;
* Utilizar cabeçalhos;
* Respeitar a indentação;
* Utilizar nomenclatura adequada para:

  * Variáveis;
  * Funções;
  * Elementos HTML;
  * Classes CSS.

---

## Tratamento das Entradas

### O sistema deve:

* Informar ao usuário o tipo de dado esperado;
* Validar entradas;
* Exibir mensagens de erro quando necessário.

### Exemplos

* Campo obrigatório vazio;
* Valor inválido;
* Formato incorreto.

---

## Apresentação dos Resultados

### O sistema deve:

* Exibir mensagens claras;
* Informar adequadamente o significado dos resultados;
* Formatar corretamente os dados.

### Exemplo

Valores monetários:

```text
R$ 10,50
```

e não:

```text
10.5
```

---

## Testes

Antes da entrega:

* Utilizar ferramentas de debugging;
* Testar todas as funcionalidades;
* Corrigir erros encontrados;
* Realizar melhorias necessárias.

---

# Tema da Aplicação

Cada grupo deverá escolher um tema e desenvolver uma aplicação baseada em:

* Vetores;
* Vetores de objetos literais.

### Exemplo de estrutura

```javascript
{
    chave1: valor1,
    chave2: valor2,
    chave3: valor3
}
```

---

# Funcionalidades Obrigatórias

A aplicação deverá permitir:

## Inclusão

Adicionar novos elementos ao vetor.

## Exclusão

Remover elementos existentes.

## Consulta

Pesquisar os dados de um elemento específico.

## Alteração

Modificar dados de um elemento existente.

## Listagem

Exibir todos os elementos armazenados.

## Filtro Simples

Filtrar elementos utilizando um único critério.

### Exemplo

```text
Produtos com preço acima de R$ 100,00
```

## Filtro Composto

Filtrar elementos utilizando dois critérios simultaneamente.

### Exemplo

```text
Usuários do gênero feminino e com idade inferior a 60 anos
```

---

# Resumo dos Requisitos Obrigatórios

✅ HTML, CSS e JavaScript

✅ localStorage + JSON

✅ CRUD completo

✅ Responsividade

✅ Uso de vetores de objetos

✅ Inclusão

✅ Exclusão

✅ Consulta

✅ Alteração

✅ Listagem

✅ Filtro simples

✅ Filtro composto

✅ Trello

✅ GitHub

✅ Uso obrigatório de `for`

❌ Não utilizar `forEach`, `filter`, `map`, `find`, etc.

❌ Não utilizar `break` ou `continue`
