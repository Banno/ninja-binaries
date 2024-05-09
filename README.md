# ninja-binaries

Contains the released binaries for [Ninja](https://ninja-build.org/) and automatically uses the correct one for your platform (Linux, Mac, or Windows).

The `ninja` binary is available after the package is installed:

```
$ npm install ninja-binaries -g
```

## Development

You can check the [Github repo](https://github.com/ninja-build/ninja/releases) or follow the [Atom feed](https://github.com/ninja-build/ninja/releases.atom) of the Ninja project for new releases.

To update the Ninja binaries in this project, run `./get-binaries.sh VERSION` where `VERSION` is the version of Ninja you want:

```
$ ./get-binaries.sh v1.7.2
```

See [the script](get-binaries.sh) for details.
