import prisma from "../config/database.js";

async function getCars() {
  const data = prisma.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const data = prisma.cars.findMany({ 
    where: { 
      id: id 
    }
  })
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = prisma.cars.findUnique({
    where: { licensePlate: licensePlate }
  })
  return data;
}

async function createCar(model: string, licensePlate: string, year: string, color: string) {
  return prisma.cars.create({
    data: {
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color
    }
  })
}

async function deleteCar(id: number) {
  return prisma.cars.delete( { 
    where: {
      id: id
    }})
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;