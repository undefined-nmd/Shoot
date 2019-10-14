import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const requests = await req.context.models.Request.find();
  return res.send(requests);
});

router.get('/:requestId', async (req, res) => {
  const request = await req.context.models.Request.findById(
    req.params.requestId,
  );
  return res.send(request);
});

router.post('/', async (req, res) => {
  const request = await req.context.models.Request.create({
    text: req.body.text,
    user: req.context.me.id,
  });

  return res.send(request);
});

router.delete('/:requestId', async (req, res) => {
  const request = await req.context.models.Request.findById(
    req.params.requestId,
  );

  let result = null;
  if (request) {
    result = await request.remove();
  }

  return res.send(result);
});

export default router;
