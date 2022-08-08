import {
  Column,
  CreateDateColumn,
  Entity,
  GeneratedUUidColumn,
  IndexColumn,
  UpdateDateColumn,
} from '@iaminfinity/express-cassandra';

@Entity({
  table_name: 'user',
  key: ['id'],
})
export class UserEntity {
  @GeneratedUUidColumn()
  id: any;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  @IndexColumn()
  email: string;

  @Column({ type: 'text' })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'text' })
  created_by: string;

  @Column({ type: 'text' })
  updated_by: string;

  @Column({
    type: 'boolean',
    default: () => true,
  })
  is_active: boolean;
}
