package com.vacation.entity

import jakarta.persistence.Entity
import jakarta.persistence.Table
import java.time.LocalDateTime

@Entity
@Table(name = "CUSTOMERS")
data class Customer(val firstName: String, val lastName: String, val email: String, val password: String, val createdAt: LocalDateTime = LocalDateTime.now()) : AbstractJpaPersistable<Long>()