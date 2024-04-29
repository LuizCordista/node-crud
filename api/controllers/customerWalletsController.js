const { uuid } = require('uuidv4');

module.exports = app => {
    const customerWalletsDB = app.data.customerWalletsData
    const controller = {};

    const {
        customerWallets: customerWalletsMock,
    } = customerWalletsDB;

    controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsDB);

    controller.saveCustomerWallets = (req, res) => {
        customerWalletsMock.data.push({
            id: uuid(),
            parentId: uuid(),
            name: req.body.name,
            birthDate: req.body.birthDate,
            cellphone: req.body.cellphone,
            phone: req.body.phone,
            email: req.body.email,
            occupation: req.body.occupation,
            state: req.body.state,
        });

        res.status(201).json(customerWalletsMock)
    }

    return controller;
}