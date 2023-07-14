package com.aam.vaccation.controller

import com.aam.vaccation.model.CarRental
import com.aam.vaccation.service.CarRentalService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class CarRentalController {

    @Autowired
    private lateinit var carRentalService: CarRentalService

    @GetMapping("/createCar")
    fun createCarRental() : CarRental {
        return carRentalService.createCarRental()
    }
}