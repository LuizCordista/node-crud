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
            createdAt: new Date()
        });

        res.status(201).json(customerWalletsMock)
    }

    controller.removeCustomerWallets = (req, res) => {
        const {
            customerId,
        } = req.params;

        const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id === customerId);

        if (foundCustomerIndex === -1) {
            res.status(404).json({
                message: 'Client not found in database',
                sucess: false,
                customerWallets: customerWalletsMock,
            });
        } else {
            customerWalletsMock.data.splice(foundCustomerIndex, 1);
            res.status(200).json({
                message: 'Client found and deleted with sucess',
                sucess: true,
                customerWallets : customerWalletsMock
            })
        }
    }

    controller.updateCustomerWallets = (req, res) => {
        const {
            customerId,} = req.params;

        const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id === customerId);

        if (foundCustomerIndex === -1) {
            res.status(404).json({
                message: 'Client not found in database',
                sucess: false,
                customerWallets: customerWalletsMock,
            })
        } else {
            const newCostumer = {
                id: customerId,
                name: req.body.name,
                birthDate: req.body.birthDate,
                cellphone: req.body.cellphone,
                phone: req.body.phone,
                email: req.body.email,
                occupation: req.body.occupation,
                state: req.body.state,
                createdAt: new Date()
            };

            customerWalletsMock.data.splice(foundCustomerIndex, 1, newCostumer)

            res.status(200).json({
                message: 'Client found and updated with sucess',
                sucess: true,
                customerWallets: customerWalletsMock
            })
        }
    }

    return controller;
}