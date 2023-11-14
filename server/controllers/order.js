import MedicineModel from '../models/medicine.js';
import OrderModel from '../models/order.js';
import PatientModel from '../models/patient.js';


async function calculateCartTotalPrice(cart) {

  console.log(cart);
  let total = 0;


  for (const cartItem of cart) {
    // const patientWithCart = PatientModel
    // .findById('652aebde203548e19b62d4b1')
    // .populate({
    //   path: 'cart.medicine', // Populate the 'medicine' field inside the 'cart' array
    //   model: 'Medicine', // Specify the model to use for populating
    // })
    // .exec();
    const medicine = await MedicineModel.findById(cartItem.medicine);
    console.log(medicine);
    total += medicine.price * cartItem.quantity;
    console.log(medicine.price);
    console.log(cartItem.quantity);

  }
  console.log(total);
  return total;
}

const addOrder = async (req, res) => {
  const pat=await PatientModel.findOne({user:res.locals.userId})
  const patientId = pat._id;
  const { deliveryAddress, paymentMethod } = req.body;

  try {
    const patient = await PatientModel.findOne(patientId);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    const cartItems = patient.cart;
    let total = 0;

    for (const cartItem of cartItems) {
      if (medicine) {
      const medicine = await MedicineModel.findById(cartItem.medicine);
      console.log(medicine);
      total += medicine.price * cartItem.quantity;
      console.log(medicine.price);
      console.log(cartItem.quantity);
      } 
  
    }
    const order = new OrderModel({
      patient: patientId,
      deliveryAddress,
      paymentMethod,
      items: cartItems,
      status: 'Pending',
      total: total
    });

    await order.save();

    // Clear the patient's cart after placing the order
    patient.cart = [];
    await patient.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//not linkedd with front end
const viewOrderDetails = async (req, res) => {
  const orderId = '6551ff758f207fe689a67e5f';

  try {
    const order = await OrderModel.findById(orderId).populate('items.medicine');

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getOrders = async (req, res) => {
  const pat=await PatientModel.findOne({user:res.locals.userId})
  const patientId = pat._id;
  try {
    const order = await OrderModel.find({patient: patientId});
    console.log(order);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//not linkedd with front end
const cancelOrder = async (req, res) => {
  const orderId = '6551ff758f207fe689a67e5f';

  try {
    const order = await OrderModel.findById(orderId);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    if (order.status !== 'Pending') {
      return res.status(400).json({ error: 'Cannot cancel order. Status is not Pending.' });
    }

    order.status = 'Cancelled';
    await order.save();

    res.status(200).json({ message: 'Order cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  addOrder,
  viewOrderDetails,
  cancelOrder, 
  getOrders
}
