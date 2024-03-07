const DateEntryRespons = async (req, res) => {
  try {
    const postUser = "Cheked";
    res.status(200).json(postUser);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = DateEntryRespons;
