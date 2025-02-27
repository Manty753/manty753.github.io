import { faker } from '@faker-js/faker';
export function createRandomUser() {
  return {
    id: faker.string.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number({ style: 'international' }),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});
