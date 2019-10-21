import { Router } from 'express';

const router = Router();

// router.get('/requests', async (req, res) => {
//   const requests = await req.context.models.Request.find();
//   return res.send(requests);
// });

router.get("/requests", async (req, res) => {
  try {
    const requests = await req.context.models.Request.findAll()
    return res.send(requests)
  } catch(error) {
    console.error(error)
  }
})

router.get('/requests/:requestId', async (req, res) => {
  const request = await req.context.models.Request.findById(
    req.params.requestId,
  );
  return res.send(request);
});

router.post('/requests', async (req, res) => {
  const request = await req.context.models.Request.create({
    text: req.body.text,
    user: req.context.me.id,
  });

  return res.send(request);
});

router.delete('/requests/:requestId', async (req, res) => {
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
