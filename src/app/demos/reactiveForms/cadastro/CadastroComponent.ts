import { Usuario } from './models/usuario';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { NgBrazilValidators, TextMask } from 'ng-brazil';
import { utilsBr } from 'js-brasil';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {
    
    cadastroForm: FormGroup;

    usuario: Usuario;
    formResult: string = "";
    MASKS= utilsBr.MASKS;


    constructor(
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.cadastroForm = this.fb.group({
            nome: ['', Validators.required],
            cpf: ['',[Validators.required, NgBrazilValidators.cpf]],
            email: ['', [Validators.required, Validators.email]],
            senha: [''],
            senhaConfirmacao: ['']
        })
    }

    adicionarUsuario() {
        if(this.cadastroForm.dirty && this.cadastroForm.valid){
        this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value); 
        this.formResult = JSON.stringify(this.cadastroForm.value);
        }
        else{
            this.formResult = "Não submeteu !!"
        }     
    }
}