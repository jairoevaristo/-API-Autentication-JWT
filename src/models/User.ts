import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string;

  @Column()
  senha: string;

  @BeforeInsert()
  @BeforeUpdate()
   async hashPassword() {
    this.senha = await bcrypt.hashSync(this.senha, 8);
  }

};

export default User;