const faker = require('faker');
const fs = require('fs');

const COUNT_OF_FISHERMAN = 5;
const COUNT_OF_CATCHES = 20;
const COUNT_OF_LOCATIONS = 5;

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

let fishermen = [];
for (let i = 0; i < COUNT_OF_FISHERMAN; i++) {
    fishermen.push(generateFisherman(i + 1));
}

generateCatch = (id) => {
    return {
        id: id,
        timestamp: faker.date.past(Math.floor(Math.random() * 10)),
        location: faker.address.city(),
        weight: faker.random.number(),
        species: faker.random.word(),
        fishermanId: faker.random.number({min:1, max:COUNT_OF_FISHERMAN + 1})
    };
};

let catches = [];
for (let i = 0; i < COUNT_OF_CATCHES; i++) {
    catches.push(generateCatch(i));
}

generateLocation = (id) => {
    return {
        id: id,
        name: faker.address.city(),
        owner: faker.random.word(),
        lastMonthCatches: faker.random.number({min:1, max:100})
    }
}

let locations = [];
for (let i = 0; i < COUNT_OF_LOCATIONS; i++) {
    locations.push(generateLocation(i + 1));
}

fs.writeFile(
    'database.fake.json',
    JSON.stringify({fishermen: fishermen, catches: catches, locations: locations}),
    (err)=>{console.log(err)}
);
