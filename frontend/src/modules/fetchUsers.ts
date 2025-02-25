import axios from "axios";

export interface Funcionario {
    image: string;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
  }


export const api = axios.create({
  baseURL: "http://localhost:3000/employees"
});