import app from './app';

const PORT = process.env.PORT || 2024;

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
