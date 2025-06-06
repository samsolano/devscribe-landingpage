import express from 'express';
import { Resend } from 'resend';
import WelcomeEmail from './emails/welcome.js'; // Ensure the case and path match your file




import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';
import { dirname } from 'path';






const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();

app.use(express.json());
app.use(cors());


// Welcome email
app.post("/api/resend", async (req, res) => {
  try {

    const { email, name } = req.body; // Expecting JSON payload { "email": "user@example.com", "name": "alice" }
    if (!email) {
        return res.status(400).json({ status: "Error", error: "Missing email in request body" });
    }
    if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not defined in environment variables.");
    }
    console.log("Sending welcome email to", email, "at", new Date().toLocaleString());

    const resend = new Resend(process.env.RESEND_API_KEY);

    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome',
      react: WelcomeEmail({ name }),
    });

    if (error) {
        console.error("Resend error details:", error);
        throw new Error(error.message || JSON.stringify(error));
    }

    res.json({ status: "Ok", data });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: "Error", error: error.message });
  }
});


app.use("/", (req, res) => {
    res.send("Server is running.");
  });

  
  if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    app.listen(8376, () => {
      console.log("Server started on PORT 8376");
    });
  }
  
export default app;


// update api path in frontend, add vercel.json file in backend
