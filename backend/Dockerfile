# Pull base image
FROM python:3.7-slim

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /backend

# Install dependencies
COPY Pipfile Pipfile.lock /backend/
RUN pip install pipenv && pipenv install --system

# Copy project
COPY . /backend/
