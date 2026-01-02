import jwt from "jsonwebtoken";

export const generateToken = (res, user) => {
  const token = jwt.sign(
    { id: user._id, email: user.personalInfo.email },
    process.env.mySecret,
    { expiresIn: "7d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
