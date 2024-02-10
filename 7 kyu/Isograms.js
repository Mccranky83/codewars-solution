const isIsogram = (str) => !/(.)(?=.*\1)/gi.test(str);
