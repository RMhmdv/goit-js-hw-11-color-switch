import './styles.css';

const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"'),
}
  
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
 const setRandomColor = () => {
  const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(currentColor);
  document.body.style.backgroundColor = currentColor;
}

    let interval = undefined;

refs.startBtn.addEventListener('click',onStartBtnClick );


function onStartBtnClick() {
  
  return interval = interval ? interval : setInterval(() => setRandomColor(), 1000);

}


refs.stopBtn.addEventListener('click', () => clearInterval(interval));