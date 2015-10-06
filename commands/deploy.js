'use strict';

var Command = require('../lib/command');
var requireAccess = require('../lib/requireAccess');
var requireConfig = require('../lib/requireConfig');
var acquireRefs = require('../lib/acquireRefs');
var deploy = require('../lib/deploy');

module.exports = new Command('deploy')
  .description('deploy hosting assets and rules for the current app')
  .option('-f, --firebase <app>', 'override the app specified in firebase.json')
  .option('-m, --message <message>', 'an optional message describing this deploy')
  .before(requireAccess)
  .before(requireConfig)
  .before(acquireRefs)
  .action(function(options) {
    console.log('⚠️⚠️⚠️⚠️⚠️⚠️⚠️ UNDER CONSTRUCTION ⚠️⚠️⚠️⚠️⚠️⚠️⚠️\nSorry, this command is not quite fully baked.');
    return;
    return deploy(['hosting', 'rules'], options);
  });
