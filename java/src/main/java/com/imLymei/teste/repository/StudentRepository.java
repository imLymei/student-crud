// Create the table used to store data with the objects stored and the IDENTITY type
package com.imLymei.teste.repository;

import com.imLymei.teste.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
