package com.vacation.service

import com.vacation.entity.Hotel
import com.vacation.repository.HotelRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class HotelService {

    @Autowired
    private lateinit var hotelRepository: HotelRepository

    fun getCarTypes(): List<Hotel> {
        return hotelRepository.findAll()
    }
}