import {
  Column,
  Entity,
  GeneratedUUidColumn,
} from '@iaminfinity/express-cassandra';

@Entity<MovieEntity>({
  table_name: 'movies',
  key: ['id'],
})
export class MovieEntity {
  @GeneratedUUidColumn()
  id: any;

  @Column({ type: 'text' })
  name: string;
}
