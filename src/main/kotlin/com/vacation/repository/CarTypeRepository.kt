package com.vacation.repository

import com.vacation.entity.CarType
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation
import org.springframework.stereotype.Repository

@Repository
interface CarTypeRepository : JpaRepositoryImplementation<CarType, Long>
