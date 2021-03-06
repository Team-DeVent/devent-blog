import { createConnection } from 'mysql2';
import data from '../config/database.js';

const conn = createConnection({
  host     : data.host,
  user     : data.username,
  password : data.password,
  database : data.database,
  port     : data.port,
  multipleStatements: true 
});

export default conn;