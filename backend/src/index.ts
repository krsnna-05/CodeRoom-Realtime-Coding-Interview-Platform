import { Request, Response } from 'express';
import { app } from './server';

app.get('/health', (req: Request, res: Response) => {
  return res.send({
    status: 'Running',
  });
});

app.listen('3000', () => {
  console.log('server is running on port : 3000');
});
