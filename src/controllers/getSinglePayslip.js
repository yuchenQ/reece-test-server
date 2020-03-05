import Payslip from '../models/payslip';

export default async function getSinglePayslip(ctx) {
  const { firstName, lastName, payPeriod } = ctx.query;

  const [payslip] = await Payslip.find({
    firstName,
    lastName,
    payPeriod,
  });

  ctx.body = {
    payslip,
  };
}
