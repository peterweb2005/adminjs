import { Sequelize } from 'sequelize'

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_PORT,
  SYNC,
  POSTGRES_HOST,
} = process.env
const dbConfig = {
  HOST: "localhost",
  USER: 'adminjs-demo',
  PASSWORD: 'p@ssw0rd',
  DB: "adminjs-demo",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
/*const sequelizeUrl = [
  'postgres://', POSTGRES_USER, ':', POSTGRES_PASSWORD, '@', POSTGRES_HOST, ':', POSTGRES_PORT,
  '/', POSTGRES_DATABASE,
].join('')*/

export const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'mysql',
  dialectOptions: {
    // Your mysql2 options here
  },
  logging: false,
})

export const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  if (SYNC === 'true') {
    await sequelize.sync({ force: true })
    console.log('Database has been synced.')
  }

  return sequelize
}

process.on('exit', () => {
  sequelize.close()
})
