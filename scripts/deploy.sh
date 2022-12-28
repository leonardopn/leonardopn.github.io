#!/bin/bash

echo 'leonardopetta.dev
leonardopetta.dev/portfolio-web' > ./dist/CNAME

yarn gh-pages -d dist
