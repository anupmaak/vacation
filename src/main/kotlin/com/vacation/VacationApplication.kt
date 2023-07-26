package com.vacation

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class VacationApplication

fun main(args: Array<String>) {
	runApplication<VacationApplication>(*args)
}
