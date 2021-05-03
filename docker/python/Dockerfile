FROM python:3.7

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV DEBIAN_FRONTEND noninteractive

WORKDIR /usr/src/app

RUN apt-get clean \
    && apt-get update \
    && apt-get install -y \
    locales \
    locales-all \
    apt-utils \
    && locale-gen en_US.UTF-8

ENV LC_ALL en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

RUN apt-get install -y \
    build-essential \
    libpq-dev \
    postgresql-client \
    curl \
    binutils \
    libproj-dev \
    gdal-bin \
    libffi-dev \
    libssl-dev \
    libxml2-dev \
    libxslt-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

RUN pip3 install --upgrade \
    pip \
    wheel \
    setuptools \
    pipenv

COPY ./Pipfile ./Pipfile.lock ./
RUN pipenv install --system --deploy --dev
COPY . /usr/src/app
RUN mkdir ./_static ./_media || true

RUN chmod +x ./manage.py
