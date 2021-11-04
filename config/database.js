const parse = require('pg-connection-string').parse;
module.exports = ({ env }) => {


  if(env('NODE_ENV')=== 'production'){
    const config = prase(process.env.NODE_ENV);
  }
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'sqlite',
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  }
};
