# Setup to Run Project in Docker

## Prerequisites

- **Docker** installed (if not, follow [this guide](https://docs.docker.com/get-docker/)).
- **Docker Desktop** installed (if you want to use a GUI for managing Docker).

---

## Step 1: Clone the Project

First, clone the repository. Open your terminal and run:

```sh
git clone https://github.com/Pesilian/grait-transcribe-frontend.git
cd grait-transcribe-frontend
```

---

## Step 2: Build and Start the Docker Container

1. **Navigate to your frontend folder** (if not already there):

```sh
cd grait-transcribe-frontend
```

2. **Build and start the Docker container** by running the following command:

```sh
docker compose up --build
```

---

## Step 3: Access Your Application

```sh
http://localhost:3000
```

---

## Step 4: Stop container

```sh
docker compose down
```
