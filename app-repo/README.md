# sample-node-app

Production-style starter app repository for a GitHub -> Jenkins -> Docker Registry -> GitHub Manifests -> Argo CD -> Kubernetes pipeline.

## What is included

- Simple Node.js application with `/` and `/health` endpoints
- Unit tests with Jest + Supertest
- Dockerfile
- Jenkinsfile that:
  - checks out code
  - installs dependencies
  - runs tests
  - builds and pushes Docker image
  - updates image tag in the manifests repo
  - commits and pushes the manifest change

## Before first use

Update these values in `Jenkinsfile`:

- `REGISTRY_NAMESPACE`
- `MANIFEST_REPO`
- the image name used in the `yq` command if you rename the app

## Jenkins requirements

Your Jenkins agent should have:

- git
- docker
- node + npm
- yq

## Jenkins credentials expected

- `registry-creds` -> Docker registry username/password or token
- `github-manifests-creds` -> GitHub username + token for pushing to manifests repo

## Local run

```bash
npm install
npm test
npm start
```

Then open:

- `http://localhost:8080/`
- `http://localhost:8080/health`

## Suggested GitHub repo name

`sample-node-app`
