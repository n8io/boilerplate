module.exports = function(){
  var configFileBaseName = 'config';
  var configDir = path.join(__dirname, '..', 'config');

  cfg = global.config;
  if(!cfg){
    throw Error('No global configuration variable is set. config is undefined.');
  }

  // Pull in NODE_ENV from environment if set
  cfg.env(['NODE_ENV']);

  // Default to 'development' in case it is not provided
  cfg.defaults({ 'NODE_ENV': 'development' });

  // Read in any command line args for overrides
  cfg.argv();

  // Load environment config from file system
  var envConfig = configFileBaseName + '.' + cfg.get('NODE_ENV') + '.json';
  cfg.file({
    file: envConfig,
    dir: configDir,
    search: true
  });

  // Load default configuration from file system
  var defaultConfigPath = path.join(configDir, configFileBaseName + '.json');
  cfg.file('default', defaultConfigPath);

  // Push evaluated configs values back for logging later on
  cfg.set('envConfig', envConfig);
  cfg.set('defaultConfig', configFileBaseName +  '.json');
  cfg.set('cdn:qs', getCdnQueryString());

  // Check for any config validation errors
  var configValidationErrors = [];
  var configRequiredValues = cfg.get('__required') || [];

  for (var i = configRequiredValues.length - 1; i >= 0; i--) {
    if(typeof cfg.get(configRequiredValues[i]) === 'undefined'){
      configValidationErrors.push({
        reason: configRequiredValues[i] + ' is a required configuration value. Please add a valid value to your environment config: ' + cfg.get('envConfig')
      });
    }
  }

  // Set so these can be evaluated later, but before app startup
  cfg.set('configValidationErrors', configValidationErrors);

  function getCdnQueryString(){
    var cbk = cfg.get('cdn:cacheKey') || (cfg.get('NODE_ENV').indexOf('dev') === 0 ? (new Date()).getTime() : '');
    if(!cbk) return '';

    return '?noc=' + cbk.toString();
  }
};