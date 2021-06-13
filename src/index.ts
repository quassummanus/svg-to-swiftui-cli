#! /usr/bin/env node

import {convert} from 'svg-to-swiftui-core';
import meow from 'meow';
import {readFileSync, writeFileSync} from 'fs';

const cli = meow();

const [svgFilePath, targetSwiftFilePath] = cli.input;

try {
  const svg = readFileSync(svgFilePath);

  const swift = convert(svg.toString());

  writeFileSync(targetSwiftFilePath, swift);
} catch {
  cli.showHelp();
}
