const PORT = process.env.PORT || 5000;
// import dotenv from 'dotenv';
// dotenv.config();

const startServer = async (app: any) => {
  try {
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}...|http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

export default startServer;
