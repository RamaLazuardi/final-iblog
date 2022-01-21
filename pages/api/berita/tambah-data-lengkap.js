import prisma from '../../../client.ts';

const handler = async (req,res) => {
    if(req.method !== 'POST')
        return res
            .status(405)
            .json({ message : 'Reques Tidak Diijinkan' });

    const berita = JSON.parse(req.body); 

    const tambah = await prisma.berita.create({
        data: {
            nama: berita.namaBerita,
            lengkap: {
                create: {
                    deskripsiBerita: berita.deskripsiBerita,
                    fotoBerita: berita.fotoPath,
                }
            }
        }
    })
    
    res.json(tambah);
}

export default handler;