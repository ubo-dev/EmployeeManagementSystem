package com.ubo.employee.services;

import com.ubo.employee.exception.UserNotFoundException;
import com.ubo.employee.model.Employee;
import com.ubo.employee.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class EmployeeService
{
    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository)
    {
        this.employeeRepository = employeeRepository;
    }

    public Employee addEmployee(Employee employee)
    {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(employee);
    }

    public List<Employee> findAllEmployee(Employee employee)
    {
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Employee employee)
    {
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeById(Long id)
    {
        return employeeRepository.findEmployeeById(id).orElseThrow(() -> new UserNotFoundException("User by id" + id + " was not found."));
    }

    public void deleteEmployee(Long id)
    {
        employeeRepository.deleteEmployeeById(id);
    }


}
