#!/bin/bash

BASE=`dirname $0`
INSTALL_SCRIPT=install-`date '+%Y%m%d%H%M%S'`.sh

echo "Writing install script: ${INSTALL_SCRIPT}"
node ${BASE}/dump-deps.js > ${BASE}/${INSTALL_SCRIPT}

echo "Backing up original package.json file"
node ${BASE}/remove-deps.js

echo "Removing old dependencies"
rm -f ${BASE}/../package-lock.json
rm -f ${BASE}/../yarn.lock
rm -rf ${BASE}/../node_modules

echo "Upgrading dependencies"
bash ${BASE}/${INSTALL_SCRIPT}

rm -f ${BASE}/${INSTALL_SCRIPT}
