import prisma from '../../../client.ts';

const handler = async (req,res) => {
    switch (req.method){
        case "POST":
            const wisata = JSON.parse(req.body);
            const create = await prisma.wisata.create({
                data: {
                    fotoWisata: wisata.fotoPath,
                    namaWisata: wisata.namaWisata,
                    lokasiWisata: wisata.lokasiWisata
                }
            });
            res.json(create);
            break
    }  
}

export default handler;