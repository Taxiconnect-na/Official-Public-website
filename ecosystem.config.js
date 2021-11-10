module.exports = {
  apps: [
    {
      name: "Website",
      script: "npm start",
      autorestart: true,
      watch: false,
      max_memory_restart: "2G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
