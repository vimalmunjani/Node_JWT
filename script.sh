#!/bin/sh

npm install -production
cd bin
pm2 start server.js