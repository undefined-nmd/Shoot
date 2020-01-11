import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *  schemas:
 *    Badge:
 *      type: object
 *      required:
 *        - name
 *        - image
 *        - score
 *      properties:
 *        name:
 *          type: string
 *          description: Name of the badge
 *        image:
 *          type: string
 *          description: Link to the image file
 *        score:
 *          type: number
 *          description: Score required to receive badge
 *      example:
 *        name: Fresh start
 *        image: link/images/badges/freshStart.svg
 *        score: 100
 */
const BadgeSchema = new Schema({
  name: { type: String, required: true, max: 128 },
  image: { type: String, required: true },
  score: { type: Number, required: true },
});

export default mongoose.model('Badge', BadgeSchema);
