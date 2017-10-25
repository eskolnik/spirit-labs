let hostUrl;
switch (process.env.NODE_ENV) {
  case 'development':
    hostUrl = 'http://localhost:3000'
    break;
  default:
    hostUrl = 'https://spookoween2017.herokuapp.com/'
}

export default hostUrl;
