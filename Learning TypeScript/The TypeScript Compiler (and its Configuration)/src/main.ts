const button = document.querySelector('#btn');
const countEl = document.querySelector('#count');

((el) => {
  let number: number = 1;

  const count = (args: string) => {
    if (countEl) {
      countEl.innerHTML = `${number}`;
    }
    number += 1;
    console.log(args);
  };

  el && el.addEventListener('click', count.bind(null, 'smart'));
})(button);

export {};
