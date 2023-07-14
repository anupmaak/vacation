package com.aam.vaccation.model

import com.aam.vaccation.common.AbstractJpaPersistable
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "CAR_RENTAL")
data class CarRental(var carNumber: String, var carModel: String): AbstractJpaPersistable<Long>()