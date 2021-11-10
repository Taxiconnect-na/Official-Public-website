#!/bin/bash

(cd /home/ubuntu/Official-Public-website ; sudo docker-compose down)
sudo docker system prune --all --force