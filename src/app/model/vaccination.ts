export type List<T> = {
    results: T[];
  };
  
  export type Vaccination = {
    firstName: string;
    lastName: string;
    birthdate: Date;
    vaccineName: string;
    dose: number;
    date: Date;
  };
  
  export function parseVaccine(data:any): List<Vaccination>{
    console.log(data)
    return {
      results: data,
    }
  }