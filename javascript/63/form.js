/*global $*/

(function () {
    'use strict';

    const theTable = $('#contactsTable tbody');

    const contacts = [];

    function addContact(newContact) {
        if (!contacts.length) {
            theTable.empty();
        }

        contacts.push(newContact);

        theTable.append(`<tr>
                            <td>${newContact.firstName}</td>
                            <td>${newContact.lastName}</td>
                            <td>${newContact.address}</td>
                         </tr>`);
    }

    const firstNameInput = $('#first');
    const lastNameInput = $('#last');
    const addresssInput = $('#address');
    const contactForm = $('#contactForm');


    contactForm.submit(event => {
        if ($('#checkbox').is(":checked")) {
            const newContact = {
                firstName: firstNameInput.val(),
                lastName: lastNameInput.val(),
                address: addresssInput.val()
            };

            addContact(newContact);
        }


        event.preventDefault();
    });

}());