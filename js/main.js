const main = document.querySelector('main');
const [topEl, rightEl, bottomEl, leftEl, conEl] = main.children;
const btn = document.querySelector('button');
const speed = 500;
const btnClose = conEl.querySelector('span');
const delayed = convertSpeed(conEl);
//먼저 필요한 함수 가져오기

btn.addEventListener('click', panelOpen);
btnClose.addEventListener('click', panelClose);

function panelOpen() {
	new Anime(
		topEl,
		{ width: '100%' },
		{
			duration: 500,
			callback: () => {
				new Anime(
					rightEl,
					{ height: '100%' },
					{
						duration: speed,
						callback: () => {
							new Anime(
								bottomEl,
								{ width: '100%' },
								{
									duration: speed,
									callback: () => {
										new Anime(
											leftEl,
											{ height: '100%' },
											{
												duration: speed,
												callback: () => {
													//new Anime(conEl, { opacity: 1 }, { duration: speed });
													conEl.classList.add('on');
													btn.classList.add('off');
												},
											}
										);
									},
								}
							);
						},
					}
				);
			},
		}
	);
}

//미션 - 닫기버튼 클릭시 con 먼저 fade out 처리 후 비동기적으로 top, right, left, bottom 한번에 선이 사라지고 다시 open 버튼이 보이도록
function panelClose() {
	conEl.classList.remove('on');

	setTimeout(() => {
		[leftEl, rightEl].forEach((el) => new Anime(el, { height: '0%' }, { duration: speed }));
		[bottomEl, topEl].forEach((el) => new Anime(el, { width: '0%' }, { duration: speed }));
	}, delayed);

	btn.classList.remove('off');
}

//css의 초를 milliscd로 문자값을 숫자로 변환해서 초 가져오기
function convertSpeed(el) {
	//parseFloat, parseInt는 문자값이 같이 있는 문자열이더라도 숫자로 시작되는 문자열이면 자동으로 숫자로 형변환처리 됨
	return parseFloat(getComputedStyle(el).transitionDuration) * 1000;
}
