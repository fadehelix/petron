const faker = require('faker');

const cities = ['New York', 'Buffalo', 'Rochester', 'Albany'];
const dateRangeWeek = [
  '01.07',
  '02.07',
  '03.07',
  '04.07',
  '05.07',
  '06.07',
  '07.07',
];

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

  const incomeInAllStations = (stations) => {
    let obj = {};

    for (let i = 0; i < stations.length; i++) {
      obj[stations[i].code] = Math.round(Math.random() * 1000);
    }

    return obj;
  };

  console.log(incomeInAllStations);

  return {
    stations: stationsEndpoint.map((station) => ({
      ...station,
      dailyNetIncomePerHour: getNetIncomePerHour(6, 24),
      weeklyNetIncomePerDay: getNetIncomePerDay(7),
    })),
    dailyIncomeByStation: dateRangeWeek.map((day, index) => {
      return {
        name: day,
        amt: index * 100,
        keys: Object.keys(incomeInAllStations(stationsEndpoint)),
        ...incomeInAllStations(stationsEndpoint),
      };
    }),
  };
};
