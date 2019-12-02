import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *  schemas:
 *    Role:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *          description: name of the role
 *      example:
 *        name: Admin
 */
const RoleSchema = new Schema({
  name: { type: String, required: true, max: 100 },
});

export default mongoose.model('Role', RoleSchema);
