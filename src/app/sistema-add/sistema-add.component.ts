import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SistemasServiceService } from '../sistemas-service.service';

@Component({
  selector: 'app-sistema-add',
  templateUrl: './sistema-add.component.html',
  styleUrls: ['./sistema-add.component.css']
})
export class SistemaAddComponent implements OnInit {

  angularForm: FormGroup;
  constructor(private fb: FormBuilder, private ts: SistemasServiceService) {
    this.createForm();
  }

  createForm() {
    this.angularForm = this.fb.group({
      DescSsistema: ['', Validators.required]
    })
  }

  createSistema(DescSsistema) {
    this.ts.createSistema(DescSsistema);// chama o arquivo
  }

  ngOnInit() {
  }

}