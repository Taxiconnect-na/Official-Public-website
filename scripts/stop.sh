#!/bin/bash

(cd /home/ubuntu/taxiconnect-web ; sudo docker-compose down)
sudo docker system prune --all --force