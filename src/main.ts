import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function fizetes() : void{
  const nev = (document.getElementById('nev') as HTMLInputElement).value;
  const orszag = (document.getElementById('orszag') as HTMLInputElement).value;
  const varos = (document.getElementById('varos') as HTMLInputElement).value;
  const utcaHazsz = (document.getElementById('utcaHazsz') as HTMLInputElement).value;
  const iranyitoszam = (document.getElementById('iranyitoszam') as HTMLInputElement).value;
  const kartyaSzam = (document.getElementById('kartyaSzam') as HTMLInputElement).value;
  const kartyaKod = (document.getElementById('kartyaKod') as HTMLInputElement).value;
  const kartyaNev = (document.getElementById('kartyaNev') as HTMLInputElement).value;

  const error = document.getElementById('error')! as HTMLElement;

  if(!/[a-záéíóöőúüű]+/i.test(nev)){
    error.textContent = "Hibás név";
    throw new Error("Rossz név");
  }
  if(!/[a-záéíóöőúüű]+/i.test(orszag)){
    error.textContent = "Hibás ország";
    throw new Error("Rossz ország");
  }
  if(!/[a-záéíóöőúüű]+/i.test(varos)){
    error.textContent = "Hibás város";
    throw new Error("Rossz város");
  }
  if(!/[a-z0-9 ]+/i.test(utcaHazsz)){
    error.textContent = "Hibás utca, házszám";
    throw new Error("Rossz utca, házszám");
  }
  if(!/.[0-9A-Z]+/.test(iranyitoszam)){
    error.textContent = "Hibás irányítószám";
    throw new Error("Rossz irányítószám");
  }
  if(!/^[0-9]{4}-[0-9]{4}$/.test(kartyaSzam)){
    error.textContent = "Hibás bankkártya szám";
    throw new Error("Rossz bankkártya szám");
  }
  if(!/^[0-9]{3}$/.test(kartyaKod)){
    error.textContent = "Hibás ellenorző kód";
    throw new Error("Rossz ellenorző kód");
  }
  if(!/^[a-z ]+$/i.test(kartyaNev)){
    error.textContent = "Hibás ellenorző kód";
    throw new Error("Rossz ellenorző kód");
  }

  error.textContent = "";
  siker();
}

function siker() : void{
  document.body.innerHTML = "";

  const bs = document.createElement('div')
  bs.classList.add('container');

  const szoveg = document.createElement('p');
  szoveg.textContent = 'Sikeres fizetés!';
  szoveg.style.color = 'green';
 
  bs.appendChild(szoveg)
  document.body.appendChild(bs);
}

document.addEventListener('DOMContentLoaded',() => {
  document.getElementById('btn')?.addEventListener('click',fizetes);
})