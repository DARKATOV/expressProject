//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({message: 'Get all contacts'})
}

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`})
}

//@desc Create a new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log('The request body is', req.body)
    const {name, email, phone} = req.body
    if (!name || !phone){
        res.status(400)
        throw new Error('Some fields are mandatory')
    } else {
        res.status(200).json({message: 'Add a new contact'})
    }
}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`})
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
}


module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }

