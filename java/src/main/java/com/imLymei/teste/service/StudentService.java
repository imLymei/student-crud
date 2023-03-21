// Create the object that make functions with the db
package com.imLymei.teste.service;

import com.imLymei.teste.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
