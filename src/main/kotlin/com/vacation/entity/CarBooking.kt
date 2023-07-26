package com.vacation.entity

import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import java.time.LocalDateTime

@Entity
@Table(name = "CAR_BOOKINGS")
data class CarBooking(
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "car_type_id", referencedColumnName = "id", nullable = false)
        val carType: CarType,
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "customer_id", referencedColumnName = "id", nullable = false)
        val customer: Customer,
        val status: String,
        val fromDate: LocalDateTime,
        val toDate: LocalDateTime,
        val createdAt: LocalDateTime = LocalDateTime.now()

) : AbstractJpaPersistable<Long>()
