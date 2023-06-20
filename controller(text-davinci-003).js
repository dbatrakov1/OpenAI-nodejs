exports.getDavinciData = async(req, res, next) => {

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
    try { 
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Most popular name in Russia",
        temperature: 1,
        max_tokens: 20,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(`total_tokens = ${response.data.usage.total_tokens}`)
      console.log(`total_tokens = ${response.data.usage.total_tokens}`)
      res.status(200).json({
        data: response.data.choices[0].text.trim()
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
