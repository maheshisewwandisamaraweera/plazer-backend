
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

type NewType = number;

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  userid: number;

  @Column({ unique: true })
  fullname: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  telephoneNumber: number;

  @Column()
  address: string;

  @Column()
  password: string;

  @Column()
  organizationName: string;
}
