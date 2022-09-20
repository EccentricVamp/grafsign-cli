#!/usr/bin/env node

import { sign } from "grafsign";
import { program } from "commander";

program
  .option("-t, --type <type>", "type of signature")
  .option("-u, --url [url...]", "URLs which can use the plugin")

program.parse();

const [type, url] = program.opts();
sign(type, url);
