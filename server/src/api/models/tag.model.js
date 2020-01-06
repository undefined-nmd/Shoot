import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *  schemas:
 *    Tag:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *          description: Name of the tag
 *      example:
 *        name: webdev
 */
const TagSchema = new Schema({
  name: { type: String, required: true, max: 100 },
});

export default mongoose.model('Tag', TagSchema);
