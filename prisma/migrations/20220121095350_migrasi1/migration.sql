-- CreateTable
CREATE TABLE "Berita" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Berita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lengkap" (
    "idBerita" INTEGER NOT NULL,
    "fotoBerita" TEXT,
    "deskripsiBerita" TEXT,

    CONSTRAINT "Lengkap_pkey" PRIMARY KEY ("idBerita")
);

-- CreateTable
CREATE TABLE "Wisata" (
    "id" SERIAL NOT NULL,
    "fotoWisata" TEXT NOT NULL,
    "namaWisata" TEXT NOT NULL,
    "lokasiWisata" TEXT NOT NULL,

    CONSTRAINT "Wisata_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lengkap" ADD CONSTRAINT "Lengkap_idBerita_fkey" FOREIGN KEY ("idBerita") REFERENCES "Berita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
