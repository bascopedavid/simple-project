// src/services/repositories/UserDTO.test.ts
import { UserDTO } from '../UserDTO';
import { z } from 'zod';

describe('UserDTO', () => {
  it('should be defined', () => {
    expect(UserDTO).toBeDefined();
  });

  it('should have the correct properties', () => {
    const user: any = {
      _id: '123',
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      phone: '1234567890',
      website: 'https://example.com',
      address: {
        street: '123 Main St',
        suite: 'Apt 101',
        city: 'Anytown',
        zipcode: '12345',
        geo: { lat: 37.7749, lng: -122.4194 },
      },
      company: {
        name: 'Example Inc.',
        catchPhrase: 'Just do it!',
        bs: 'Software Development',
      },
      createdAt: new Date('2022-01-01T12:00:00.000Z'),
      updatedAt: new Date('2022-01-02T13:00:00.000Z'),
    };

    const dto = UserDTO.convertFromEntity(user);
    expect(dto).toEqual({
      id: '123',
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      phone: '1234567890',
      website: 'https://example.com',
      address: {
        street: '123 Main St',
        suite: 'Apt 101',
        city: 'Anytown',
        zipcode: '12345',
        geo: { lat: 37.7749, lng: -122.4194 },
      },
      company: {
        name: 'Example Inc.',
        catchPhrase: 'Just do it!',
        bs: 'Software Development',
      },
      createdAt: '2022-01-01T12:00:00.000Z',
      updatedAt: '2022-01-02T13:00:00.000Z',
    });
  });

  it('should validate the schema', () => {
    const user = UserDTO.convertFromEntity(user);
    expect(z.string().parse(user.id)).toBeInstanceOf(String);
    expect(z.string().parse(user.name)).toBeInstanceOf(String);
    expect(z.string().parse(user.username)).toBeInstanceOf(String);
    expect(z.email().parse(user.email)).toBeInstanceOf(String);
    expect(z.string().parse(user.phone)).toBeInstanceOf(String);
    expect(z.url().parse(user.website)).toBeInstanceOf(String);
    expect(addressDTOSchema.parse(user.address)).toBeInstanceOf(Object);
    expect(companySTOSchema.parse(user.company)).toBeInstanceOf(Object);
  });
});
