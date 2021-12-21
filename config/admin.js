module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d1caf69902b972ab5890988c538453c'),
  },
});
