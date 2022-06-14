import { GeneratedUUidColumn } from '@iaminfinity/express-cassandra';

export class MovieEntity {
  @GeneratedUUidColumn()
  id: any;
}
