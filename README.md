# 🎬 Projeto Frontend de Busca e Filtragem de Filmes

Este é um projeto frontend desenvolvido em **React** utilizando o **Vite**. Ele consome a API pública do [The Movie Database (TMDB)](https://www.themoviedb.org/), permitindo aos usuários buscar e filtrar filmes, visualizar detalhes e assistir trailers.

---

## 🚀 Funcionalidades

- **Busca de filmes**: Pesquise títulos diretamente da API do TMDB.
- **Filtragem de filmes**: Ordene ou aplique filtros para refinar os resultados.
- **Detalhes do filme**: Visualize informações completas de um filme.
- **Trailer do filme**: Assista ao trailer diretamente na aplicação.

---

## 🛠️ Tecnologias utilizadas

- **React** com **Vite**
- **TypeScript**
- Consumo da API pública do **TMDB**

---

## 🖥️ Como rodar o projeto

Siga os passos abaixo para executar o projeto localmente:

### 1. **Clone o repositório**

Primeiro, clone o repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. **Acesse o diretório do projeto**

```bash
cd seu-repositorio
```

### 3. **Instale as dependências**

Utilize o pnpm (ou o gerenciador de pacotes da sua escolha) para instalar as dependências do projeto:

```bash
pnpm install
```

Nota: Certifique-se de ter o pnpm instalado globalmente em sua máquina. Caso não tenha, instale com o comando:

```bash
npm install -g pnpm
```

### 4. **Configure as variáveis de ambiente**

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Preencha as variáveis de ambiente com os valores apropriados:
VITE_API_URL=<URL da API TMDB>
VITE_APP_API_KEY=<Sua chave de API do TMDB>
VITE_APP_API_IMAGE_URL=<URL base para imagens do TMDB>
VITE_URL_YOUTUBE=<URL base do YouTube para trailers>

### 5. **Execute o projeto**

Inicie o servidor de desenvolvimento com o comando:

```bash
pnpm dev
```

### 6. **Acesse no navegador**

Abra o navegador e acesse:

http://localhost:5173
