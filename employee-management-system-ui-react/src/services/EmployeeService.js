import axios from "axios";

const EMPLOYEE_API_BASE_URL = "//localhost:8080/employee";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL,+"/add", {employee});
  }

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL + "/all");
  }

  deleteEmployee(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/delete/" + id);
  }

  getEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/find/" + id);
  }

  updateEmployee(employee) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/update/" + employee);
  }
}

export default new EmployeeService();
