#!/usr/bin/env node
const fs = require("node:fs");

class PackageInfo {
    static read() {
        const file = fs.readFileSync("./package.json", "utf8");
        return file;
    }

    static get parse() {
        return JSON.parse(PackageInfo.read());
    }
}

class Filer {
    static read_file(file_path) {
        const file = fs.readFileSync(file_path, "utf8");
        return file;
    }
}

class Data {
    static CONFIG = {
        "pkg": PackageInfo.parse
    }
}

class Turner {
    static turn() {
        /* 
        bu yaptıklarımı bir paket haline getirebilirim. Hatta bunu bir global paket haline
        getirebilirim. Mesela fvin adında bir paket olabilirmi? yada fvlint.

        .fv uzantılı dosyaları tara ve ~pkg.version~ yani yandan süslü
        parantezler arasında bulduklarını buraya yerleştir.
        süslüler arasındakileri alıp Data.CONFIG'in sonuna ekleyip çalıştıracam
        Data.CONFIG.{süslüler}

        config dosyalarımızı da .fvrc den alacağız. Data.CONFIG = .fvrc

        mesela package.fv diye bir dosya var ve bunu package.json olarak çıkarmak istiyoruz.
        o zaman .fv dosyamızın en başına bu satırları eklemeliyiz.
        ---
        output: package.json
        ---

        mesela bir dosya içeriğini herhangi bir değişkene aktarmak daha sonra o değişkeni
        bir değere aktarmak istersem o zaman

        test.fv
        ---
        import: [fs]
        pkg_info: readFileSync(package.json)
        ---
        
        const pkg = JSON.parse(pkg_info);
        */
    }
}