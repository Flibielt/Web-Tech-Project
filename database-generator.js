const faker = require('faker');
const fs = require('fs');

const COUNT_OF_FISHERMAN = 5;
const COUNT_OF_CATCHES = 20;

generateFisherman = (id) => {
    let gender = (Math.random() * 10) % 2;
    return {
        id: id,
        firstName: faker.name.firstName(gender),
        lastName: faker.name.lastName(gender),
        phone: faker.phone.phoneNumber(),
        techniques: faker.lorem.words(),
        equipment: faker.lorem.words(),
        fishingPoles: faker.lorem.words(),
        bait: faker.lorem.words(),
        address: {
            zipCode: faker.address.zipCode(),
            street: faker.address.streetName(),
            city: faker.address.city(),
            houseNumber: Math.floor(Math.random() * 10)
        }
    }
};

let fishermans = [];
for (let i = 0; i < COUNT_OF_FISHERMAN; i++) {
    fishermans.push(generateFisherman(i));
}
