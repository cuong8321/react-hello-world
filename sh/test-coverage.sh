#! /usr/bin/env bash
jest --coverage && cat ./coverage/lcov.info | coveralls
