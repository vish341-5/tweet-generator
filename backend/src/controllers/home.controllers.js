const Groq = require('groq-sdk');
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

async function generateTweet(req,res) {
    try {
        const { prompt } = req.body;

        const response = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: `Generate 5 tweets copying the tone and authencity of the user's writing style. The tweets should be like the following tweets: ${prompt}.do not use numbering for the list`
                }
            ]
        });

        res.json({
            tweets: response.choices[0].message.content
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    generateTweet
}