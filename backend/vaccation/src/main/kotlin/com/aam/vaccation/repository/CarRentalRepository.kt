package com.aam.vaccation.repository

import com.aam.vaccation.model.CarRental
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface CarRentalRepository: CrudRepository<CarRental, Long>