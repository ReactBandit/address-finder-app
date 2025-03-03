import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    query: { type: String, required: true },
    results: { type: Object, required: true },
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

export default Address;
