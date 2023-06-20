exports.getPublicData = async(req, res, next) => {

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
    try { 
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: "Hello world"}],
      });
      console.log(`total_tokens = ${response.data.usage.total_tokens}`)
      console.log(`model = ${response.data.model}`)
      console.log(response.data)
      res.status(200).json({
        data: response.data.choices[0].message.content.trim()
      })
    } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
}
