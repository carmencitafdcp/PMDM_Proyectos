import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { GasAppService } from '../../services/gasapp-service';
import { Provincia } from '../../models/provincias-list-response.interface';
import { Municipio } from '../../models/municipios-provincia-list-response.interface';
import { EstacionMunicipioMap } from '../../models/gasolineras-municipio-bien-response.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent implements OnInit {
  provincias: Provincia[] = [];
  municipios: Municipio[] = [];
  estaciones: EstacionMunicipioMap[] = [];

  form = new FormGroup({
    provincia: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    municipio: new FormControl<string>({ value: '', disabled: true }),
  });

  loadingProvincias = true;
  loadingMunicipios = false;
  loadingEstaciones = false;
  errorMsg: string | null = null;

  constructor(private gasService: GasAppService) {}

  ngOnInit(): void {
    this.gasService.getProvinciasList().subscribe({
      next: (resp) => {
        this.provincias = [...resp].sort((a, b) => a.Provincia.localeCompare(b.Provincia));
        this.loadingProvincias = false;
      },
      error: () => {
        this.errorMsg = 'No se pudieron cargar las provincias.';
        this.loadingProvincias = false;
      },
    });

    this.form.controls.provincia.valueChanges.subscribe((provId) => {
      this.errorMsg = null;
      this.municipios = [];
      this.estaciones = [];

      this.form.controls.municipio.reset();
      this.form.controls.municipio.disable();

      if (provId && provId.trim() !== '') {
        this.loadingMunicipios = true;
        this.gasService.getMunicipiosPorProvincia(provId).subscribe({
          next: (resp) => {
            this.municipios = [...resp].sort((a, b) => a.Municipio.localeCompare(b.Municipio));
            this.loadingMunicipios = false;
            this.form.controls.municipio.enable();
          },
          error: () => {
            this.errorMsg = 'No se pudieron cargar los municipios.';
            this.loadingMunicipios = false;
          },
        });
      }
    });

    this.form.controls.municipio.valueChanges.subscribe((munId) => {
      this.errorMsg = null;
      this.estaciones = [];

      if (munId && munId.trim() !== '') {
        this.loadingEstaciones = true;
        this.gasService.getEstacionesMunicipio(munId).subscribe({
          next: (resp) => {
            this.estaciones = resp;
            this.loadingEstaciones = false;
          },
          error: () => {
            this.errorMsg = 'No se pudieron cargar las estaciones.';
            this.loadingEstaciones = false;
          },
        });
      }
    });
  }

  trackProvincia = (_: number, p: Provincia) => p.IDPovincia;
  trackMunicipio = (_: number, m: Municipio) => m.IDMunicipio;
  trackEstacion = (_: number, e: EstacionMunicipioMap) => e.ideess;

  carburantes(e: EstacionMunicipioMap) {
    const pairs: { label: string; value: string }[] = [
      { label: 'GLP', value: e.precioGlp },
      { label: 'Gasóleo A', value: e.precioGasoleoA },
      { label: 'Gasóleo B', value: e.precioGasoleoB },
      { label: 'Gasóleo Premium', value: e.precioGasoleoPremium },
      { label: 'Gasolina 95 E5', value: e.precioGasolina95E5 },
      { label: 'Gasolina 95 E5 Premium', value: e.precioGasolina95E5Premium },
      { label: 'Gasolina 95 E10', value: e.precioGasolina95E10 },
      { label: 'Gasolina 95 E25', value: e.precioGasolina95E25 },
      { label: 'Gasolina 95 E85', value: e.precioGasolina95E85 },
      { label: 'Gasolina 98 E5', value: e.precioGasolina98E5 },
      { label: 'Gasolina 98 E10', value: e.precioGasolina98E10 },
      { label: 'Gasolina Renovable', value: e.precioGasolinaRenovable },
      { label: 'Diésel Renovable', value: e.precioDieselRenovable },
      { label: 'GNC', value: e.precioGasNaturalComprimido },
      { label: 'GNL', value: e.precioGasNaturalLicuado },
      { label: 'Hidrógeno', value: e.precioHidrogeno },
      { label: 'AdBlue', value: e.precioAdblue },
      { label: 'Amoniaco', value: e.precioAmoniaco },
      { label: 'Biodiésel', value: e.precioBiodiesel },
      { label: 'Bioetanol', value: e.precioBioetanol },
      { label: 'Biogás NC', value: e.precioBiogasNaturalComprimido },
      { label: 'Biogás NL', value: e.precioBiogasNaturalLicuado },
      { label: 'Metanol', value: e.precioMetanol },
    ];

    return pairs.filter((p) => p.value && p.value.trim() !== '' && p.value.trim() !== '0,000');
  }
}