import { Component } from '@angular/core';
import { Appointment } from '../model/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  newTitle: string = ""
  newDate: Date = new Date()

  appointments: Appointment[] = []

  ngOnInit(): void {
    let stored = localStorage.getItem("apointments")
    this.appointments = stored ? JSON.parse(stored) : []
  }

  addAppointment(): void {
    if (this.newTitle.trim() && this.newDate) {
      let tempAppointment: Appointment = {
        id: Date.now(),
        title: this.newTitle,
        date: this.newDate
      }
      this.appointments.push(tempAppointment)
      this.clearAppointment()
      localStorage.setItem("apointments", JSON.stringify(this.appointments))
    }
  }
  clearAppointment(): void {
    this.newTitle = ""
    this.newDate = new Date()
  }

  removeAppointment(index:number): void {
    this.appointments.splice(index, 1)
    localStorage.setItem("apointments", JSON.stringify(this.appointments))
  }

  }
