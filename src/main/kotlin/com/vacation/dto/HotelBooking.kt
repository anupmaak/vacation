package com.vacation.dto

import java.time.LocalDateTime

data class HotelBooking(var customerId: String, var hotel: String, val roomType: String, var noOfRooms: Int, var location: String, var fromDate: LocalDateTime, var toDate: LocalDateTime)
