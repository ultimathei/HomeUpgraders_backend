export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'hup_db'),
      user: env('DATABASE_USERNAME', 'hup_admin'),
      password: env('DATABASE_PASSWORD', 'c0mm@nd+V'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
