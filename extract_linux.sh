#!/usr/bin/env bash

cd build/linux-unpacked/resources/ && rm -rf app && mkdir app && asar extract app.asar app && cd app && tree && nautilus .
