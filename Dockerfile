FROM node:6
EXPOSE 3000

RUN apt-get update \
    && apt-get install -y apt-utils \
    && apt-get install -y libarchive-dev libtinyxml-dev \
    && useradd --user-group --create-home --shell /bin/false app \
    && apt-get autoremove -y \
    && apt-get clean all \
    && rm -rf /var/lib/apt/lists/*

ENV HOME=/home/app

COPY package.json $HOME/ck-ospell/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/ck-ospell
RUN npm install

USER root
COPY . $HOME/ck-ospell/
RUN chown -R app:app $HOME/*
USER app

CMD ["npm", "start"]
