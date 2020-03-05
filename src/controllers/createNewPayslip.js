import Payslip from '../models/payslip';
import { ALREADY_PAID } from '../errors';

export default async function createNewPayslip(ctx) {
  const payslip = ctx.request.body;

  const isExisted = await Payslip.exists({
    $and: [
      { firstName: payslip.firstName },
      { lastName: payslip.lastName },
      { payPeriod: payslip.payPeriod },
    ],
  });

  if (isExisted) {
    ctx.throw(400, 'This person is already paid in this month!', { type: ALREADY_PAID });

    return;
  }

  const newPayslip = new Payslip({ ...payslip });
  await newPayslip.save();
  ctx.status = 200;
}
