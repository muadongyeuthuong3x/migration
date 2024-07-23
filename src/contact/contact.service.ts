import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {

  }
  async create(createContactDto: CreateContactDto): Promise<Contact> {
    const dataNew = new Contact();
    dataNew.name = createContactDto.name;
    dataNew.age = createContactDto.age;
    dataNew.address = createContactDto.address;
    dataNew.address1 = createContactDto.address1
    console.log(dataNew)
    const data = await this.contactRepository.save(dataNew);
    return data;
  }

  async findAll(): Promise<Contact[]> {
    const data = await this.contactRepository.find();
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
