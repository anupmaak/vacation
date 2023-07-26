package com.vacation.entity

import jakarta.persistence.Entity
import jakarta.persistence.Table
import java.time.LocalDateTime

@Entity
@Table(name = "LOCATIONS")
data class Location (val cityName : String, val createdAt : LocalDateTime = LocalDateTime.now()) : AbstractJpaPersistable<Long>()