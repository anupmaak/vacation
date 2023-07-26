package com.vacation.repository

import com.vacation.entity.CarType
import com.vacation.entity.Hotel
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation
import org.springframework.stereotype.Repository

@Repository
interface HotelRepository : JpaRepositoryImplementation<Hotel, Long>
