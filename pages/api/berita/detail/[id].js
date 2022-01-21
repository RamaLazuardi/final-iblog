import prisma from '../../../../client.ts';

const handler = async (req,res) => {
    const {id} = req.query;
    const berita = await prisma.berita.findUnique({
        where:{id: Number(id)},
        include: {lengkap: true}
    })

    res.json(berita)
}

export default handler