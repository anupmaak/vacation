package com.vacation.repository

import com.vacation.entity.Customer
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation
import org.springframework.stereotype.Repository
import java.util.Optional

@Repository
interface CustomerRepository : JpaRepositoryImplementation<Customer, Long> {
  fun findByEmail(email: String): Optional<Customer>
}