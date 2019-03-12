let bikesDiv = document.querySelector('.bikesDiv');
function printBikes(e){
	e.forEach( function(element, index) {
	bikesDiv.innerHTML += `<div class="col-lg-4 col-md-4">
	<a href="#" class="bike">
	<div class="cardBorderGrey card">
		<div class="imgDiv">
		<img src="img/${element.image}.png">
		</div>
		<div class="bottom">
		<h4 class="bold">${element.brand}</h4>
		<p>${element.price}&ensp;<span>$</span></p>
		</div>
	</div></a>
	</div>`
});
}
printBikes(products);
let bikesArr = [];
let badges = document.querySelectorAll('.badge');
let links = document.querySelectorAll('.navLink');
links.forEach( function(element, index) {
	element.addEventListener('click', function(e){
		e.preventDefault();
		links.forEach( function(elementn, indexn) {
			elementn.classList.remove('clicked');
		});
		element.classList.add('clicked');
		badges.forEach( function(elementB, indexB) {
			elementB.classList.remove('orangeB');
			if(index === indexB){
				elementB.classList.add('orangeB');
				}
			});
			if(e.target.id === 'SHOW'){
			bikesArr = [];
			bikesDiv.innerHTML = ``;
			printBikes(products);
			e.target.lastChild.innerText = products.length;
			}else{
				bikesArr = [];
			bikesDiv.innerHTML = ``;
			bikesArr = products.filter(function(index) {
				return index.gender === e.target.id || index.brand.includes(e.target.id);
			});
			printBikes(bikesArr);
			e.target.lastChild.innerText = bikesArr.length;
		}
	});
});

// write your code here
// use products array from the other file in here 
// (yes you can use it, it doesn't matter if it's from another file)