//DOM
const s2kvadrs = document.querySelector(".s2-itemDiv")



//Code
for (var i = 1; i <= 4; i++) {
	s2kvadrs.insertAdjacentHTML('beforeend', `
			<div class="col-lg-3">
				<div class="s2-item">
					<div class="s2-item-img"><img src="img/kvadr.png" alt="" class="s2-item-img-image"></div>
					<div class="s2-item-subtitle">Описание ${i}</div>
				</div>
			</div>
		`)
}