package com.aam.vaccation.service

import com.aam.vaccation.model.CarRental
import com.aam.vaccation.repository.CarRentalRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CarRentalService {

    @Autowired
    lateinit var carRentalRepository: CarRentalRepository

    fun createCarRental(): CarRental{
        val carRental = CarRental("Test", "Test")
       return carRentalRepository.save(carRental)
    }
}