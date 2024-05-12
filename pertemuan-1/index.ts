// INFERENTION
let bilangan: number = 21;
console.log(bilangan);

let message: string = "Hello World";
console.log(message);

interface Orang {
  id: number;
  nama: string;
}

function cetakNama(orang: Orang): void {
  return console.log(orang.nama);
}

// cetakNama();

interface Mahasiswa extends Orang {
  fakultas: string;
}
interface Dosen extends Orang {
  matakuliah: string;
}

let orang1: Orang = {
  id: 1,
  nama: "Prabowo",
};

let mahasiswa: Mahasiswa = {
  id: 1,
  nama: "Prabowo",
  fakultas: "Militer",
};

console.log(mahasiswa.fakultas);

interface Komunitas<Type> {
  id: number;
  nama: string;
  cetakAnggota: () => Type;
}

const komunitas1: Komunitas<Mahasiswa> = {
  id: 0,
  nama: "",
  cetakAnggota: function (): Mahasiswa {
    throw new Error("Function not implemented.");
  },
};
