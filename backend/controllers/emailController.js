import nodemailer from "nodemailer";

const email = async (req, res) => {
    const createTransporter = async () => {
        // const accessToken = await getAccessToken();
        return nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "satriaitdev@gmail.com",
                // pass: "dclfulvjtqbtyhac",
                pass: "qwkx hbwx uoaf lcga",
            },
        });
    };

    // const getEmailRecipient = (location) => {
    //     if (location.toLowerCase() === "jakarta selatan") {
    //         return "singgihbudih@gmail.com";
    //     } else if (location.toLowerCase() === "java") {
    //         return "singgihbudi.sbh@gmail.com";
    //     } else if (location.toLowerCase() === "Sate Khas Senayan, Gang Masjid, RW 01, Lebak Bulus, Cilandak, South Jakarta, Special Region of Jakarta, Java, 12450, Indonesia") {
    //         return "alwinazar75@gmail.com";
    //     } else {
    //         return "20104045@ittelkom-pwt.ac.id";
    //     }
    // };

    // const getEmailTemplate = (location) => {
    //     if (location.toLowerCase() === "Sate Khas Senayan, Gang Masjid, RW 01, Lebak Bulus, Cilandak, South Jakarta, Special Region of Jakarta, Java, 12450, Indonesia") {
    //         return "Template for Jakarta Selatan";
    //     } else if (location.toLowerCase() === "java") {
    //         return "Template for Java";
    //     } else if (location.toLowerCase() === "east java") {
    //         return "Template for East Java";
    //     } else {
    //         return "Default Template";
    //     }
    // };

    const { location } = req.body;
    // const recipient = getEmailRecipient(location);
    // const template = getEmailTemplate(location);

    const transporter = await createTransporter();

    const mailOptions = {
        from: "satriaitdev@gmail.com",
        to: "alwinazar75@gmail.com",
        subject: `Email for ${location}`,
        text: "Template for East Java",
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error("Error sending email", error);
        res.status(500).send(error.toString());
    }
};
export default email;
