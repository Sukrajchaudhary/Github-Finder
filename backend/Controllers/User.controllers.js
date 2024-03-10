exports.CreateUsers = async (req, res) => {
  const { username } = req.params;
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.accessToken}`,
      },
    });
    const userProfile = await userRes.json();
    if (userProfile.repos_url) {
      const repoRes = await fetch(userProfile?.repos_url, {
        headers: {
          authorization: `token ${process.env.accessToken}`,
        },
      });
      const repos = await repoRes.json();
      return res.status(200).json({ repos, userProfile });
    } else {
      return res.status(400).json({ error: "Something occurred!" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

