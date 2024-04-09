export function addMyCall(f) {
  f.myCall = function (context, ...args) {
    //f.bind(context)(...args)とf.bind(context,...args)何が違うの？
    //=＞f.bind(context)(...args)はcontextをthisにしてfに...argsを渡してfの関数を実行する。bindはあくまで関数を定義している
    f.bind(context)(...args);
  };
}

/*これと同じ
export function addMyCall2(f) {
    f.myCall = function (context, ...args) {
      const result = f.bind(context,...args);
      return result();
    };
  }
  */
