class C {
    _length = 0;
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value;
    }
  }

  const newC = new C()

  console.log(newC.length)

