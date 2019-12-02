import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *  schemas:
 *    Location:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *          description: Name of the location
 *      example:
 *        name: B24
 */
const LocationSchema = new Schema({
  name: { type: String, required: true, max: 1000 },
});

export default mongoose.model('Location', LocationSchema);
