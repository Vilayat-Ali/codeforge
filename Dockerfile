FROM ubuntu:latest

WORKDIR /home/codeforge

RUN apt-get update && \
    apt-get install -y \
    build-essential \
    curl \
    file \
    git

RUN curl https://sh.rustup.rs -sSf | sh -s -- -y

ENV PATH="/root/.cargo/bin:${PATH}"

RUN rustc --version && cargo --version

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs

RUN node -v && npm -v

COPY . .

RUN cd server && cargo build --release && cargo run --release

RUN cd ../dashboard && npm i && npm run build && npm run start

EXPOSE 3000 8000