module.exports = function(){
  var configFileBaseName = 'config';
  var configDir = path.join(__dirname, '..', 'config');

  if(!global.config){
    throw Error('No global configuration variable is set. config is undefined.');
  }

  // Pull in NODE_ENV from environment if set
  global.config.env(['NODE_ENV']);

  // Default to 'development' in case it is not provided
  global.config.defaults({ 'NODE_ENV': 'development' });

  // Read in any command line args for overrides
  global.config.argv();

  // Load environment config from file system
  var envConfig = configFileBaseName + '.' + global.config.get('NODE_ENV') + '.json';
  global.config.file({
    file: envConfig,
    dir: configDir,
    search: true
  });

  // Load default configuration from file system
  var defaultConfigPath = path.join(configDir, configFileBaseName + '.json');
  global.config.file('default', defaultConfigPath);

  // Push evaluated configs values back for logging later on
  global.config.set('envConfig', envConfig);
  global.config.set('defaultConfig', configFileBaseName +  '.json');
  global.config.set('cdn:qs', getCdnQueryString());

  // Check for any config validation errors
  var configValidationErrors = [];
  var configRequiredValues = global.config.get('__required') || [];

  for (var i = configRequiredValues.length - 1; i >= 0; i--) {
    if(typeof global.config.get(configRequiredValues[i]) === 'undefined'){
      configValidationErrors.push({
        reason: configRequiredValues[i] + ' is a required configuration value. Please add a valid value to your environment config: ' + global.config.get('envConfig')
      });
    }
  }

  // Set so these can be evaluated later, but before app startup
  global.config.set('configValidationErrors', configValidationErrors);

  function getCdnQueryString(){
    var cbk = global.config.get('cdn:cacheKey') || (global.config.get('NODE_ENV').indexOf('dev') === 0 ? (new Date()).getTime() : '');
    if(!cbk) { return ''; }

    return '?noc=' + cbk.toString();
  }
};