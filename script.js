// Purpose: Creates and displays an HTML table representing data of books using 2D arrays in JS

// Create displayInventory function
function displayInventory() {
    // Inventory array
    const inventory = [
        ["Books", "The Great Gatsby", 10, 29.99],
        ["Magazines", "Time", 5, 5.99],
        ["Accessories", "Bookmark", 50, 1.99],
        ["Books", "1984", 15, 19.99],
        ["Magazines", "National Geographic", 8, 7.99],
        ["Accessories", "Reading Light", 30, 15.99]
    ];

    console.log(inventory);

    // Table initialization
    let inventoryHTML = '<table>';
    inventoryHTML += '<tr><th>Type</th><th>Name/Frequency</th><th>Quantity</th><th>Price ($)</th></tr>';

    // Loop through the inventory array and display all the items in the HTML
    inventory.forEach((item) => {
        const [type, name, quantity, price] = item;
        inventoryHTML += `
        <tr>
            <td>${type}</td>
            <td>${name}</td>
            <td>${quantity}</td>
            <td>${price}</td>
        </tr>`;
    });

    inventoryHTML += '</table>';

    document.getElementById('inventory').innerHTML = inventoryHTML;
}

// Call the function displayInventory()
displayInventory();