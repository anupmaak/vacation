package com.vacation.entity

import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import java.time.LocalDateTime

@Entity
@Table(name = "CAR_TYPES")
data class CarType(
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "location_id", referencedColumnName = "id", nullable = false)
        val location: Location,
        val model: String,
        val availability: Int,
        val price: Double,
        val createdAt: LocalDateTime = LocalDateTime.now()) : AbstractJpaPersistable<Long>()
