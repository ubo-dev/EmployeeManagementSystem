package com.ubo.employee.services;

import com.ubo.employee.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(long id);

    Employee getEmployeeById(long id);

    Employee updateEmployee(long id, Employee employee);
}
