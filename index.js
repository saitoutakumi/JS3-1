const tasks = document.getElementById('tasks');
const input = document.getElementById('submit');

submit.addEventListener('click', function () {
  // console.log(tasks.value);

  const tasks = [
    {
      ID: '${index}',
      comment: document.getElementById('tasks').value,
      situation: '実行/削除ボタン',
      //?IDが含まれていることになるのか
    },
  ];

  const p = document.createElement('p');
  output.appendChild(p);
  tasks.forEach(
    (tasks, index) =>
      (p.innerHTML = `${index}  ${tasks.comment}  ${tasks.situation}`)
  );
  tasks.push(tasks.value);
  //IDが0,1,2・・とならない
  // ループできていないから？
  const text = document.getElementById('tasks');
  text.value = '';
});

// まずやりたいこと
//
//=======================================================================
// 入力されたタスクをオブジェクトで管理する？
// →→入力された値を（①ID・②コメント・③状態）からなるオブジェクトを使って取得する
// innerHTMLでID(No.)・コメント(タスクの内容)・状態ボタン(作業中デフォ)を出力

// ①ID→は第一引数を表示させればナンバリングできる？
// ②コメント(タスクの内容)→普通に出力
// ③状態ボタン(作業中デフォ)→createElementでinput type=button辺りを生成？
