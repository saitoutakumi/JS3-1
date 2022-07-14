submit.addEventListener('click', () => {
  const input = document.getElementById('task').value;
  console.log(task.value);
  //追加をクリックしたらHTML ID"task"に入力されたものを'task'としてJSで取得
  //取得成功したらログに出力

  const p = document.createElement('p');
  output.appendChild(p);
  p.innerHTML = task.value;

  const text = document.getElementById('task');
  text.value = '';
});

// まずやりたいこと

// 入力されたタスクをオブジェクトで管理する？
// →→入力された値を（①ID・②コメント・③状態）からなるオブジェクトを使って取得する
// innerHTMLでID(No.)・コメント(タスクの内容)・状態ボタン(作業中デフォ)を出力

// ①ID→は第一引数を表示させればナンバリングできる？
// ②コメント(タスクの内容)→普通に出力
// ③状態ボタン(作業中デフォ)→createElementでinput type=button辺りを生成？
