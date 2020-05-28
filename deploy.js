var FtpDeploy = require("ftp-deploy")
var ftpDeploy = new FtpDeploy()

var config = {
  user: "admin_top",
  // Password optional, prompted if none given
  password: "BU1nImlZXV",
  host: "5.61.50.231",
  port: 21,
  localRoot: __dirname + "/public",
  remoteRoot: "/",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*", "**/*"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**",
  ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
}

// use with promises
ftpDeploy
  .deploy(config)
  .then(res => console.log("finished:", res))
  .catch(err => console.log(err))

// use with callback
ftpDeploy.deploy(config, function (err, res) {
  if (err) console.log(err)
  else console.log("finished:", res)
})
