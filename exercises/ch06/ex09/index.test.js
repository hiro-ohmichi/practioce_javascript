const mock = jest.fn();

const obj = {
  x: 0,
  y: 0,
  sum() {
    mock();
    return this.x + this.y;
  },
};

//ここに何か足す
//obj.sum = obj.sum();
// 答え
obj["sum"].toJSON = () => obj.sum();

obj.x = 1;
obj.y = 2;
expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
expect(mock).toHaveBeenCalled();
