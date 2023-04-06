import packageInfo from '../../package.json'

export const environment = {
  production: true,
  version: packageInfo.version,
  apiRootUri: 'http://api.streamer.com/api/v1/',
  storage: {
    auth: {
      strategy: 'session',
      key: 'auth'
    }
  }
};
