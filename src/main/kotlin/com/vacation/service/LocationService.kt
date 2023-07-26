package com.vacation.service

import com.vacation.entity.Location
import com.vacation.repository.LocationRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class LocationService {

    @Autowired
    private lateinit var locationRepository: LocationRepository

    fun getLocations(): MutableList<Location> {
        return locationRepository.findAll()
    }
}