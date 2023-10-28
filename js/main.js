const btn = document.querySelector('button');
// const box = document.querySelector('article');

/*
  new Anime(선택자, {변경할 속성객체}, {duration:시간, easeType: 가속도타입, callback: 완료함수})

  left, top, width, height, opacity, scroll
*/

btn.addEventListener('click', () => {
	new Anime(
		window,
		{ scroll: 3000 },
		{
			duration: 1000,
			easeType: 'linear',
			callback: () => {
				new Anime(window, { scroll: 1000 }, { duration: 600, easeType: 'ease1' });
			},
		}
	);
});
