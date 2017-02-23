const exec = require('child_process').exec;
const path = require('path');
const readFileSync = require('fs').readFileSync;

module.exports = function(source) {
  const callback = this.async();
  const cmd = 'sbt clean fastOptJS scalaVersion';

  var self = this;
  exec(cmd, { cwd: this.options.context }, function(error, stdout, _stderr) {
    if (error) { return callback(error, null); }

    const scalaVersion = stdout.toString().trim().split('\n').pop().replace(/\u001b\[0m/g, '').replace(/^\[info\] (\d+\.\d+)(\.\d+)?/, '$1').trim();
    const outDir = path.join(self.options.context, 'target', `scala-${scalaVersion}`);

    const modName = JSON.parse(readFileSync(path.join(outDir, 'classes', 'JS_DEPENDENCIES')).toString()).origin.moduleName;
    const outFile = path.join(outDir, `${modName}-fastopt.js`);

    callback(
      null,
      readFileSync(outFile).toString().replace(
        new RegExp(`\\n\/\/# sourceMappingURL=${modName}-fastopt\.js\.map`),
        `\n//# sourceMappingURL=${outFile}.map`
      )
    );
  });
};
