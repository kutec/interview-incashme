import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { mockUsers } from "./mock.users";

@Component({
  selector: "app-users",
  styleUrls: ["users.component.css"],
  templateUrl: "users.component.html"
})
export class UsersComponent {
  displayedColumns: string[] = ["name", "email", "type", "date"];
  dataSource = new MatTableDataSource<User>(users);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface User {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const users: User[] = mockUsers;