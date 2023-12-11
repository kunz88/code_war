function rot13(str) {
    const obj = {
        a: "n",
        b: "o",
        c: "p",
        d: "q",
        e: "r",
        f: "s",
        g: "t",
        h: "u",
        i: "v",
        j: "w",
        k: "x",
        l: "y",
        m: "z",
        n: "a",
        o: "b",
        p: "c",
        q: "d",
        r: "e",
        s: "f",
        t: "g",
        u: "h",
        v: "i",
        w: "j",
        x: "k",
        y: "l",
        z: "n",
        A: "N",
        B: "O",
        C: "P",
        D: "Q",
        E: "R",
        F: "S",
        G: "T",
        H: "U",
        I: "V",
        J: "W",
        K: "X",
        L: "Y",
        M: "Z",
        N: "A",
        O: "B",
        P: "C",
        Q: "D",
        R: "E",
        S: "F",
        T: "G",
        U: "H",
        V: "I",
        W: "J",
        X: "K",
        Y: "L",
        Z: "N"

    }

    return str
    .split("")
    .map((item) => {
        if (item.charCodeAt(0) < 65 || item.charCodeAt(0) > 90 && item.charCodeAt(0) < 97|| item.charCodeAt(0) > 122) return item
        return item = obj[item]
    }).join("")


}

console.log(rot13("Ci123ao..."))

