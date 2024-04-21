const OpenAI = require("openai");

// Store your API key as a string
const apiKey = "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";

// Initialize the OpenAI client with the API key
const openai = new OpenAI({ apiKey });

async function main() {
  try {
    // Make a request using the OpenAI client
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    // Log the response
    console.log(completion.choices[0]);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("An error occurred:", error);
  }
}

// Call the main function
main();
