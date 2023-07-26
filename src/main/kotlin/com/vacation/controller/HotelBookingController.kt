package com.vacation.controller

import com.vacation.dto.HotelBooking
import com.vacation.service.HotelBookingService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("hotel")
class HotelBookingController {

    @Autowired
    private lateinit var hotelBookingService: HotelBookingService

    @PostMapping("/booking")
    fun bookCar(@RequestBody hotelBooking: HotelBooking): com.vacation.entity.HotelBooking {
        return hotelBookingService.bookHotel(hotelBooking)
    }

    @GetMapping("/booking/{id}")
    fun getAllBookings(@PathVariable("id") id: String ): List<com.vacation.entity.HotelBooking> {
        return hotelBookingService.getAllCustomerBookings(id)
    }

}