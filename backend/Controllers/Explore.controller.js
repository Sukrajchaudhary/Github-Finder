exports.ExplorePages = async (req, res) => {
    const { language } = req.params;
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&per_page=10&sort=stars`,
        {
          headers: {
            authorization: `token ${process.env.accessToken}`,
          },
        }
      );
      const data = await response.json();
      if (data) {
        return res.status(200).json(data.items);
      } else {
        return res.status(400).json({ error: "Internal Server Error" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  