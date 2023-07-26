package com.vacation.repository

import com.vacation.entity.HotelBooking
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation
import org.springframework.stereotype.Repository

@Repository
interface HotelBookingRepository : JpaRepositoryImplementation<HotelBooking, Long> {

    fun findAllByCustomerId(customerId: Long) : List<HotelBooking>
}
