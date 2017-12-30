module.exports = {
  apps: [{
    name: 'thebreederapp',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-36-189-2.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/sandbox.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Xyrd/thebreederapp.git',
      path: '/home/ubuntu/thebreederapp',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
