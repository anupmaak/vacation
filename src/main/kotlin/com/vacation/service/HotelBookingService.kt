package com.vacation.service

import com.vacation.entity.HotelBooking
import com.vacation.repository.CustomerRepository
import com.vacation.repository.HotelBookingRepository
import com.vacation.repository.HotelRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class HotelBookingService {

    @Autowired
    private lateinit var hotelBookingRepository: HotelBookingRepository

    @Autowired
    private lateinit var hotelRepository: HotelRepository

    @Autowired
    private lateinit var customerRepository: CustomerRepository

    fun bookHotel(hotelBooking: com.vacation.dto.HotelBooking): HotelBooking {
        var booking : com.vacation.entity.HotelBooking? = null
        customerRepository.findById(hotelBooking.customerId.toLong()).ifPresent { customer ->
            hotelRepository.findById(hotelBooking.hotel.toLong()).ifPresent { hotel ->
                booking = com.vacation.entity.HotelBooking(hotel = hotel, customer = customer, fromDate = hotelBooking.fromDate, toDate = hotelBooking.toDate, status = "BOOKED", roomType = hotelBooking.roomType, noOfRooms = hotelBooking.noOfRooms)
                booking = hotelBookingRepository.save(booking!!)
            }
        }
        return booking!!
    }

    fun getAllCustomerBookings(id: String): List<HotelBooking> {
        return hotelBookingRepository.findAllByCustomerId(id.toLong())
    }
}