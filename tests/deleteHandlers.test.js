// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
        {
            "id": 7,
            "quantity": 2
        }
    ]
}

test('Response body deletes the kit', async () => {
	let postResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		postResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	let actualResponseBody;

	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});

		const postResponseBody = await response.json();
		actualResponseBody = postResponseBody.ok;
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody).toBe(true);
});

