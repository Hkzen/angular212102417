import { Component, AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css'
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $("#table1").DataTable
    (
      {
        "columndefs" :
        [
          {
            "targets" : 2,
            "className" : "text-right"
          }
        ]
      }
    );

    this.getData();
  }

  ngOnInit(): void {
    
  }

  getData(): void {
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=4560bbfb41134ec9b86f065b8490c1ee";

    this.http.get(url).subscribe((data : any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD : " + idr2);
      var row = [1, "USD", idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD : " + sgd2);
      row = [2, "SGD", sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND : " + bnd2);
      row = [3, "BND", bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
      console.log("HKD : " + hkd2);
      row = [4, "HKD", hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "", "BTC");
      console.log("BTC : " + btc2);
      row = [5, "BTC", btc2];
      this._table1.row.add(row);

      var aud = rates.IDR / rates.AUD;
      var aud2 = formatCurrency(aud, "en-US", "", "AUD");
      console.log("AUD : " + aud2);
      row = [6, "AUD", aud2];
      this._table1.row.add(row);

      var eur = rates.IDR / rates.EUR;
      var eur2 = formatCurrency(eur, "en-US", "", "EUR");
      console.log("EUR : " + eur2);
      row = [7, "EUR", eur2];
      this._table1.row.add(row);

      var jpy = rates.IDR / rates.JPY;
      var jpy2 = formatCurrency(jpy, "en-US", "", "JPY");
      console.log("JPY : " + jpy2);
      row = [8, "JPY", jpy2];
      this._table1.row.add(row);

      var cad = rates.IDR / rates.CAD;
      var cad2 = formatCurrency(cad, "en-US", "", "CAD");
      console.log("CAD : " + cad2);
      row = [9, "CAD", cad2];
      this._table1.row.add(row);

      var cny = rates.IDR / rates.CNY;
      var cny2 = formatCurrency(cny, "en-US", "", "CNY");
      console.log("CNY : " + cny2);
      row = [10, "CNY", cny2];
      this._table1.row.add(row);

      this._table1.draw(false);
    })
  }
}
