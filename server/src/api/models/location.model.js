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
 *        coordinates:
 *          type: Array
 *          description: Coordinates of the location
 *      example:
 *        name: B24
 *        coordinates: {long: 51.11, lat: 2.32}
 */
const LocationSchema = new Schema({
  name: { type: String, required: true, max: 1000 },
  coordinates: {
    long: { type: Number },
    lat: { type: Number },
  },
});

export default mongoose.model('Location', LocationSchema);
