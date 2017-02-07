# ninja-binaries

Contains the released binaries for [Ninja](https://ninja-build.org/) and automatically uses the correct one for your platform (Linux, Mac, or Windows).

The `ninja` binary is available after the package is installed:

```
$ npm install ninja-binaries -g
```

## Development

To update the Ninja binaries in the project, run `./get-binaries.sh VERSION` where `VERSION` is the version of Ninja you want:

```
$ ./get-binaries.sh v1.7.2
```

See [the script](get-binaries.sh) for details.
