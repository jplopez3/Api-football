import router from '../item.router';

describe('Fixtures router', () => {
	test('should save the username and password to the database', async () => {
		const response = await request(app)
			.get('/api/v3/fixtures?team=30&last=41')
			.set('Accept', 'application/json');

		console.log(response);
		expect(response.body.userId).toBeDefined();
	});

	test('has crud routes', () => {
		const routes = [
			{ path: '/', method: 'get' },
			{ path: '/:id', method: 'get' },
			{ path: '/:id', method: 'delete' },
			{ path: '/:id', method: 'put' },
			{ path: '/', method: 'post' },
		];

		routes.forEach((route) => {
			const match = router.stack.find(
				(s) => s.route.path === route.path && s.route.methods[route.method]
			);
			expect(match).toBeTruthy();
		});
	});
});
