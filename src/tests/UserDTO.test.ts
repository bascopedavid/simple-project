import { expect } from 'chai';
import { UserDTO } from '../models';

describe('UserDTO', () => {
  it('should have a name property', () => {
    const user = new UserDTO();
    expect(user.name).to.exist;
  });

  it('should have an email property', () => {
    const user = new UserDTO();
    expect(user.email).to.exist;
  });
});
