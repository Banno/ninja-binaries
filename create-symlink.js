#!/usr/bin/env node
//
// Creates a "ninja" symlink in the root folder.
//
const fs = require('fs');
const os = require('os');
const path = require('path');
const pkg = require('./package.json');

// Determine the binary filename.
let binary;
let suffix = '';
if (os.platform() === 'darwin') {
	binary = 'ninja-mac';
} else if (os.platform() === 'win32') {
	binary = 'ninja-win.exe';
	suffix = '.exe';
} else {
	binary = 'ninja-linux';
}

const sourceFile = path.join('binaries', binary);
const destFile = path.join(__dirname, `ninja${suffix}`);

// Delete any existing symlink, if it exists.
try {
	fs.unlinkSync(destFile);
} catch (err) {}

// Create the symlink.
// Windows requires an Administrator to create symlinks,
//   so copy the file if symlinking doesn't work.
let operation;
try {
	fs.symlinkSync(sourceFile, destFile);
	process.stdout.write(`Symlinked ${pkg.name} to ${sourceFile}\n`);
} catch (err) {
	let contents = fs.readFileSync(sourceFile);
	fs.writeFileSync(destFile, contents);
	process.stdout.write(`Copied ${pkg.name} from ${sourceFile}\n`);
}
