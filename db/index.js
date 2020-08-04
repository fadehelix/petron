const faker = require('faker');

const cities = ['New York', 'Buffalo', 'Rochester', 'Albany'];

const generateStations = (howMany = 1) => {
  const stations = [];

  for (let i = 1; i <= howMany; i++) {
    stations.push({
      id: i,
      code: `PT${i}`,
      city: faker.random.arrayElement(cities),
      address: faker.address.streetAddress(),
      prices: {
        LPG: faker.random.number({ min: 2, max: 6 }),
        Diesel: faker.random.number({ min: 2, max: 6 }),
        standard: faker.random.number({ min: 2, max: 6 }),
      },
    });
  }
  return stations;
};

const getNetIncomePerHour = (openHour = 6, closeHour = 22) => {
  const hours = [];

  for (let i = 0; i < 24; i++) {
    let salesAmount = 0;
    if (i >= openHour && i < closeHour) {
      salesAmount = faker.random.number();
    }
    hours.push({
      [i]: salesAmount,
    });
  }

  return hours;
};

const getNetIncomePerDay = (daysRange) => {
  const days = [];

  for (let i = 0; i < daysRange; i++) {
    days.push(faker.random.number());
  }

  return days;
};

module.exports = () => {
  const stationsEndpoint = generateStations(5);

  return {
    stations: stationsEndpoint.map((station) => ({
      ...station,
      dailyNetIncomePerHour: getNetIncomePerHour(6, 24),
      weeklyNetIncomePerDay: getNetIncomePerDay(7),
    })),
  };
};
