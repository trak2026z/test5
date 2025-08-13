import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(user: Partial<User>) {
    const entity = this.usersRepository.create(user);
    return this.usersRepository.save(entity);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, attrs: Partial<User>) {
    await this.usersRepository.update(id, attrs);
    return this.usersRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
