## Introduction

## Docker Image
### Build

```bash
docker build -t grandbastion:latest .
podman build -t grandbastion:latest .
```

### Run

```bash
docker run -d -p 5000:4321 grandbastion:latest
podman run -d -p 5000:4321 grandbastion:latest
```