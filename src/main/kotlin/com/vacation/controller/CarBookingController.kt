package com.vacation.controller

import com.vacation.dto.CarBooking
import com.vacation.entity.CarType
import com.vacation.service.CarBookingService
import jakarta.websocket.server.PathParam
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("car")
class CarBookingController {

    @Autowired
    private lateinit var carBookingService: CarBookingService

    @GetMapping("/types")
    fun getCarTypes(): List<CarType> {
        return carBookingService.getCarTypes()
    }

    @PostMapping("/booking")
    fun bookCar(@RequestBody carBooking: CarBooking): com.vacation.entity.CarBooking {
        return carBookingService.bookCar(carBooking)
    }

    @GetMapping("/booking/{id}")
    fun getAllBookings(@PathVariable("id") id: String ): List<com.vacation.entity.CarBooking> {
        return carBookingService.getAllCustomerBookings(id)
    }

}