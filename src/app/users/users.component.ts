import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { mockUsers } from "./mock.users";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-users",
  styleUrls: ["users.component.css"],
  templateUrl: "users.component.html"
})
export class UsersComponent {
  displayedColumns: string[] = ["name", "email", "type", "date"];
  dataSource = new MatTableDataSource<User>(users);
  routeParam;
  selectedType: string;
  isToggled = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit() {
    this.selectedType = "";
    this.route.params.subscribe(params => {
      this.routeParam = params.type;
      if (this.routeParam) {
        this.onValChange(this.routeParam);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public onValChange(value) {
    this.isToggled = true;
    this.selectedType = value;
    this.changeRoute(value);
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  changeRoute(routeParam) {
    this.router.navigate(["/users", routeParam]);
  }
}

export interface User {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const users: User[] = mockUsers;
