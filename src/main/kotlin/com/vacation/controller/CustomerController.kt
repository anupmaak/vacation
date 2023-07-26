package com.vacation.controller

import com.vacation.dto.Login
import com.vacation.entity.Customer
import com.vacation.service.CustomerService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("customer")
class CustomerController {

    @Autowired
    private lateinit var customerService: CustomerService

    @PostMapping
    fun createCustomer(@RequestBody customer: Customer): Customer {
        return customerService.createCustomer(customer)
    }
    @PostMapping("/login")
    fun loginCustomer(@RequestBody login: Login): com.vacation.dto.Customer {
        return customerService.loginCustomer(login)
    }
}