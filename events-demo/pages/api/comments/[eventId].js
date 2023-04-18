import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-utils';

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'could not connect to database' });
    return;
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      client.close();
      return;
    }

    const newComment = {
      eventId,
      email,
      name,
      text,
    };

    let result;
    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: 'created', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'inserting comment failed' });
      return;
    }
  }

  if (req.method === 'GET') {
    let documents;
    try {
      documents = await getAllDocuments(client, 'comments', { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: 'failed fetching comments' });
      return;
    }
  }

  client.close();
}

export default handler;
