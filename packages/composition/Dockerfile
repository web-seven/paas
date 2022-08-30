FROM node:16.14.0

COPY src/affected.js /tools/affected.js

COPY --from=alpine/helm:3.9.2 /usr/bin/helm /usr/bin/helm

RUN wget -qO /usr/local/bin/yq https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 && chmod +x /usr/local/bin/yq

RUN apt-get update && apt-get install -y \
    curl \
    jq \
    python3 \
    make \
    gcc \
    g++

RUN helm plugin install https://github.com/web-seven/helm-github.git

RUN npm install -g nx semver
