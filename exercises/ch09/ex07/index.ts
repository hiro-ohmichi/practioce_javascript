//機能として使うものは移譲で渡していく
// 鳴く振る舞いを持つクラス
class Vocal {
    makeSound() {
      ...
    }
  }
  
  // 動物の基本的な振る舞いを持つクラス
  class Animal {
    eat() {
      ...
    }
  }
  
  // 犬の振る舞いを持つクラス
  class Dog extends Animal {
    bite() {
      ...
    }
    
    // 犬は鳴くので Vocal クラスを含む
    private vocal: Vocal = new Vocal();
    
    makeSound() {
      this.vocal.makeSound();
    }
  }
  
  // ハスキーの振る舞いを持つクラス
  class Husky extends Dog {
    // ハスキーは犬なので Dog クラスの振る舞いを持つ
  }
  
  // 猫の振る舞いを持つクラス  
  class Cat extends Animal {
    scratch() {
      ...
    }
  
    // 猫は鳴くので Vocal クラスを含む  
    private vocal: Vocal = new Vocal();
  
    makeSound() {
      this.vocal.makeSound();
    }
  }
  
  // 鳥の振る舞いを持つクラス
  class Bird extends Animal {
    fly() {
      ...
    }
  
    // 鳥は鳴くので Vocal クラスを含む
    private vocal: Vocal = new Vocal();
  
    makeSound() {
      this.vocal.makeSound();
    }
  }
  
  // 魚の振る舞いを持つクラス
  class Fish extends Animal {
    swim() {
      ...
    }
    
    // 魚は鳴かないので Vocal クラスを含まない
  }