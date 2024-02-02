const app = require("./server/app");

const PORT = process.env.PORT || 3000;

const init = async () => {
    try {
        await db.sync();

        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    } catch (error) {
        console.error('Error starting server:', error)
    }
};

init();