import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *  schemas:
 *    Subject:
 *      type: object
 *      required:
 *        - name
 *        - description
 *      properties:
 *        name:
 *          type: string
 *          description: Name of the subject
 *        description:
 *          type: string
 *          description: Description of the subject
 *      example:
 *        name: Web of Things
 *        description: Alles van machine learning tot web projectenn.
 */
const SubjectSchema = new Schema({
  name: { type: String, required: true, max: 255 },
  description: { type: String, required: true, max: 512 }
});

export default mongoose.model('Subject', SubjectSchema);
