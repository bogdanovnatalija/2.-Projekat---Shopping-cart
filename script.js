let sveUkupno = 0;
function dodajUkorpu(element){
//Preuzimanje podataka o odgovarajucim stavkama na osnovu input-a
let stavka = element.closest('.single-item');
let cena =  stavka.querySelector('.price').innerText;
let ime = stavka.querySelector('h3').innerText;
let kolicina = stavka.querySelector('input').value;

//Dodavanje stavki u korpu
let stavkeUkorpi = document.querySelector('.cart-items');
if(parseInt(kolicina)> 0){
	cena = cena.substring(1);
	cena = parseInt(cena);
	let ukupno = cena*parseInt(kolicina);
	sveUkupno += ukupno;
	stavkeUkorpi.innerHTML += `<div class="cart-single-item">
							   <h3>${ime}</h3>
							   <p>$${cena} x ${kolicina} = $<span>${ukupno}</span></p>
							   <button onclick ="ukloniIzKorpe(this)"class="remove-item">Ukloni</button>
							   </div>`;

	document.querySelector('.total').innerText= `Total: $${sveUkupno}`;
	element.innerText = 'Dodato';
	element.setAttribute('disabled','true');
}else {
	alert('Odaberi kolicinu');
}

}

//Funkcija za uklanjanje stavki iz korpe
function ukloniIzKorpe(element){
	let stavka =element.closest('.cart-single-item');
	let cena = stavka.querySelector('p span').innerText;
	let ime= stavka.querySelector('h3').innerText;
	let sminka = document.querySelectorAll('.single-item');
	cena = parseInt(cena);
	sveUkupno -= cena;
	document.querySelector('.total').innerText= `Total: $${sveUkupno}`;
	stavka.remove();

//Povratak mogucnosti dodavanja uklonjene stavke
sminka.forEach(function(proizvod){
 let nazivProizvoda = proizvod.querySelector('.si-content h3').innerText;

 if(nazivProizvoda === ime){
 	proizvod.querySelector('.actions input').value=0;
 	proizvod.querySelector('.actions button').removeAttribute('disabled');
 	proizvod.querySelector('.actions button').innerText= 'Dodaj';
 }

	});


}

 