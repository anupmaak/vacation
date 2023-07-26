package com.vacation.service

import com.vacation.dto.Login
import com.vacation.entity.Customer
import com.vacation.repository.CustomerRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CustomerService {

    @Autowired
    private lateinit var customerRepository: CustomerRepository

    fun createCustomer(customer: Customer): Customer {
        return customerRepository.save(customer)
    }

    fun loginCustomer(login: Login): com.vacation.dto.Customer {
        val customer = customerRepository.findByEmail(login.email)
        if(customer.isEmpty){
            return com.vacation.dto.Customer()
        }
        return com.vacation.dto.Customer(customer.get().getId()!!, customer.get().firstName, customer.get().lastName, true)
    }
}