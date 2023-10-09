function status(request, response) {
  response.status(200).json({
    message: "Isso realmente está retornando algo",
  });
}

export default status;
