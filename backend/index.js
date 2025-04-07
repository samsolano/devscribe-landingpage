const express = require("express");
const { Resend } = require("resend");
const WelcomeEmail = require("../../../emails/welcome"); // Adjust the path as needed

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Create an endpoint to send the welcome email
app.post("/api/resend", async (req, res) => {
  try {
    const name = 'sam';
    const { email } = req.body; // Expecting JSON payload { "email": "user@example.com" }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome',
      react: WelcomeEmail({ name }),
    });

    res.json({ status: "Ok" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: "Error", error: error.message });
  }
});

// Start the server
app.listen(8376, () => {
  console.log("Server started on PORT 8376");
});