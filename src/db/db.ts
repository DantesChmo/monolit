import { Sequelize as PgClient } from 'sequelize';
import { S3Client } from '../lib/S3Client';
import { RedisClient } from '../lib/RedisClient';

const pgClient = new PgClient('postgres://db_user:db_user@database:5432/db_name');
const s3Client = new S3Client({
  accessKeyId: 'someKey',
  secretAccessKey: 'someSecret',
  endpoint: 's3',
  port: 9000,
  bucketName: 'avatars'
});
const redisClient = new RedisClient({host: 'cache', port: 6379});

export {
  pgClient,
  s3Client,
  redisClient
};
