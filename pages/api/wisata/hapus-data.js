import prisma from '../../../client.ts';

const handler = async (req,res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request Tidak Diijinkan' });
    
    const data = JSON.parse(req.body);

    const hapus = await prisma.wisata.delete({
        where: { id: data.id },
    })

    res.json(hapus);
}

export default handler