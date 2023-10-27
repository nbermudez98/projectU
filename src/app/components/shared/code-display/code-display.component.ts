import { Component, Input, OnInit } from '@angular/core';
import * as Prism from 'prismjs';

// Importa el lenguaje que necesites
import 'prismjs/components/prism-javascript';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.css']
})
export class CodeDisplayComponent implements OnInit {
  @Input() codigo: string;
  @Input() lenguaje: string = 'none';
  ngOnInit(): void {
    Prism.highlightAll();
  }

  get codigoConSaltosDeLinea(): string {
    // Reemplazar los saltos de línea con etiquetas <br>
    return this.codigo.replace(/\n/g, '<br>');
  }

  copiarAlPortapapeles() {
    const el = document.createElement('textarea');
    el.value = this.codigo;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
