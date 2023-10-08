import app from './app'
import config from './config'
import http from "http";

const server = http.createServer(app, {
  maxHeaderSize: 16384,
});

server.listen(config.port, () => {
  console.log(`🚀 ${config.name} ${config.version} 🚀`);
  console.log(
    `🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`
  );
});