package com.vacation.repository

import com.vacation.entity.Location
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation
import org.springframework.stereotype.Repository

@Repository
interface LocationRepository : JpaRepositoryImplementation<Location, Long>
