package com.vacation.controller

import com.vacation.entity.Location
import com.vacation.service.LocationService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("location")
class LocationController {

    @Autowired
    private lateinit var locationService: LocationService

    @GetMapping
    fun getLocations(): MutableList<Location> {
        return locationService.getLocations()
    }
}