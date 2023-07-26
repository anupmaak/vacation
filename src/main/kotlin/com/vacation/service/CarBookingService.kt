package com.vacation.service

import com.vacation.controller.CarBookingController
import com.vacation.dto.CarBooking
import com.vacation.entity.CarType
import com.vacation.repository.CarBookingRepository
import com.vacation.repository.CarTypeRepository
import com.vacation.repository.CustomerRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CarBookingService {

    @Autowired
    private lateinit var carTypeRepository: CarTypeRepository

    @Autowired
    private lateinit var customerRepository: CustomerRepository

    @Autowired
    private lateinit var carBookingRepository: CarBookingRepository;

    fun getCarTypes(): List<CarType> {
        return carTypeRepository.findAll()
    }

    fun bookCar(carBooking: CarBooking): com.vacation.entity.CarBooking {
        var booking : com.vacation.entity.CarBooking? = null
        customerRepository.findById(carBooking.customerId.toLong()).ifPresent { customer ->
            carTypeRepository.findById(carBooking.carType.toLong()).ifPresent { carType ->
                booking = com.vacation.entity.CarBooking(carType = carType, customer = customer, fromDate = carBooking.fromDate, toDate = carBooking.toDate, status = "BOOKED")
                booking = carBookingRepository.save(booking!!)
            }
        }
        return booking!!
    }

    fun getAllCustomerBookings(id: String): List<com.vacation.entity.CarBooking> {
        return carBookingRepository.findAllByCustomerId(id.toLong())
    }
}