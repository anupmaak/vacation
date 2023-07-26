package com.vacation.dto

import java.time.LocalDateTime

data class CarBooking(var customerId: String, var carType: String, var location: String, var fromDate: LocalDateTime, var toDate: LocalDateTime)
