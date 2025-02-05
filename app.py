from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

# تنظیمات ایمیل (اینجا باید ایمیل و رمز اپلیکیشن خودت رو وارد کنی)
EMAIL_ADDRESS = "Amir1hossien1rabiei1@gmail.com"
EMAIL_PASSWORD = "Amir$Hossien4567"

@app.route('/send_message', methods=['POST'])
def send_message():
    try:
        data = request.json
        name = data.get("name")
        email = data.get("email")
        message = data.get("message")

        if not name or not email or not message:
            return jsonify({"error": "All fields are required"}), 400

        # ساختن ایمیل
        msg = MIMEMultipart()
        msg["From"] = EMAIL_ADDRESS
        msg["To"] = Amir1hossien1rabiei1@gmail.com  # دریافت پیام‌ها روی ایمیل خودت
        msg["Subject"] = f"New Message from {name}"

        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        msg.attach(MIMEText(body, "plain"))

        # ارسال ایمیل
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.sendmail(EMAIL_ADDRESS, EMAIL_ADDRESS, msg.as_string())

        return jsonify({"success": "Message sent successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
