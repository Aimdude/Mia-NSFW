<<<<<<< HEAD
let message = "https://www.roblox.com/home"; // Lien par défaut

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Retourner le lien actuel
        res.status(200).json({ message });
    } else if (req.method === 'POST') {
        // Mettre à jour le lien
        const { message: newMessage } = req.body;

        if (!newMessage) {
            return res.status(400).json({ error: 'No message provided.' });
        }

        message = newMessage; // Mettre à jour le lien en mémoire
        res.status(200).json({ success: true, message });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
=======
let message = "https://www.roblox.com/home"; // Lien par défaut

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Retourner le lien actuel
        res.status(200).json({ message });
    } else if (req.method === 'POST') {
        // Mettre à jour le lien
        const { message: newMessage } = req.body;

        if (!newMessage) {
            return res.status(400).json({ error: 'No message provided.' });
        }

        message = newMessage; // Mettre à jour le lien en mémoire
        res.status(200).json({ success: true, message });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
>>>>>>> e0f745ac8eef12413829cbabcd9325cac9d58ebc
