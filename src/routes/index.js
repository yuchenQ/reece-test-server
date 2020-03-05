import Router from '@koa/router';
import getSinglePayslip from '../controllers/getSinglePayslip';
import createNewPayslip from '../controllers/createNewPayslip';

const APIRouter = new Router({
  prefix: '/api',
});

APIRouter.get('/payslip', getSinglePayslip);
APIRouter.post('/payslip', createNewPayslip);

export default APIRouter;
