import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'db-oishiramen.cwjyed1vzrxl.us-east-2.rds.amazonaws.com',
        user: 'adminOish',
        password: '123Oishi*',
        database: 'BDRROISHI',
        connectionLimit: 10
    });
    /*
        const connection = await createPool({
            host: 'seminario.cgres1bnzqkw.us-east-2.rds.amazonaws.com',
            user: 'adminW',
            password: '1234will1',
            database: 'BDRROSHI',
            connectionLimit: 10
        }); */
    return connection;
}
