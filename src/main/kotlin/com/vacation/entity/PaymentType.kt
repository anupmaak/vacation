package com.vacation.entity

import jakarta.persistence.Entity
import jakarta.persistence.Table

@Entity
@Table(name = "PAYMENT_TYPES")
data class PaymentType(
        val name: String,
        val description: String
): AbstractJpaPersistable<Long>()
