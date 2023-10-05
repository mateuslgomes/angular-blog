import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private id: string | null = ''
  photoCover: string = ''
  contentTitle: string = ''
  contentDescription: string = ''
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValueToComponent(this.id)
  }

  setValueToComponent(id: string | null) {
    const result = dataFake.filter(value => value.id == id)[0]
      this.photoCover = result.photoConver
      this.contentDescription = result.description
      this.contentTitle = result.title
      this.contentDescription = result.description
  }

}
