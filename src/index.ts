/src/index.ts
console.log('Hey there!');
import { faker } from '@faker-js/faker';
const fake = faker.simpleFormat;
console.log(fake.sentence());
export default {
  data() {
    return {
      message: 'Hello World!'
    }
  }
};
