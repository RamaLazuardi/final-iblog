import prisma from '../../../client.ts';

const handler = async (req,res) => {
    const berita = await prisma.berita.findMany();
    res.json(berita);
}

export default handler