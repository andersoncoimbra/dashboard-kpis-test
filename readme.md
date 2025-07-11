# 🧪 Desafio Técnico — Dashboard de KPIs (Laravel + AdminLTE + Docker)

Este repositório contém a implementação de um **Dashboard de Indicadores (KPIs)** com frontend em HTML + AdminLTE e backend em Laravel 12, integrados via API RESTful e organizados com Docker.

---

## 📦 Tecnologias Utilizadas

### Backend (API)

- [Laravel 12](https://laravel.com/)
- Sanctum (autenticação via token)
- PHP 8.2
- Docker

### Frontend

- HTML + CSS + JS
- [AdminLTE 3](https://adminlte.io/)
- Nginx (servidor de arquivos estáticos)
- Docker

---

## ⚙️ Funcionalidades

✅ API RESTful que retorna KPIs:

- Vendas do Dia
- Visitas ao Site
- Novos Usuários
- Pedidos Finalizados

✅ Tela de login (AdminLTE) integrada ao backend

✅ Tokens de autenticação via Laravel Sanctum

✅ Dashboard com cards dinâmicos:

- Exibe título, valor e variação percentual
- Ícones de variação: seta verde (alta), seta vermelha (queda)
- Atualização automática a cada 30 segundos

✅ Responsivo: desktop, tablet e mobile

---

## 🚀 Como Executar Localmente (com Docker)

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Passos

```bash
git clone https://github.com/andersoncoimbra/dashboard-kpis-test
cd dashboard-kpis-test
docker-compose up --build
```

Após isso:

* 🟢 Frontend: [http://localhost:8000](http://localhost:8000)
* 🔵 Backend API: [http://localhost:8888/api/kpis](http://localhost:8888/api/kpis)

## 💻 Como Executar Manualmente (Sem Docker)

### Backend (Laravel API)

1. Acesse a pasta `/backend`
2. Crie o arquivo `.env` (copie de `.env.example`)
3. Configure o banco MySQL
4. Rode os comandos:

```bash
    composer install
    php artisan migrate --seed
    php artisan serve --port=8888
```

## 🛠️ Endpoints Disponíveis


| Método | Endpoint      | Protegido? | Descrição                           |
| --------- | --------------- | ------------ | --------------------------------------- |
| POST    | `/api/login`  | ❌         | Autentica e retorna token             |
| GET     | `/api/kpis`   | ✅         | Retorna KPIs em JSON                  |
| GET     | `/api/user`   | ✅         | Retorna dados do usuário autenticado |
| POST    | `/api/logout` | ✅         | Desloga o usuário                    |

> Para acessar KPIs é necessário incluir o token no header:
>
> `Authorization: Bearer {token}`

## 🧪 Como Testar

1. Acesse `http://localhost:8888/login.html`
2. Faça login com as credenciais fornecidas
3. O token será salvo no navegador (localStorage)
4. Você será redirecionado para `index.html`
5. A aplicação consome a API `/api/kpis` automaticamente com autenticação

## 📂 Estrutura do Projeto

<pre class="overflow-visible!" data-start="2352" data-end="2695">
<code class="whitespace-pre!"><span><span>.
├── backend/        </span><span><span class="hljs-comment"># Laravel API (com Sanctum e seeders)</span></span><span>
│   ├── app/
│   ├── routes/
│   └── ...
├── frontend/       </span><span><span class="hljs-comment"># AdminLTE (HTML + JS estático)</span></span><span>
│   ├── login.html
│   ├── index.html
│   └── css/
|   └── js/
├── docker-compose.yml
└── README.md
</span></span></code></div></div></pre>

---

## 📹 Vídeo Demonstração

> 🔗 Link  [Video](https://drive.google.com/file/d/1YQ_CK9ix17ikRUSt2IliXVoW28xwhtDk/view?usp=sharing) 

* Demonstração do login e autenticação
* Visualização dos KPIs com atualização dinâmica
* Explicação do backend e estrutura

## ✅ Critérios Adotados

* ✅ Separação de responsabilidades entre frontend e backend
* ✅ Boas práticas com Laravel e Docker
* ✅ Responsividade com AdminLTE
* ✅ Tokens e segurança com Sanctum
* ✅ Atualização automática via JavaScript

## 📌 Observações Técnicas

* A aplicação foi dividida em dois containers: `backend` (Laravel API) e `frontend` (Nginx estático com AdminLTE)
* O backend usa Laravel Sanctum para autenticação
* O frontend consome a API usando `fetch()` com o token armazenado no `localStorage`
* Toda a comunicação é feita por requisições HTTP RESTful entre containers
