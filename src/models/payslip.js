import { Schema, model } from 'mongoose';

const payslipSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    payPeriod: { type: String, required: true },
    payFrequency: { type: String, required: true },
    annualIncome: { type: Number, required: true },
    grossIncome: { type: Number, required: true },
    incomeTax: { type: Number, required: true },
    netIncome: { type: Number, required: true },
    superAmount: { type: Number, required: true },
    pay: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export default model('Payslip', payslipSchema);
