import faker from 'faker'

export class Employee {
  id = null;
  name = '';
  position = '';
  office = '';
  age = 0;
  startDate = new Date();
  salary = 1.00;
}

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
]

export const getEmployees = (n = 100) => {
  const employees = [];
  for (let i = 0; i < n; i++) {
    const e = new Employee();
    e.id = faker.random.uuid();
    e.name = faker.name.findName();
    e.position = faker.name.jobTitle();
    e.office = cities[Math.floor(Math.random() * cities.length)];
    e.age = faker.random.number({ min:20, max:80 });
    e.startDate = faker.date.between('1980-01-01', '2018-12-31');
    e.salary = faker.random.number({ min: 20000, max: 200000, precision: 2});
    employees.push(e);
  }
  return employees;
}