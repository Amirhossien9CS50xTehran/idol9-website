const nodemailer = require("nodemailer");

exports.handler = async (event) => {
    const { name, email, message } = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your-email@gmail.com",
            pass: "your-email-password"
        }
    });

    let mailOptions = {
        from: email,
        to: "owner-email@example.com",
        subject: "New Contact Form Message",
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return { statusCode: 200, body: JSON.stringify({ message: "Message sent successfully!" }) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ message: "Failed to send message." }) };
    }
};
