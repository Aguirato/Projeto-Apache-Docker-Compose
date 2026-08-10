# 🐳 Aplicação HTML em Container Apache com Docker Compose

Projeto que sobe um servidor **Apache HTTP Server (httpd)** via **Docker Compose**
para servir uma aplicação web estática (HTML, CSS e JS).

## 📁 Estrutura do projeto

```
apache-docker-project/
├── docker-compose.yml
├── README.md
├── .gitignore
└── app/
    ├── index.html
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## ⚙️ Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado
- Docker Compose (já incluso no Docker Desktop)

## 🚀 Como executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   cd SEU_REPOSITORIO
   ```

2. Suba o container:
   ```bash
   docker compose up -d
   ```

3. Acesse no navegador:
   ```
   http://localhost:8080
   ```

4. Para parar o container:
   ```bash
   docker compose down
   ```

## 🧩 Como funciona o `docker-compose.yml`

```yaml
version: "3.9"

services:
  apache-web:
    image: httpd:2.4
    container_name: apache-web-app
    ports:
      - "8080:80"
    volumes:
      - ./app:/usr/local/apache2/htdocs/
    restart: unless-stopped
```

- **image:** usa a imagem oficial do Apache (`httpd:2.4`) do Docker Hub.
- **ports:** mapeia a porta `8080` da máquina local para a porta `80` do container.
- **volumes:** monta a pasta local `./app` dentro da pasta padrão de documentos do
  Apache (`htdocs`), fazendo com que o `index.html` seja servido automaticamente.
- **restart:** garante que o container reinicie automaticamente caso caia.


