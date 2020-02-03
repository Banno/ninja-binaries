#!/bin/bash
#
# Downloads the binaries for the specified release.
# Requires curl & tar.
# Usage: get-binaries.sh VERSION
#

# Check that a version was specified.
if [[ -z "$1" ]] ; then
	echo "Please specify the version to download:"
	echo "  ./get-binaries.sh VERSION"
	exit 1
fi

# Release binaries from https://github.com/ninja-build/ninja/releases
declare -a pkgs=(
	"ninja-linux.zip"
	"ninja-mac.zip"
	"ninja-win.zip"
)

# Download & save the binaries.
for FILE in "${pkgs[@]}"
do
	curl -L "https://github.com/ninja-build/ninja/releases/download/$1/$FILE" | tar -x -C binaries
	if [[ "$FILE" == "ninja-win.zip" ]] ; then
		EXE_SUFFIX=".exe"
	else
		EXE_SUFFIX=""
	fi
	NEW_NAME=`basename "$FILE" .zip`
	mv "binaries/ninja$EXE_SUFFIX" "binaries/$NEW_NAME$EXE_SUFFIX"
	chmod a+x "binaries/$NEW_NAME$EXE_SUFFIX"
done
