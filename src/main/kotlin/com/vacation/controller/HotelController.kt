package com.vacation.controller

import com.vacation.entity.CarType
import com.vacation.entity.Hotel
import com.vacation.service.HotelService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("hotel")
class HotelController {

    @Autowired
    private lateinit var hotelService: HotelService

    @GetMapping
    fun getAllHotel(): List<Hotel> {
        return hotelService.getCarTypes()
    }
}