const errorMiddleware = (err, req, res, next) => {
  const status = err.stetus || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails || "ERROR FROM BACKEND";

  return res.status(status).json({ message, extraDetails });
};

export default errorMiddleware;
