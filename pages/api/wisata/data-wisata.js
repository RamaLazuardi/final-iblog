import prisma from '../../../client.ts';

const handler = async (req,res) => {
    const wisata = await prisma.wisata.findMany();
    res.json(wisata)
}

export default handler;