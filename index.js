const output = document.getElementById('output');
const input = document.getElementById('submit');

const tasks = [];
//配列を生成
submit.addEventListener('click', function () {
  const text = document.getElementById('tasks');
  const input = document.createElement('button');
  input.type = 'submit';
  button.value = '作業中';
  button2.value = '削除';
  tasks.push({
    comment: text.value,
    situation: input.value,
  });
  output.innerHTML = '';
  tasks.forEach((task, index) => {
    const p = document.createElement('p');
    output.appendChild(p);
    p.innerHTML = `${index} ${task.comment} ${task.situation}`;
  });
  text.value = '';
});
