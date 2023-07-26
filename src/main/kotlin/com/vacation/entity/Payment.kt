package com.vacation.entity

import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import java.time.LocalDateTime

@Entity
@Table(name = "PAYMENTS")
data class Payment(
        @OneToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "booking_id", referencedColumnName = "id", nullable = false)
        val booking: CarBooking,
        val amount: Double,
        val status: String,
        val createdAt: LocalDateTime = LocalDateTime.now()
): AbstractJpaPersistable<Long>()
