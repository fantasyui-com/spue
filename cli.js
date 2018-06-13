#!/usr/bin/env node

const chickpea = require('chickpea');
const program = require('./index.js');
const configuration = { input: 'Input PNG' };
const options = chickpea(configuration);

program(options)
