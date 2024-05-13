// 参考https://www.wp-benricho.com/email-address-99/
export function isEmailAddress(str: string) {
  if (!str) {
    return false;
  }
  // メールアドレスの正規表現パターン
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const localDot = str.split("@");
  console.log(str);
  console.log(localDot[0].length);
  if (localDot[0].length > 64) {
    return false;
  }
  // eslint-disable-next-line no-control-regex
  const fullWidthPattern = /[^\x01-\x7E]/;
  // 全角文字が含まれている場合は false を返す
  if (fullWidthPattern.test(str)) {
    return false;
  }
  return emailPattern.test(str);
}

/*
解説
最初の部分はローカル部分（local part）と呼ばれるメールアドレスの最初の部分を検証し、2番目の部分はドメイン部分（domain part）を検証


[^<>()[\]\\.,;:\s@"]+: メールアドレス内の特定の文字を除くすべての文字が1回以上の繰り返し（+）で表されます。これには、<>()[\]、;:\s@のいずれかが含まれていないことを意味します。
(\.[^<>()[\]\\.,;:\s@"]+)*: ピリオド（.）で始まり、その後に特定の文字を除くすべての文字が1回以上の繰り返しで続く、グループ内のパターンです。これは、ピリオドで区切られたドメインのサブドメインのようなものを許可します。
(".+"): ダブルクォート（"）で囲まれた1文字以上のすべての文字が含まれる場合を受け入れます。

(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]): IPv4形式のIPアドレスを受け入れます。
(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}): ドメイン名の構文を受け入れます。これは、少なくとも2つのドメインコンポーネント（例：example.com）を持つものを受け入れます。
*/
