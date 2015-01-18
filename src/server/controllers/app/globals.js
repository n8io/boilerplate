global.config = require('nconf').env([ 'NODE_ENV' ]);
global.pkgjson = require('../../../../package.json');
global.appStartTime = (new Date()).getTime();