import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees!: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  
//    this.employees = [{
//      "id":1,
//      "firstName": "Daniel",
//      "lastName": "Obaj",
//      "emailId": "daniel@gmail.com"
//    }]
    
    this.getEmployees();      
  }

  private getEmployees(){
    this.employeeService.getEmployeesList()
    .subscribe(
      data => {
        this.employees = data;
        console.log(data);
        
    })
  }

}
