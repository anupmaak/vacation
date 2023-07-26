package com.vacation.entity

import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import java.time.LocalDateTime

@Entity
@Table(name = "HOTEL_BOOKINGS")
data class HotelBooking(
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "hotel_id", referencedColumnName = "id", nullable = false)
        val hotel: Hotel,
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "customer_id", referencedColumnName = "id", nullable = false)
        val customer: Customer,
        val roomType: String,
        val noOfRooms: Number,
        val status: String,
        val fromDate: LocalDateTime,
        val toDate: LocalDateTime,
        val createdAt: LocalDateTime = LocalDateTime.now()

) : AbstractJpaPersistable<Long>()
